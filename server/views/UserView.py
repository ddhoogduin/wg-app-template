from constants.types.user import *


class UserView():

    @staticmethod
    def login(type, payload=None):
        if type == USER_LOGIN_NO_DETAILS:
            return {'success': False, 'error': USER_LOGIN_NO_DETAILS}
        elif type == USER_LOGIN_WRONG_CRED:
            return {'success': False, 'error': USER_LOGIN_WRONG_CRED}
        elif type == USER_LOGIN_SUCCESS:
            return {
                'success': True,
                'id': payload.id,
                'email': payload.email,
                'firstname': payload.firstname,
                'lastname': payload.lastname
            }
        return {}

