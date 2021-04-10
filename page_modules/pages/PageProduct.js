import {Selector, t} from 'testcafe'

class addItem {
  constructor(text) {
    this.item = Selector('.inventory_item_description')
    .withText(text)
    .child('.pricebar')
    .child('.btn_primary.btn_inventory')
  }
}

class ProductPage {
  //Selectors
  constructor() {
    this.pageTitle = Selector('.title');
    this.item = Selector('.inventory_item');
  }

//Generic methods
  async addItemToCart(itemToAdd) {
    try {
      await t.click(new addItem(itemToAdd).item);
    } catch (err) {
      console.log('The following item is not in the list: ' + itemToAdd)
    }

  }

  async getPageTitle() {
    return await this.pageTitle.innerText;
  }

}

export default new ProductPage();


