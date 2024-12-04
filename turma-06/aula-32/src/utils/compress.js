import compression from 'express-compression'

export const compressWithGzip = () => {
  compression()
}

export const compressWithBrotli = () => {
  return compression({
    brotli: {
      enabled: true,
      zlib: {
        memLevel: 3,
      }
    }
  })
}