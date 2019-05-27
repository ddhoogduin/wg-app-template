from config import db
from models.Model import Model


class ClientModel(Model):

    __tablename__ = 'client'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40))
    alias = db.Column(db.String(40))
    website = db.Column(db.Text)
    description = db.Column(db.Text)
    modified_at = db.Column(db.Date)