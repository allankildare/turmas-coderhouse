import faker from './../config/faker.js'

export const generateProducts = () => {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    image: faker.image.url(),
    stock: faker.number.int({ min: 1, max: 350 }),
  }
}
