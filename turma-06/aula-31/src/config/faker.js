import { Faker, pt_BR } from '@faker-js/faker'

const customFaker = new Faker({
  locale: [pt_BR]
})

export default customFaker