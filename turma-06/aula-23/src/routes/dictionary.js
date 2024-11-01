import { Router as ExpressRouter } from 'express'

const router = ExpressRouter()

// Parametros
router.param('word', (req, res, next, word) => {
  console.log('Palavra recebida é ', word)
  if (word.includes('a')) next()
  else {
    res.send({
      status: 'error',
      message: 'Não foi possível reconhecer a palavra',
    })
  }
})

router.get('/:word([a-zA-Z]+)', (req, res) => {
  res.send('Olá turma!')
})

router.get('*', (req, res) => {
  res.status(404).send({
    status: 'error',
    message: 'Não foi possível reconhecer a palavra',
  })
})

export default router
