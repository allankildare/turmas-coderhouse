import Business from './../dao/business.js'
import Orders from './../dao/orders.js'
import User from './../dao/user.js'

const ordersService = new Orders()
const usersService = new User()
const businessService = new Business()

export const getOrders = async (req, res) => {
  const result = await ordersService.getOrders()

  if (!result)
    return res.status(500).send({ status: 'error', message: 'Erro interno' })

  return res.send({ status: 'success', data: result })
}

export const getOrderById = async (req, res) => {
  const { id: orderId } = req.params

  const order = await ordersService.getOrderById(orderId)

  if (!result)
    return res
      .status(404)
      .send({ status: 'error', message: 'Pedido não encontrado' })

  res.send({ status: 'success', data: order })
}

export const postOrder = async (req, res) => {
  const { user, business, products } = req.body

  const resultUser = await usersService.getUserById(user.id)
  const resultBusiness = await businessService.getBusinessById(business.id)

  const actualOrders = resultBusiness.products.filter((product) =>
    products.includes(product.id)
  )

  const totalSum = actualOrders.reduce((accumulator, previousValue) => {
    accumulator += previousValue.price
    return accumulator
  })

  const orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1)

  const order = {
    number: orderNumber,
    business,
    user,
    products: actualOrders.map((product) => product.id),
    totalPrice: totalSum,
  }

  const resultOrder = await ordersService.postOrder(order)

  resultUser.orders.push(resultOrder._id)

  await usersService.updateUser(user._id, resultOrder)

  res.send({ status: 'success', message: 'Pedido criado com sucesso' })
}

export const resolveOrder = async (req, res) => {
  res.send({ status: 'success', message: 'resolveOrder' })
}
