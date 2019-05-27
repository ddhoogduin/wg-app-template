from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from configs.Database import Database

app = Flask(__name__)
app = Database(app).get_app()
db = SQLAlchemy(app)

