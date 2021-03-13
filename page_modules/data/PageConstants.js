require('dotenv').config()

export const PAGE = {
  URL: process.env.PAGE_URL,
  PAGE_TITLES: {
    PRODUCT: process.env.PAGE_TITLE_PRODUCT,
    YOUR_CART: process.env.PAGE_TITLE_YOURCART,
    OVERVIEW: process.env.PAGE_TITLE_OVERVIEW
  },
  ERROR_MESSAGE: {
    LOGIN: {
      MISSING_USER: process.env.LOGIN_ERROR_USER,
      MISSING_PWS: process.env.LOGIN_ERROR_PWS,
      INVALID_USER_PWS: process.env.LOGIN_ERROR_INVALID_USER_PWS
    },
    CHECKOUT: {
      FIRST_NAME: process.env.CHECKOUT_ERROR_FIRSTNAME,
      LAST_NAME: process.env.CHECKOUT_ERROR_LASTNAME,
      ZIP_CODE: process.env.CHECKOUT_ERROR_ZIPCODE
    }
  },
  PRODUCT_LIST: {
    BACKPACK: process.env.PRODUCT_BACKPACK,
    BIKE_LIGHT: process.env.PRODUCT_BIKE_LIGHT,
    T_SHIRT: process.env.PRODUCT_T_SHIRT,
    SAUCE_LABS_ONESIE: process.env.PRODUCT_SAUCE_LABS_ONESIE
  },
  MESSAGES: {
    THANK_YOU: process.env.FINISH_THANK_YOU
  }

}


