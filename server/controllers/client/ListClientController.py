from flask_restful import Resource, reqparse
from models.ClientModel import ClientModel
from views.ClientView import ClientView

from constants.types.client import CLIENT_GET_LIST_SUCCESS,\
                                 CLIENT_GET_LIST_EMPTY


class ListClientController(Resource):
    view = ClientView()
    model = ClientModel()

    def get(self):
        response = self.model.get_list()
        if response:
            return self.view.get_list(success=True, type=CLIENT_GET_LIST_SUCCESS, payload=response)
        return self.view.get_list(success=False, type=CLIENT_GET_LIST_EMPTY)


