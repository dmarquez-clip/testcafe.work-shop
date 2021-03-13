import {Selector, t} from 'testcafe'

class loginPage {
  //Selectors
  constructor() {
    this.userNameField = Selector('#user-name');
    this.passwordField = Selector('#password');
    this.loginButton = Selector('#login-button');
    this.errorMessage = Selector('h3[data-test="error"]');
  }

  //Generics methods
  async loginForm(username, password) {
    await t.typeText(this.userNameField, username);
    await t.typeText(this.passwordField, password);
    await t.click(this.loginButton)
  }
}

export default new loginPage();
