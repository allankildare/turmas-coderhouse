import express from 'express'

const router = express.Router()

router.get('/', (request, response) => {
    console.log('Template Handlebar carregado')

    const food = [
        { name: 'Hambúrguer', price: 23 },
        { name: 'Batata', price: 10 }
    ]

    let user = {
        name: 'Maria',
        lastName: 'Silva',
        role: 'admin',
    }

    response.render('index', {
        title: 'Coderhouse',
        user,
        isAdmin: user.role === 'admin', // true ou false
        food,
        style: 'main.css'
    })
})

router.get('/novo-usuario', (request, response) => {
    response.render('register', {
        title: 'Coderhouse - Novo usuário',
        style: 'main.css',
        script: 'registerUser.js'
    })
})

export default router