import express from 'express'
import nodemailer from 'nodemailer'
import { config } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

config()

const PORT = process.env.PORT || 8080

const app = express()

const transport = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.PERSONAL_EMAIL,
    pass: process.env.CODER_APP_EMAIL_PASSWORD,
  },
})

app.get('/email', async (req, res) => {
  try {
    const result = await transport.sendMail({
      from: `Coder Tests <${process.env.PERSONAL_EMAIL}>`,
      to: 'allankildaredev+tests@gmail.com',
      subject: 'E-mail de teste',
      html: `
        <div>
          <h1>Olá Allan</h1>
          <p>Este é um e-mail de teste</p>
        </div>
      `,
      attachments: [{
        filename: 'allan.png',
        path: `${__dirname}/public/img/teste.PNG`,
        cid: 'Teste'
      }],
    })

    console.log(result)

    return res.send({
      status: 'success',
      message: 'E-mail enviado com sucesso',
    })
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .send({ status: 'error', message: 'Falha ao enviar e-mail' })
  }
})

app.listen(PORT, () => {
  console.log(
    `Servidor inicializado com sucesso!\nAcesse em http://localhost:${PORT}`
  )
})
