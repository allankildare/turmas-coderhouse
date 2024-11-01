import passport from 'passport'
import passportJWT from 'passport-jwt'

const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt

// Authorization: 'Bearer jhasdhkjabkbvjhbajhbjhabvjhabjhvbfjhabias'

const cookieExtractor = (request) => {
  let token = null
  if (request && request.cookies) {
    token = request.cookies['userToken']
  }

  return token
}

const jwtOptions = {
  // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // forma mais usual
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: process.env.JWT_SECRET,
}

const initializePassport = () => {
  passport.use(
    new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
      try {
        return done(null, jwt_payload)
      } catch (error) {
        done(error)
      }
    })
  )
}

export default initializePassport
