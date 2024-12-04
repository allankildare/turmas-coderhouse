import EErrors from '../../services/errors/enums.js'

// const errorMiddleware = (error, req, res, next) => {
//   if (error?.cause) {
//     console.log(error.cause)
//   }

//   switch (error.code) {
//     case EErrors.INVALID_TYPES_ERROR:
//       res.send({ status: 'error', message: error.name })
//       break
//     default:
//       res.send({ status: 'error', message: 'Erro interno' })
//   }
// }

// export default errorMiddleware

export default (error, req, res, next) => {
  if (error.cause) {
    console.log(error.cause)
  }

  switch (error.code) {
    case EErrors.INVALID_TYPES_ERROR:
      res.send({ status: 'error', message: error.name })
      break
    default:
      res.send({ status: 'error', message: 'Erro interno' })
  }
}