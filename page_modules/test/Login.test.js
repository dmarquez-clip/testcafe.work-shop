import ProductPage from '../pages/Product'
import LoginPage from '../pages/Login'
import {CREDENTIALS} from '../data/Credentials'
import {PAGE} from "../data/Constants";

fixture('login feature testing').page(PAGE.URL)

test('user can login using valid credentials', async t => {
  await LoginPage.loginForm(CREDENTIALS.STANDAR_USER.USERNAME,
      CREDENTIALS.STANDAR_USER.PASSWORD)
  await t.expect(ProductPage.pageTitle().exists).ok()
})

test('user can not login using invalid credentials', async t => {
  await LoginPage.loginForm(CREDENTIALS.INVALID_USER.USERNAME,
      CREDENTIALS.INVALID_USER.PASSWORD)
  await t.expect(LoginPage.errorMessage().exists).ok()
  await t.expect(LoginPage.errorMessage().innerText).eql(
      'Epic sadface: Username and password do not match any user in this service')
})
