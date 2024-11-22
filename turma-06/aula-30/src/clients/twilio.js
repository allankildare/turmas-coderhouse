import twilio from 'twilio'
import { config } from 'dotenv'

config()

const client = twilio(process.env.TWILLIO_ACCOUNT_SID, TWILLIO_AUTH_TOKEN)

export default client