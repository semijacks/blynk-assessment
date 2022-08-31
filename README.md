## Blynk-Assessment

To get started with this project, first clone this repo by copying the page url, then run

```shell
git clone [url]
```

Then switch to the dev branch by running

```shell
git checkout dev
```

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

## WEB

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

To run the web application, cd into the web folder

```shell
cd web
```

Then install the dependencies using npm, yarn or pnpm

```shell
npm install
#or
yarn install
#or
pnpm install
```

To run the app, start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment on vercel

The deployed version of this app can be found [here](https://blynk-assessment-6mq3xnk0b-semijacks.vercel.app/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
