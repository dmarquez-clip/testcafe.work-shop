require('dotenv').config()

export const PAGE = {
  URL: process.env.PAGE_URL,
  PAGE_TITLES: {
    PRODUCT: "Products",
    YOUR_CART: "Your Cart",
    OVERVIEW: "Checkout: Overview"
  },
  ERROR_MESSAGE: {
    LOGIN: {
      MISSING_USER: "Epic sadface: Username is required",
      MISSING_PWS: "Epic sadface: Password is required",
      INVALID_USER_PWS: "Epic sadface: Username and password do not match any user in this service"
    },
    CHECKOUT: {
      FIRST_NAME: "Error: First Name is required",
      LAST_NAME: "Error: Last Name is required",
      ZIP_CODE: "Error: Postal Code is required"
    }
  },
  PRODUCT_LIST: {
    BACKPACK: "Sauce Labs Backpack",
    BIKE_LIGHT: "Sauce Labs Bike Light",
    T_SHIRT: "Sauce Labs Bolt T-Shirt",
    SAUCE_LABS_ONESIE: "Sauce Labs Onesie"
  },
  MESSAGES: {
    THANK_YOU: "THANK YOU FOR YOUR ORDER"
  }

}


