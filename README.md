# Hello World API
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript hello-world repository.

Autheniticated using JWT.

Packaged into a docker image.

## Deploying the Docker Image
Make sure you have docker installed on your device.

In your terminal pull the image [roisindowling/hello-world](https://hub.docker.com/r/roisindowling/hello-world)
```bash
# Docker pull command
$ docker pull roisindowling/hello-world
```
To run the image inside of a container on port 8080 use the following command:
```bash
# Docker run command
$ docker run -p 8080:3000 -d roisindowling/hello-world
```

Image should now be successfully running.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Authentication

To sign into the api submit a POST request [auth/local/signin](http://localhost:8080/auth/local/signin)

Request should have username and password in the body of type x-wwww-form-urlencoded

username: user1

password: 123

Copy the bearer token generated and use this to authorize the GET request.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).


## License

Nest is [MIT licensed](LICENSE).
