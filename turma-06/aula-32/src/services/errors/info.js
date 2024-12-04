export const generateUserErrorInfo = (user) => {
  return `
    Uma ou mais propriedades não foram enviadas corretamente.\n
    Lista das propriedades obrigatórias:\n
    * first_name: Precisa ser String, mas recebeu ${user.first_name}\n
    * last_name: Precisa ser String, mas recebeu ${user.last_name}\n
    * email: Precisa ser String, mas recebeu ${user.email}
  `
}
