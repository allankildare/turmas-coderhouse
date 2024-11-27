import faker from './../config/faker.js'
import { generateProducts } from './generateProducts.js'

export const generateUser = () => {
  // quantidade de produtos irá variar entre 1 e 10 produtos
  const qtdProdutos = faker.number.int({ min: 1, max: 10 })

  const userObj = {
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    sex: faker.person.sex(),
    birthDate: faker.date.birthdate(),
    phone: faker.phone.number(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
    image: faker.image.avatar(),
    products: Array.from({ length: qtdProdutos }, generateProducts),
  }
  return userObj
}
