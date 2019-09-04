import sys
import getopt, sys
import json
from prettytable import PrettyTable
from getpass import getpass
from sqlalchemy import create_engine
import re
import os

class AppConfig:

    def __init__(self, argv):
        self.db_connection = False
        self.db_user = None
        self.db_password = None
        self.db_name = None
        self.pj_list = []
        self.pj_name = None
        self.pj_ref = None
        self.set_pj_list()

        self.tasks = ["list", "create", "delete", "templates", "help"]
        try:
            if argv[1] == self.tasks[0]:
                print(self.get_list())
            elif argv[1] == self.tasks[1]:
                self.create_new()
            elif argv[1] == self.tasks[2]:
                pass
            elif argv[1] == self.tasks[3]:
                pass
            else:
                self.raise_error("task: <{option_argv}> not found\n{help}".format(option_argv=argv[1],
                                                                                  help=self.get_help()))
        except Exception as error:
            print(str(error))
            sys.exit(2)
        except IndexError:
            self.raise_error("No task specified\n{help}".format(help=self.get_help()))

    def set_pj_list(self):
        with open('projects.json') as f:
            self.pj_list = json.load(f)

    def get_list(self):
        x = PrettyTable()
        x.field_names = ["#", "Reference", "Name", "Path"]
        for i in range(len(self.pj_list)):
            item = self.pj_list[i]
            x.add_row([i+1, item['ref'], item['name'], item['path']])
        return x

    def test_db_connection(self, user, password):
        engine = create_engine('{dialect}+{driver}://{user}:{password}@{host}'.format(
            dialect='mysql',
            driver='pymysql',
            user=user,
            password=password,
            host='localhost'
        ))
        try:
            connection = engine.connect()
            self.db_connection = connection
            return True
        except Exception as error:
            print("\nDatabase connection failed\nTry again...\n")
            return False

    def test_db_name_unique(self, name):
        existing_databases = self.db_connection.execute("SHOW DATABASES;")
        return True if name in [d[0] for d in existing_databases] else False

    def q_database(self):
        db_name_exist = True
        name_convention = False
        while True:
            user = input("Enter database user:")
            password = getpass("Enter database password:")
            if self.test_db_connection(user, password):
                self.db_user = user
                self.db_password = password
                break
        while db_name_exist and not name_convention:
            name = input("Enter a unique, not existing database name (auto corrected):")
            name = re.sub('[\W_]+', '', name)
            correction = input("Do you accept the corrected name:{name} (y/n):".format(name=name))
            if correction == 'y':
                name_convention=True
                db_name_exist = self.test_db_name_unique(name)
                self.db_name = name
            else:
                name_convention=False
        return True

    def check_unique_from_dict(self, key, value):
        for pj in self.pj_list:
            if pj[key] == value:
                return False
        return True

    def q_project(self):
        while True:
            name = input("Enter a project name:")
            if self.check_unique_from_dict('name', name):
                self.pj_name = name
                self.pj_ref = self.db_name.lower()
                break
            print('Not unique, try again...')
            continue
        return True

    def insert_new(self):
        self.db_connection.execute('CREATE DATABASE {name}'.format(name=self.db_name))
        os.system("php ../bin/directus install:config"
                  " -h localhost"
                  " -n {db_name}"
                  " -u {db_user}"
                  " -p {db_password}"
                  " -N {pj_name}".format(
                    db_name=self.db_name,
                    db_user=self.db_user,
                    db_password=self.db_password,
                    pj_name=self.pj_ref))

        os.system("php ../bin/directus install:database -N {pj_name}".format(
                    pj_name=self.pj_ref))

        os.system("php ../bin/directus install:install"
                  " -e {name}@example.com "
                  " -p password"
                  " -N {name}".format(
                    name=self.db_name.lower()))
        self.pj_list.append({"ref": self.db_name.lower(),
                             "name":self.pj_name,
                             "path": "../{}".format(self.pj_ref)})

    def create_new(self):
        if self.q_database() and self.q_project():
            self.insert_new()
            with open('projects.json', 'w') as fp:
                json.dump(self.pj_list, fp)
            pj_data = {}
            for project in self.pj_list:
                pj_data[project['path']] = project['name']
            with open('pj_data.json', 'w') as fp:
                json.dump(pj_data, fp)

    def get_help(self):
        return "\nselect one of the following:\n\n" \
               "- list \n" \
               "- create \n" \
               "- delete \n" \
               "- templates \n"


    def raise_error(self, content):
        raise Exception("\n\n-- Error --\n{content}\n".format(content=content))



if __name__ == '__main__':
     AppConfig(sys.argv)
