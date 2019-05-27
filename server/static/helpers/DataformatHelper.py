from datetime import datetime
import json

class DateTimeEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime):
            return o.isoformat()

        return json.JSONEncoder.default(self, o)


class DataformatHelper:

    @staticmethod
    def transform_objectList_to_dictList(objectList, attrs, attrId):
        dictList = {}
        for objectItem in objectList:
            dictItem={}
            for attr in attrs:
                try:
                    dictItem[attr] = json.loads(str(getattr(objectItem, attr)).replace('\'', '"'))
                except:
                    dictItem[attr] = str(getattr(objectItem, attr))
            dictList[getattr(objectItem, attrId)] = dictItem
        return dictList

    @staticmethod
    def transform_object_to_dict(objectItem, attrs):
        dictItem={}
        for attr in attrs:
            dictItem[attr] = str(getattr(objectItem, attr))
        return dictItem