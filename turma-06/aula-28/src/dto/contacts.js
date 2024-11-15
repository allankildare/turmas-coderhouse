class ContactsDTO {
    constructor(contact) {
        this.first_name = contact.name
        this.last_name = contact.lastName
        this.full_name = `${contact.name} ${contact.lastName}`
        this.email = contact.email
        this.phone = contact.phone
    }
}

export default ContactsDTO