class UserDTO {
  constructor(user) {
    this.first_name = user.firstName
    this.last_name = user.lastName
    this.birth_date = user.birthDate
    this.email = user.email
    this.password = user.password
    this.phone = user.phone
    this.bio = user.bio || ''
  }
}

export default UserDTO