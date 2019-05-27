from static.helpers.DataformatHelper import DataformatHelper


class View():

    __abstract__ = True

    attrList = []
    attrSingle = []

    def get_list(self, success, type, payload=None):
        if not success:
            return {'success': False, 'error': type}
        else:
            return {
                'success': True,
                'message': type,
                'items':
                    DataformatHelper.transform_objectList_to_dictList(payload, self.attrList, 'id')
            }

    def get_one(self, success, type, payload=None):
        if not success:
            return {'success': success, 'error': type}
        else:
            return {
                'success': success,
                'message': type,
                'item':
                    DataformatHelper.transform_object_to_dict(payload, self.attrSingle)
            }

    def action_complete(self, success, type):
        if not success:
            return {'success': success, 'message': type}
        else:
            return {'success': success, 'error': type}