import PageProduct from '../pages/PageProduct'
import PageLogin from '../pages/PageLogin'
import PageMenu from '../pages/PageMenu'
import {CREDENTIALS} from '../data/Credentials'
import {PAGE} from "../data/PageConstants";

fixture('login feature testing').page(PAGE.URL);

test('user can login using valid credentials', async t => {
  //Login in to the app
  await PageLogin.loginForm(CREDENTIALS.STANDAR_USER.USERNAME,
      CREDENTIALS.STANDAR_USER.PASSWORD);
  //validate success login
  await t.expect(await PageProduct.getPageTitle()).eql(PAGE.PAGE_TITLES.PRODUCT)
});

test('user can not login using invalid credentials', async t => {
  //Login in to the app
  await PageLogin.loginForm(CREDENTIALS.INVALID_USER.USERNAME,
      CREDENTIALS.INVALID_USER.PASSWORD);
  //validate error message
  await t.expect(await PageLogin.getErrorMessage()).eql(
      PAGE.ERROR_MESSAGE.LOGIN.INVALID_USER_PWS);
});

test('user can logout', async t => {
  //Login in to the app
  await PageLogin.loginForm(CREDENTIALS.STANDAR_USER.USERNAME,
      CREDENTIALS.STANDAR_USER.PASSWORD)
  //validate success login
  await t.expect(await PageProduct.getPageTitle()).eql(
      PAGE.PAGE_TITLES.PRODUCT);
  //Logout to the app
  await PageMenu.logout()
  // validate logout
  await t.expect(await PageLogin.loginButtonExit()).ok();

});
