// import express from 'express'
// import './config/dotenv.js'

// const app = express()

// app.listen(8080, () => {
//   console.log('Servidor rodando...\nAcesse http://localhost:8080/')
//   console.log('Ambiente: ', process.env.NODE_ENV)
// })

import cluster from 'cluster'
import express from 'express'
import { cpus } from 'os'

const numeroNucleos = cpus().length

console.log('Global PID: ', process.pid)

if (cluster.isPrimary) {
  console.log('[Primário] Workers sendo criados...')
  
  for (let i = 1; i <= numeroNucleos; i++) {
    cluster.fork().on('disconnect', () => {
      console.log('DESCONECTADO - Worker');
      
      // cria um worker substituto
      cluster.fork()
    })
  }
} else {
  console.log('[Worker] Sou um processo worker com o ID: ', process.pid)

  const app = express()

  app.get('/operacao-simples', (req, res) => {
    let soma = 0
  
    for (let i = 0; i < 10000; i++) {
      soma += i
    }
  
    res.send({ soma })
  })
  
  app.get('/operacao-complexa', (req, res) => {
    let soma = 0
  
    for (let i = 0; i < 5e8; i++) {
      soma += i
    }
  
    res.send({ soma })
  })

  cluster.on('message', (worker) => {
    console.log(`Messagem recebida a partir do worker: ${worker.process.pid}`)
  })

  app.listen(8080, () => {
    console.log('Servidor rodando...\nAcesse http://localhost:8080/')
  })
}
