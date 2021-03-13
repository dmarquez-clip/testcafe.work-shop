require('dotenv').config()

export const PAGE = {
  URL: process.env.PAGE_URL,
  PAGE_TITLES: {
    PRODUCT: process.env.PRODUCTPAGE,
    YOUR_CAR: process.env.YOURCARPAGE
  },
  ERROR_MESSAGE: {
    MISSING_USER: process.env.LOGIN_ERROR_USER,
    MISSING_PWS: process.env.LOGIN_ERROR_PWS,
    INVALID_USER_PWS: process.env.LOGIN_ERROR_INVALID_USER_PWS
  }

}


