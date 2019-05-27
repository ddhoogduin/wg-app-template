from flask_restful import Resource, reqparse
from models.UserModel import UserModel
from views.UserView import UserView

from constants.types.user import USER_LOGIN_NO_DETAILS,\
                                 USER_LOGIN_WRONG_CRED,\
                                 USER_LOGIN_SUCCESS


class UserLoginController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email')
        parser.add_argument('password')
        args = parser.parse_args()
        if not args['email'] and not args['password']:
            return UserView.login(USER_LOGIN_NO_DETAILS)
        userModel = UserModel()
        response = userModel.login(args['email'], args['password'])
        if response:
            return UserView.login(USER_LOGIN_SUCCESS, response)
        return UserView.login(USER_LOGIN_WRONG_CRED)
