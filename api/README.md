## API

---

This is a Node.js web-API built using express, mongodb and typescript. It has 3 major endpoints

1. "/ping" - returns a simple "pong" message to test that the api is up and running

```json
{
  "message": "pong"
}
```

2. "/users/signup" - This creates a new user - It takes 4 arguments in the body: firstName, lastName, email, password

```json
{
  "firstName": "Daenarys",
  "lastName": "Targaryen",
  "email": "daenarystargaryen@gmail.com",
  "password": "daenarysisgreat"
}
```

Then it returns the created user

3. "/users/login" - This logs in the user - takes 2 arguments in the body: email, password

```json
{
  "email": "daenarystargaryen@gmail.com",
  "password": "daenarysisgreat"
}
```

It returns whether or not user was logged in successfully

---

To run the Node (express) web server, follow the following steps

```shell
cd api
```

Then run to install all dependencies using either npm, yarn or pnpm

```shell
npm install
#or
yarn install
#or
pnpm install
```

To start the application, you can run

```shell
nodemon
```

Alternatively you can start a production build by running

```shell
pnpm build

pnpm start
```

Specify the mongodb username and password in the .env file (rename .env.example to .env) as well as connection port
The port will default to 8000 if not specified, the mongodb username and password must be specified

The server should start up, you can test by going to 'http://localhost/port/ping'
You should get a "pong" message response
