require('dotenv').config({path: '.env.credentials'})

export const CREDENTIALS = {
  STANDAR_USER: {
    USERNAME: process.env.STANDAR_USER,
    PASSWORD: process.env.PASSWORD
  }, INVALID_USER: {
    USERNAME: process.env.STANDAR_USER,
    PASSWORD: process.env.INPASSWORD
  }

}
