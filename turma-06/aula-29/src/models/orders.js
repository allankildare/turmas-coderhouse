import mongoose, { Schema } from 'mongoose'
import { BUSINESS_COLLECTION, USERS_COLLECTION, ORDERS_COLLECTION } from './../constants/mongodb.js'

const ordersSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  business: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: BUSINESS_COLLECTION,
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: USERS_COLLECTION,
  },
  products: [],
  totalPrice: Number,
})

const ordersModel = mongoose.model(ORDERS_COLLECTION, ordersSchema)
export default ordersModel
