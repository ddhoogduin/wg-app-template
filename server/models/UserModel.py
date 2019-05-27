from config import db


class UserModel(db.Model):

    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    firstname = db.Column(db.String(255))
    lastname = db.Column(db.String(255))

    def login(self, email, password):
        return UserModel.query.filter(
            UserModel.email == str(email),
            UserModel.password == str(password)).first()

    def set_user(self, first_name, last_name, email, password):
        self.firstname = first_name
        self.lastname = last_name
        self.email = email
        self.password = password

    def create_instance(self):
        db.session.add(self)
        db.session.commit()

    def get_all(self):
        return self.query.all()


