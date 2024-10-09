import mongoose, { Schema } from 'mongoose'
import { ORDERS_COLLECTION, } from './../constants/mongodb.js'

const orderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'large'],
        default: 'medium'
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const orderModel = mongoose.model(ORDERS_COLLECTION, orderSchema)

export default orderModel