import mongoose, { Schema } from 'mongoose'
import { USERS_COLLECTION, ORDERS_COLLECTION } from './../constants/mongodb.js'

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  orders: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: ORDERS_COLLECTION,
    },
  ],
})

const userModel = mongoose.model(USERS_COLLECTION, userSchema)
export default userModel
