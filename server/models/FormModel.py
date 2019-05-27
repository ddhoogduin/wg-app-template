from models.Model import Model
from models.APIModel import APIModel
from config import db
from sqlalchemy.orm import relationship


class FormModel(Model):

    __tablename__ = 'form'

    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer())
    API_id = db.Column(db.Integer, db.ForeignKey("API.id"))
    name = db.Column(db.String(40))
    tool_name = db.Column(db.String(255))
    published = db.Column(db.Boolean)
    job_description = db.Column(db.Text)
    modified_at = db.Column(db.Date)

    api = relationship("APIModel")

    @property
    def api_name(self):
        return self.api.name


    def get_list_by(self, identifier_field, identifier_value):

        return self.query.filter(
            identifier_field == identifier_value).from_self().join(APIModel).all()