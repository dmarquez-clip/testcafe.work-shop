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
  },
  PRODUCT_LIST: {
    BACKPACK: process.env.PRODUCT_BACKPACK,
    BIKE_LIGHT: process.env.PRODUCT_BIKE_LIGHT,
    T_SHIRT: process.env.PRODUCT_T_SHIRT,
    SAUCE_LABS_ONESIE: process.env.PRODUCT_SAUCE_LABS_ONESIE
  }

}


