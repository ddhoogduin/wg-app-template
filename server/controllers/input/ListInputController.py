from flask_restful import Resource, reqparse
from models.InputModel import InputModel
from views.InputView import InputView

from constants.types.input import INPUT_GET_LIST_SUCCESS,\
                                 INPUT_GET_LIST_EMPTY


class ListInputController(Resource):
    view = InputView()
    model = InputModel()

    def get(self, alias, form_id):
        response = self.model.get_list_by(InputModel.form_id, form_id)
        if response:
            return self.view.get_list(success=True, type=INPUT_GET_LIST_SUCCESS, payload=response)
        return self.view.get_list(success=False, type=INPUT_GET_LIST_EMPTY)


