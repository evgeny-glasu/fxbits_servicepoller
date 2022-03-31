# fxbits_servicepoller
A test code assignment on NodeJS and PostrgreSQL.

#Description:
A task to implement a simple service poller app, which wil keep remembered urls of services that we need to poll,
it will provide the status of every service added into database.
It sends GET request to every host and by response provides you the status of service.

#Requirements:
NodeJS & PostgreSQL installed.

#Configuration:
Most important settings are stored in .env file. The rest of functionality is realised in the .js files.

#Dependencies:
  - express
  - axios
  - dotenv
  - pg

#Start scripts:
    "npm start" - starts the app.
    "npm run dev" - starts in dev mode.

#Endpoints:
Create : send a JSON  like {"url" : "example.com"}, using a POST request, on host:PORT/create, it will add the url to DB, if is not already in.
Read : send a GET request on host:PORT/read, it will sho you all stored urls from DB with their unique ID.
Update: send a JSON  like {"url" : "example.com", "newUrl" : "another-url.com"}, using a PUT request, on host:PORT/update, it will add the url to a new one.
Delete: send a JSON  like {"url" : "example.com"}, using a POST request, on host:PORT/delete, it will remove the requested url from DB.


#Other info:
App doesn't have any frontend components, you can use POSTMAN app to work with the requests.