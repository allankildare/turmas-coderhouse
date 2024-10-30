import passport from 'passport'
import jwt, { ExtractJwt } from 'passport-jwt'

const JWTStrategy = jwt.Strategy

const cookieExtractor = (request) => {
  let token = null
  if (request && request.cookies) {
    token = request.cookies['coderCookieToken']
  }
  return token
}

const initializePassport = () => {
  passport.use(
    'jwt',
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: 'coderSecret123',
      },
      async (payload, done) => {
        try {
          console.log('PAYLOAD É\n', payload)
          return done(null, payload)
        } catch (error) {
          return done(error)
        }
      }
    )
  )
}

export const passportCall = (strategy) => {
  return async (request, response, next) => {
    passport.authenticate(strategy, (error, user, info) => {
      if (error) return next(error)
      if (!user) {
        return response
          .status(401)
          .send({ error: info.messages ? info.messages : info.toString() })
      }

      request.user = user
      next()
    })(request, response, next)
  }
}

export default initializePassport
