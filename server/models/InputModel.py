from models.Model import Model
from models.APIModel import APIModel
from config import db
from sqlalchemy.orm import relationship


class InputModel(Model):

    __tablename__ = 'form_input'

    id = db.Column(db.Integer, primary_key=True)
    form_id = db.Column(db.Integer)
    name = db.Column(db.String(40))
    type = db.Column(db.String(255))
    parameter = db.Column(db.String(255))
    label = db.Column(db.String(255))
    options = db.Column(db.JSON)
