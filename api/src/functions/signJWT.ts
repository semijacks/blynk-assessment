import jwt from 'jsonwebtoken'
import { config } from '../config/config'
import Logging from '../library/Logging'
import { IUser } from '../interfaces/user'

const NAMESPACE = 'Auth'

const signJWT = (
  user: IUser,
  callback: (error: Error | null, token: string | null) => void
): void => {
  let timeSinceEpoch = new Date().getTime()
  let expirationTime = timeSinceEpoch + Number(config.token.expireTime) * 100000
  let expirationTimeInSeconds = Math.floor(expirationTime / 1000)

  Logging.info(`${NAMESPACE} -> attempting to sign token for ${user.email}`)

  try {
    jwt.sign(
      {
        email: user.email,
      },
      config.token.secret,
      {
        issuer: config.token.issuer,
        algorithm: 'HS256',
        expiresIn: expirationTimeInSeconds,
      },
      (error, token) => {
        if (error) {
          callback(error, null)
        } else if (token) {
          callback(null, token)
        }
      }
    )
  } catch (error: any) {
    Logging.error(`${NAMESPACE} -> ${error.message} -> ${error}`)
    callback(error, null)
  }
}

export default signJWT
