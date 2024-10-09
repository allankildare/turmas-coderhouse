import express from 'express'
import mongoose from 'mongoose'
import { config as dotenvConfig } from 'dotenv'
import orderModel from './models/Order.js'
import studentModel from './models/Student.model.js'

dotenvConfig()

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const environment = async () => {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    // await studentModel.insertMany([
    //     { first_name: 'Allan', last_name: 'Silva', gender: 'male',  grade: 9, group: '1B'},
    //     { first_name: 'Cássia', last_name: 'Silva', gender: 'female',  grade: 7, group: '1A'},
    //     { first_name: 'João', last_name: 'Silva', gender: 'male',  grade: 5, group: '1B'},
    //     { first_name: 'Cássia', last_name: 'Silva', gender: 'female',  grade: 4, group: '1A'},
    //     { first_name: 'Thiago', last_name: 'Silva', gender: 'male',  grade: 10, group: '1B'},
    //     { first_name: 'Cássia', last_name: 'Silva', gender: 'female',  grade: 7, group: '1B'},
    //     { first_name: 'Nathalia', last_name: 'Silva', gender: 'female',  grade: 3, group: '1A'},
    //     { first_name: 'Vítor', last_name: 'Silva', gender: 'male',  grade: 8, group: '1A'},
    // ])
    // await orderModel.insertMany([
    //     { name: 'Pepperoni', size: 'small', price: 15, quantity: 2, date: new Date().toISOString() },
    //     { name: 'Pepperoni', size: 'medium', price: 35, quantity: 16, date: new Date().toISOString() },
    //     { name: 'Pepperoni', size: 'large', price: 60, quantity: 9, date: new Date().toISOString() },
    //     { name: 'Vegan', size: 'small', price: 20, quantity: 21, date: new Date().toISOString() },
    //     { name: 'Vegan', size: 'medium', price: 35, quantity: 36, date: new Date().toISOString() },
    // ])
    // let orders = await orderModel.find({ $limit: 2 })

    let students = await studentModel.paginate({ gender: 'female' }, { limit: 2, page: 1 })
    console.log('Page 1\n', students.docs)

    if (students.hasNextPage) {
        const newPage = await studentModel.paginate({ gender: 'female' }, { limit: 2, page: students.nextPage })
        console.log('\nPage 2\n', newPage.docs)
    }

    // let test = await studentModel.aggregate([
    //     { $sort: { grade: -1 } },
    //     { $group: { _id: '$group', students: { $push: '$$ROOT' } } }
    // ])
    // console.log(test)

    // let aggregatedOrders = await orderModel.aggregate([
    //     { $match: { size: 'medium' } }, // stage 1
    //     { $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } } } // stage 2
    // ])

    // console.log('Pedidos agregados:\n', aggregatedOrders)
}

environment()

const httpServer = app.listen(PORT, () => {
    console.log(`Conectado em http://localhost:${PORT}`)
})