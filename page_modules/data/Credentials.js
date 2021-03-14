const dataSet = require('../../credentials.json')

export const CREDENTIALS = {
  STANDAR_USER: {
    USERNAME: dataSet.standar_user,
    PASSWORD: dataSet.password
  }, INVALID_USER: {
    USERNAME: dataSet.standar_user,
    PASSWORD: dataSet.invalid_password
  }

}
