import { error } from 'console'
import { usersModel } from './../models/user.js'

class Users {
  constructor() {}

  async getAll() {
    try {
      const users = await usersModel.find()
      return users
    } catch {
      throw new Error(error)
    }
  }

  async getUserById(id) {
    try {
      const user = await usersModel.find({ _id: id })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await usersModel.find({ email })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  async postUser(userData) {
    try {
      const newUser = await usersModel(userData)
      await newUser.save()
      return newUser
    } catch (error) {
      throw new Error(error)
    }
  }
} 

export default Users