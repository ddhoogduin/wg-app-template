from flask_restful import Resource, reqparse
from models.ClientModel import ClientModel
from views.ClientView import ClientView

from constants.types.client import CLIENT_GET_SUCCESS,\
                                   CLIENT_GET_EMPTY


class ClientController(Resource):
    view = ClientView()
    model = ClientModel()

    def get(self, alias):

        response = self.model.get_one(ClientModel.alias, alias)
        if response:
            return self.view.get_one(success=True, type=CLIENT_GET_SUCCESS, payload=response)
        return self.view.get_one(success=False, type=CLIENT_GET_EMPTY)
