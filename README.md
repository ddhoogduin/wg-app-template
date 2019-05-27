# webapp-gen-system - prototype 0.2

Web-application generator system; system for rapidly creating web-based applications in a semi-automatic matter through the generic system outlay. This system is, at first, only intended for the development of bio-informatics related applications. A computation or algorithm can be integrated in the application by 'linking' the web-application with a external API. 

## Version

Currently, we are still developing the prototype (V-0.2) which is a very minimal representation of the final system. This version contains a lot of unfinished work and functionalities but gives a preview of the aim of this project. Straight forward, the prototype only contains the following main functionalities/views:

Back-end system
- Login page (Loggin in to the backend)
- Client page (Viewing clients, select a client)
- Dashboard page ()
- Form page (List forms for each client, edit form, edit form-inputs) 

Testcase:keygenes
- Form page (load form configuration, redirect to API, load form inputs config)
- Other pages ()


## Description 

The prototype is composed by using multiple individual applications. The client and test cases are developed by the use of ReactJS and the server application (API) is mostly Flask-RESTful and some additional python libraries. This API interacts with a postgres database. A copy of this database (db-copy.psql) can be found in the 'server' folder.

## How to use

ReactJS application are installed (including dependencies) by executing the following command:

      npm install 

The API(server) requires dependencies which are listed in requirements.txt. Additionally a working postgres database is required, this can be directly added to your local postgres environment by implementing the database copy (db-copy.psql). Connection to the local database can be configured in the .env file. 



