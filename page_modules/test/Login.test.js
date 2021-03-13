import PageProduct from '../pages/PageProduct'
import PageLogin from '../pages/PageLogin'
import PageMenu from '../pages/PageMenu'
import {CREDENTIALS} from '../data/Credentials'
import {PAGE} from "../data/Constants";

fixture('login feature testing').page(PAGE.URL)

test('user can login using valid credentials', async t => {
  await PageLogin.loginForm(CREDENTIALS.STANDAR_USER.USERNAME,
      CREDENTIALS.STANDAR_USER.PASSWORD)
  await t.expect(PageProduct.pageTitle.exists).ok()
  await t.expect(PageProduct.pageTitle.innerText).eql(PAGE.PAGE_TITLES.PRODUCT)
})

test('user can not login using invalid credentials', async t => {
  await PageLogin.loginForm(CREDENTIALS.INVALID_USER.USERNAME,
      CREDENTIALS.INVALID_USER.PASSWORD);
  await t.expect(PageLogin.errorMessage().exists).ok();
  await t.expect(PageLogin.errorMessage().innerText).eql(
      PAGE.ERROR_MESSAGE.INVALID_USER_PWS)
})

test('user can logout', async t => {
  await PageLogin.loginForm(CREDENTIALS.STANDAR_USER.USERNAME,
      CREDENTIALS.STANDAR_USER.PASSWORD);
  await t.expect(PageProduct.pageTitle().exists).ok()
  await PageMenu.logout()
  await t.expect(PageLogin.passwordField().exists).ok()

})
