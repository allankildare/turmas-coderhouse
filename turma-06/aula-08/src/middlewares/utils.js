export function validateEmail(req, res, next) {
    const email = req.body.email

    if (email.includes('@')) {
        next()
    } else {
        res.status(400).send('E-mail inválido')
    }
}