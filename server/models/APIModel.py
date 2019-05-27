from models.Model import Model
from config import db


class APIModel(Model):

    __tablename__ = 'API'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))
    url = db.Column(db.String(255))
