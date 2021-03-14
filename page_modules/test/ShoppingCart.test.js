import {PAGE} from "../data/PageConstants";import PageShopCart from "../pages/PageShoppingCart";import PageProduct from "../pages/PageProduct";import PageCommon from "../pages/PageCommon";import Roles from "../roles/Roles";fixture('shopping car feature testing').page(PAGE.URL).beforeEach(async t => {  await t.useRole(Roles.standarUser);})test('User can navigate to the shopping cart', async t => {  await t.click(PageCommon.shoppingCartBtn);  await t.expect(PageShopCart.titlePage.exists).ok();  await t.expect(PageShopCart.titlePage.innerText).eql(      PAGE.PAGE_TITLES.YOUR_CART);})test('user can add an item to the cart', async t => {  await PageProduct.addItemToCart(PAGE.PRODUCT_LIST.BIKE_LIGHT);  await t.click(PageCommon.shoppingCartBtn)  .expect(await PageShopCart.isItemInTheCart(      PAGE.PRODUCT_LIST.BIKE_LIGHT)).eql(true);})test('user can add multiple items to the cart', async t => {  await PageProduct.addItemToCart(PAGE.PRODUCT_LIST.BIKE_LIGHT);  await PageProduct.addItemToCart(PAGE.PRODUCT_LIST.BACKPACK);  await PageProduct.addItemToCart(PAGE.PRODUCT_LIST.T_SHIRT);  await PageProduct.addItemToCart(PAGE.PRODUCT_LIST.SAUCE_LABS_ONESIE);  await t.click(PageCommon.shoppingCartBtn)  .expect(await PageShopCart.isItemInTheCart(      PAGE.PRODUCT_LIST.BIKE_LIGHT)).eql(true)  .expect(await PageShopCart.isItemInTheCart(      PAGE.PRODUCT_LIST.BACKPACK)).eql(true)  .expect(await PageShopCart.isItemInTheCart(      PAGE.PRODUCT_LIST.T_SHIRT)).eql(true)  .expect(await PageShopCart.isItemInTheCart(      PAGE.PRODUCT_LIST.SAUCE_LABS_ONESIE)).eql(true);})