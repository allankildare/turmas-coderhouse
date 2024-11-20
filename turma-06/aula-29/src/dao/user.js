import userModel from './../models/user.js'

class User {
  async getUsers() {
    try {
      const users = await userModel.find()
      return users
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async getUserById(userId) {
    try {
      const user = await userModel.findOne({ _id: userId })
      return user
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async postUser(userData) {
    try {
      const result = await userModel.create(userData)
      return result
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async updateUser(userId, userData) {
    try {
      const result = userModel.updateOne({ _id: userId }, { $set: userData })
      return result
    } catch (error) {
      console.error(error)
      return null
    }
  }
}
export default User
