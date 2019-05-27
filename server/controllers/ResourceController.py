from flask_restful import Resource, reqparse
from flask import send_file
from models.ClientModel import ClientModel
from views.ClientView import ClientView

from constants.types.client import CLIENT_GET_LIST_SUCCESS,\
                                 CLIENT_GET_LIST_EMPTY



class ResourceApiController(Resource):

    def get(self, alias, variant, file_name):
        path='resources/public/clients/{client}/{variant}/{file_name}'.format(
            client=alias,
            variant=variant,
            file_name=file_name
        )
        return send_file(path)


