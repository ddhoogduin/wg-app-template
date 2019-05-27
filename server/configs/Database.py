import sys
from environs import Env


class Database:
    def __init__(self, app):
        env = Env()
        env.read_env()
        uri = "{dialect}://{user}:{password}@{db_host}/{db_name}".format(
            dialect="postgres",
            user=env('DB_USER'),
            password=env('DB_PASSWORD'),
            db_host=env('DB_HOST'),
            db_name=env('DB_NAME')
        )
        app.config['SQLALCHEMY_DATABASE_URI'] = uri
        self.app = app

    def get_app(self):
        return self.app




