import sys

from flask import request
from flask_restful import Resource, reqparse
from models.ClientModel import ClientModel
from models.FormModel import FormModel
from models.InputModel import InputModel

from views.FormView import FormView
from views.ClientView import ClientView

from constants.types.form import \
    FORM_GET_SUCCESS, \
    FORM_GET_EMPTY, \
    FORM_SET_SUCCESS, \
    FORM_SET_FAILED

from constants.types.client import CLIENT_GET_EMPTY

import json
from datetime import datetime


class FormController(Resource):
    view = FormView()
    model = FormModel()

    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        super(FormController, self).__init__()

    def get(self, alias, formId):
        response = ClientModel().get_one(ClientModel.alias, alias)
        if response:
            response = self.model.get_one(FormModel.id, int(formId))
            if response:
                return self.view.get_one(success=True, type=FORM_GET_SUCCESS, payload=response)
        return ClientView().get_one(success=False, type=CLIENT_GET_EMPTY)

    def put(self, alias, formId):
        client = ClientModel().get_one(ClientModel.alias, alias)
        self.reqparse.add_argument('formData')
        self.reqparse.add_argument('inputData', action='append')
        args = self.reqparse.parse_args()
        formDict = json.loads(args['formData'].replace("\'", "\""))
        inputList = json.loads(args['inputData'][0].replace("\'", "\""))
        self.updateFormInputs(formId, inputList)
        self.updateForm(formDict, formId, client.id)
        return self.view.action_complete(success=True, type=FORM_SET_SUCCESS)

    def updateForm(self, formDict, formId, clientId):

        form = self.model.get_one(FormModel.id, formId)
        form.id = formId
        form.client_id = clientId
        form.API_id = 1
        form.name = formDict['name']
        form.tool_name = formDict['tool_name']
        form.job_description = 'Running tool'
        form.modified_at = datetime.now().strftime("%Y-%m-%d")
        self.model.commit()
        return True

    def updateFormInputs(self, formId, inputList):
        InputModel().delete_by(InputModel.form_id, formId)
        if (not isinstance(inputList, dict)):
            return True
        for key, inputItem in inputList.items():
            inputObject = InputModel()
            inputObject.form_id = formId
            inputObject.name = inputItem['name']
            inputObject.type = inputItem['type']
            inputObject.parameter = inputItem['parameter']
            inputObject.label = inputItem['label']
            try:
                inputObject.options = inputItem['options']
            except:
                pass
            inputObject.add()
            inputObject.commit()
        return True
