import express, { Express, Request, Response } from 'express'
import http from 'http'
import mongoose from 'mongoose'

import { config } from './config/config'
import Logging from './library/Logging'
import userRoutes from './routes/user'

const router = express()

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
  .then(() => {
    Logging.info('Connected to mongoDB')
    StartServer()
  })
  .catch((error) => {
    Logging.error(`Unable to connect: `)
    Logging.error(`${error}`)
  })

const StartServer = () => {
  router.use((req, res, next) => {
    Logging.info(
      `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    )
    res.on('finish', () => {
      Logging.info(
        `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
      )
    })
    next()
  })

  router.use(
    express.urlencoded({
      extended: true,
    })
  )
  router.use(express.json())

  router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Origin',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )

    if (req.method == 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, PATCH, DELETE, GET'
      )
      return res.status(200).json({})
    }

    next()
  })

  router.get('/', (req, res, next) => res.status(200).json({ message: 'pong' }))

  router.get('/ping', (req, res, next) =>
    res.status(200).json({ message: 'pong' })
  )

  router.use('/users', userRoutes)

  router.use((req, res, next) => {
    const error = new Error('not found')
    Logging.error(error)

    return res.status(404).json({ message: error.message })
  })

  http
    .createServer(router)
    .listen(config.server.port, () =>
      Logging.info(`Server is running on port ${config.server.port}`)
    )
}
