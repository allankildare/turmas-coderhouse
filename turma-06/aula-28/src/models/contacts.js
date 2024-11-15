import mongoose, { Schema } from 'mongoose'
import { CONTACTS_COLLECTION } from './../constants/collections.js'

const contactSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
})

export const contactsModel = mongoose.model(CONTACTS_COLLECTION, contactSchema)
