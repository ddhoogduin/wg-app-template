from flask_restful import Resource, reqparse
from models.ClientModel import ClientModel
from models.FormModel import FormModel

from views.FormView import FormView
from views.ClientView import ClientView

from constants.types.form import FORM_GET_LIST_SUCCESS,\
                                 FORM_GET_LIST_EMPTY

from constants.types.client import CLIENT_GET_EMPTY


class ListFormController(Resource):
    view = FormView()
    model = FormModel()

    def get(self, alias):
        response = ClientModel().get_one(ClientModel.alias, alias)
        if response:
            response = self.model.get_list_by(FormModel.client_id, int(response.id))
            if response:
                print(response)
                return self.view.get_list(success=True, type=FORM_GET_LIST_SUCCESS, payload=response)
        return ClientView().get_one(success=False, type=CLIENT_GET_EMPTY)
