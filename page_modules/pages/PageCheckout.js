import {Selector, t} from 'testcafe'class PageCheckout {  //selectors  constructor() {    this.firstName = Selector('#first-name');    this.lastName = Selector('#last-name');    this.zipCode = Selector('#postal-code')    this.continueBtn = Selector('input[value="CONTINUE"]')    this.cancelBtn = Selector('a[class="cart_cancel_link btn_secondary"]')    this.errorMessage = Selector('h3[data-test="error"]')  }//Generic methods  async checkoutForm(name, lastName, zipCode) {    await t.typeText(this.firstName, name)    .typeText(this.lastName, lastName)    .typeText(this.zipCode, zipCode)    .click(this.continueBtn);  }}export default new PageCheckout();