import {Selector, t} from 'testcafe'

class ProductPage {
  //Selectors
  constructor() {
    this.pageTitle = Selector('.product_label');
    this.item = Selector('.inventory_item');
  }

//Generic methods
  async addItemToCart(itemToAdd) {
    try {
      await t.click(this.item().withText(itemToAdd).child('.pricebar').child(
          '.btn_primary.btn_inventory'));
    } catch (err) {
      console.log('The following item is not in the list: ' + itemToAdd)
    }

  }

  async getPageTitle() {
    return await this.pageTitle.innerText;
  }

}

export default new ProductPage();
