import {Selector, t} from 'testcafe'

class ProductPage {
  constructor() {
    this.pageTitle = Selector('.product_label');
    this.item = Selector('.inventory_item');
  }

  async addItemToCart(itemToAdd) {
    try {
      await t.click(this.item().withText(itemToAdd).child('.pricebar').child(
          '.btn_primary.btn_inventory'));
    } catch (err) {
      console.log('The following item is not in the list: ' + itemToAdd)
    }

  }
}

export default new ProductPage();
