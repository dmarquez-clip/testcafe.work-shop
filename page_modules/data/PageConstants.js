require('dotenv').config()
const dataSet = require('../../test_data/pageData.json')

export const PAGE = {
  URL: process.env.PAGE_URL,
  PAGE_TITLES: {
    PRODUCT: dataSet.Page_Title.PAGE_TITLE_PRODUCT,
    YOUR_CART: dataSet.Page_Title.PAGE_TITLE_YOURCART,
    OVERVIEW: dataSet.Page_Title.PAGE_TITLE_OVERVIEW
  },
  ERROR_MESSAGE: {
    LOGIN: {
      MISSING_USER: dataSet.Error_Messages.LOGIN_ERROR_USER,
      MISSING_PWS: dataSet.Error_Messages.LOGIN_ERROR_PWS,
      INVALID_USER_PWS: dataSet.Error_Messages.LOGIN_ERROR_INVALID_USER_PWS
    },
    CHECKOUT: {
      FIRST_NAME: dataSet.Error_Messages.CHECKOUT_ERROR_FIRSTNAME,
      LAST_NAME: dataSet.Error_Messages.CHECKOUT_ERROR_LASTNAME,
      ZIP_CODE: dataSet.Error_Messages.CHECKOUT_ERROR_ZIPCODE
    }
  },
  PRODUCT_LIST: {
    BACKPACK: dataSet.Product_Item_List.PRODUCT_BACKPACK,
    BIKE_LIGHT: dataSet.Product_Item_List.PRODUCT_BIKE_LIGHT,
    T_SHIRT: dataSet.Product_Item_List.PRODUCT_T_SHIRT,
    SAUCE_LABS_ONESIE: dataSet.Product_Item_List.PRODUCT_SAUCE_LABS_ONESIE
  },
  MESSAGES: {
    THANK_YOU: dataSet.Message.FINISH_THANK_YOU
  }

}


