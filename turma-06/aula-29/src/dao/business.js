import businessModel from './../models/business.js'

class Business {
  async getBusiness() {
    try {
      const business = businessModel.find()
      return business
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async getBusinessById(businessId) {
    try {
      const business = businessModel.findOne({ _id: businessId })
      return business
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async postBusiness(businessData) {
    try {
      const result = businessModel.create(businessData)
      return result
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async updateBusiness(businessId, businessData) {
    try {
      const result = businessModel.updateOne({ _id: businessId }, { $set: businessData })
      return result
    } catch (error) {
      console.error(error)
      return null
    }
  }

  // TODO: pendente
  async postProduct(product) {
    try {
      const result = businessModel.create(product)
      return result
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default Business
