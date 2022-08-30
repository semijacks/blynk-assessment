import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'

import Logging from '../library/Logging'
import User from '../models/User'
import signJWT from '../functions/signJWT'

const NAMESPACE = 'Users'

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  Logging.info(`${NAMESPACE} -> token validated, user authorized`)

  res.status(200).json({
    message: 'Authorized',
  })
}

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, password } = req.body
  const salt = await bcryptjs.genSalt(10)

  await bcryptjs.hash(password, salt, (hashError, hash) => {
    if (hashError) {
      Logging.error(`${NAMESPACE} ->${hashError.message} -> ${hashError}`)
      return res.status(500).json({
        message: hashError.message,
        error: hashError,
      })
    }

    User.findOne({ email })
      .exec()
      .then((user) => {
        if (user) {
          Logging.error(`${NAMESPACE} -> Email already in use`)
          return res.status(409).json({
            message: 'Email already in use',
          })
        } else {
          const _user = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName,
            lastName,
            email,
            password: hash,
          })

          return _user
            .save()
            .then((user) => {
              return res.status(201).json({
                message: 'user created successfully',
                user,
              })
            })
            .catch((error) => {
              return res.status(500).json({
                message: error.message,
                error,
              })
            })
        }
      })
  })
}

const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body

  User.findOne({ email })
    .select('-password')
    .exec()
    .then((user) => {
      if (!user) {
        Logging.error(`${NAMESPACE} -> Invalid Login, check email or password`)
        return res.status(401).json({
          message: 'Invalid Login, check email or password',
        })
      }

      bcryptjs.compare(password, user.password, (error, result) => {
        if (error) {
          Logging.error(
            `${NAMESPACE} -> Invalid Login, check email or password`
          )
          return res.status(401).json({
            message: 'Invalid Login, check email or password',
          })
        } else if (result) {
          signJWT(user, (_error, token) => {
            if (_error) {
              Logging.error(`${NAMESPACE} ->${_error.message} ->${_error}`)
              return res.status(401).json({
                message: _error.message,
                error: _error,
              })
            } else if (token) {
              Logging.info(`${NAMESPACE} -> user logged in successfully`)
              return res.status(200).json({
                message: 'Auth successful',
                token,
                user: user,
              })
            }
          })
        } else {
          Logging.error(
            `${NAMESPACE} -> Invalid Login, check email or password`
          )
          return res.status(401).json({
            message: 'Invalid Login, check email or password',
          })
        }
      })
    })
    .catch((error) => {
      Logging.error(`${NAMESPACE} ->${error.message} ->${error}`)
      return res.status(500).json({
        message: error.message,
        error,
      })
    })
}

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  User.find()
    .select('-password')
    .exec()
    .then((users) => {
      Logging.info(`${NAMESPACE} -> users returned successfully`)
      return res.status(200).json({
        users,
        count: users.length,
      })
    })
    .catch((error) => {
      Logging.error(`${NAMESPACE} ->${error.message} ->${error}`)
      return res.status(500).json({
        message: error.message,
        error,
      })
    })
}

export default { validateToken, register, login, getAllUsers }
