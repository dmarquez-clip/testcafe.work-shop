import {Selector} from 'testcafe'


class ProductPage{
    constructor(){
        this.pageTitle = Selector('div[class="app_logo"]');
    }
}

export default new ProductPage();