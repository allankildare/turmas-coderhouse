import { Router } from 'express'
import { compressWithBrotli } from './../utils/compress.js'

const router = Router()

router.use(compressWithBrotli)

router.get('/grande', (req, res) => {
  let stringGrande = 'Olá Coders, sou uma string grande'

  for (let i = 1; i < 100000; i++) {
    stringGrande += '\nOlá Coders, sou uma string grande'
  }

  res.send(stringGrande)
})

export default router