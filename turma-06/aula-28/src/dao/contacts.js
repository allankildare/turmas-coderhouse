import { contactsModel } from './../models/contacts.js'

class Contacts {
  constructor() {}

  async getAll() {
    try {
      const contacts = await contactsModel.find()
      return contacts
    } catch (error) {
      throw new Error(error)
    }
  }
}

const contactsDAO = new Contacts()

export default Contacts
