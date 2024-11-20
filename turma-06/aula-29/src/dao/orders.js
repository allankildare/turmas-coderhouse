import ordersModel from '../models/orders.js'

class Order {
  async getOrders() {
    try {
      const orders = ordersModel.find()
      return orders
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async getOrderById(orderId) {
    try {
      const order = ordersModel.findOne({ _id: orderId })
      return order
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async postOrder(orderData) {
    try {
      const result = ordersModel.create(orderData)
      return result
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async resolveOrder(orderId, orderData) {
    try {
      const result = ordersModel.updateOne({ _id: orderId }, { $set: orderData })
      return result
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default Order
