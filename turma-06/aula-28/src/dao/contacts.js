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

  async postContact(contactData) {
    try {
      const newContact = new contactsModel(contactData)
      await newContact.save()
      return newContact
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default Contacts
