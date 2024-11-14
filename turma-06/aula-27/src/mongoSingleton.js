import mongoose from 'mongoose'
import { config } from 'dotenv'

config()

class MongoSingleton {
    static #instance

    constructor() {
        mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    }

    static getInstance() {
        if (this.#instance) {
            console.log('Instância já existe')
            return this.#instance
        }

        this.#instance = new MongoSingleton();
        console.log('Conectando ao banco de dados')
        this.#instance
    }
}

export default MongoSingleton
