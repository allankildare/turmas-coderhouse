import { userModel } from '../models/UserModel.js'

export async function getUserByEmail(userEmail) {
  try {
    const user = await userModel.findOne({ email: userEmail })

    console.log('user: ', user)

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    return user
  } catch (error) {
    throw new Error('Erro ao buscar usuário')
  }
}
