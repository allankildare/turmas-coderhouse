import mongoose, { Schema } from 'mongoose'
import { USERS_COLLECTION } from './../constants/mongodb.js'

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
    unique: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: 'Olá, estou usando a plataforma Coderhouse'
  }
})

export const usersModel = mongoose.model(USERS_COLLECTION, userSchema)