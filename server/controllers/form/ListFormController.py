from flask_restful import Resource, reqparse
from models.ClientModel import ClientModel
from models.FormModel import FormModel

from views.FormView import FormView
from views.ClientView import ClientView

from constants.types.form import FORM_GET_LIST_SUCCESS, \
    FORM_GET_LIST_EMPTY, \
    FORM_SET_LIST_SUCCESS

from constants.types.client import CLIENT_GET_EMPTY
import json
from datetime import datetime


class ListFormController(Resource):
    view = FormView()
    model = FormModel()

    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        super(ListFormController, self).__init__()

    def get(self, alias):
        client = ClientModel().get_one(ClientModel.alias, alias)
        if client:
            response = self.model.get_list_by(FormModel.client_id, int(client.id))
            if response:
                return self.view.get_list(success=True, type=FORM_GET_LIST_SUCCESS, payload=response)
        return ClientView().get_one(success=False, type=CLIENT_GET_EMPTY)

    def put(self, alias):
        client = ClientModel().get_one(ClientModel.alias, alias)
        if client:
            self.reqparse.add_argument('data', action='append')
            args = self.reqparse.parse_args()
            for item in args['data']:
                item = json.loads(item.replace("\'", "\""))
                form = self.model.get_one(FormModel.id, item['id'])
                for key, value in item.items():
                    setattr(form, key, value)
                form.modified_at = datetime.now().strftime("%Y-%m-%d")
                self.model.commit()
            response = self.model.get_list_by(FormModel.client_id, int(client.id))
            return self.view.get_list(success=True, type=FORM_SET_LIST_SUCCESS, payload=response)
        return ClientView().get_one(success=False, type=CLIENT_GET_EMPTY)

    def delete(self, alias):

        client = ClientModel().get_one(ClientModel.alias, alias)
        if client:
            self.reqparse.add_argument('data', action='append')
            args = self.reqparse.parse_args()
            for item in args['data']:
                item = json.loads(item.replace("\'", "\""))
                self.model.delete_by(FormModel.id, item['id'])
                self.model.commit()
            response = self.model.get_list_by(FormModel.client_id, int(client.id))
            return self.view.get_list(success=True, type=FORM_SET_LIST_SUCCESS, payload=response)
        return ClientView().get_one(success=False, type=CLIENT_GET_EMPTY)