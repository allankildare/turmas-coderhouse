import { logger, prodLogger, devLogger } from './../utils/logger.js'

export const addLogger = (request, response, next) => {
  if (process.env.NODE_ENV === 'production') {
    request.logger = prodLogger
  } else request.logger = devLogger

  request.logger.http(`${request.method} na rota ${request.url} - ${new Date().toLocaleTimeString()}`)
  next()
}
