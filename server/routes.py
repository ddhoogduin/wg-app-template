from config import app
from flask_restful import Api

from controllers.user.LoginUserController import UserLoginController
from controllers.client.ListClientController import ListClientController
from controllers.ResourceController import ResourceApiController
from controllers.client.ClientController import ClientController
from controllers.form.ListFormController import ListFormController
from controllers.form.FormController import FormController
from controllers.input.ListInputController import ListInputController

api = Api(app)

api.add_resource(ResourceApiController, '/api/resource/<alias>/<variant>/<file_name>')

api.add_resource(UserLoginController, '/api/auth/login')

api.add_resource(ListClientController, '/api/client/list')
api.add_resource(ClientController, '/api/client/<alias>')

api.add_resource(ListFormController, '/api/form/<alias>/list')
api.add_resource(FormController, '/api/form/<alias>/<formId>')

api.add_resource(ListInputController, '/api/input/<alias>/<form_id>/list')
