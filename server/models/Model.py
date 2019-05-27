from config import db


class Model(db.Model):

    __abstract__ = True

    def get_list(self):
        return self.query.all()

    def get_one(self, identifier_field, identifier_value):
        return self.query.filter(
            identifier_field == identifier_value).first()

    def get_list_by(self, identifier_field, identifier_value):
        return self.query.filter(
            identifier_field == identifier_value).all()

    def get_one_by(self, identifier_field, identifier_value):
        return self.query.filter(
            identifier_field == identifier_value).first()

    def delete_by(self, identifier_field, identifier_value):
        return self.query.filter(identifier_field == identifier_value).delete(synchronize_session=False)

    def add(self):
        return db.session.add(self)

    def commit(self):
        return db.session.commit()