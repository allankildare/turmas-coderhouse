import Business from './../dao/business'

const businessService = new Business()

export const getBusiness = async (req, res) => {
  const result = await businessService.getBusiness()

  if (!result)
    return res.status(500).send({ status: 'error', message: 'Erro interno' })

  res.send({ status: 'success', data: result })
}

export const getBusinessById = async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res
      .status(400)
      .send({ status: 'error', message: 'Erro: parâmetro ID é obrigatório' })
  }

  const result = await businessService.getBusinessById(id)

  if (!result)
    return res.status(500).send({ status: 'error', message: 'Erro interno' })

  res.send({ status: 'success', data: result })
}

export const postBusiness = async (req, res) => {
  const { name, products } = req.body

  const result = await businessService.postBusiness({ name, products })

  if (!result)
    return res.status(500).send({ status: 'error', message: 'Erro interno' })

  return res.send({ status: 'success', message: 'Empresa criado com sucesso' })
}

export const addProduct = async (req, res) => {
  const product = req.body
  const { id: businessId } = req.params

  // consultei o business
  const business = await businessService.getBusinessById(businessId)

  if (!business)
    return res
      .status(404)
      .send({ status: 'error', message: 'Empresa não encontrada' })

  // adição do produto via push
  business.products.push(product)

  // atualização do business
  const result = await businessService.updateBusiness(businessId, business)

  if (!result)
    return res.status(500).send({ status: 'error', message: 'Falha ao atualizar lista de produtos' })

  return res.send({ status: 'success', message: 'Produto adicionado com sucesso' })
}
