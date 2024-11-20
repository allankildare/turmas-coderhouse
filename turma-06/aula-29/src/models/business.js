import mongoose, { Schema } from 'mongoose'
import { BUSINESS_COLLECTION } from './../constants/mongodb.js'

const businessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  products: [],
})

const businessModel = mongoose.model(BUSINESS_COLLECTION, businessSchema)
export default businessModel
