import mongoose from 'mongoose'
import { USERS_COLLECTION } from './../constants/mongodb.js'

const { Schema } = mongoose

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
    }
})

export const userModel = mongoose.model(USERS_COLLECTION, userSchema)