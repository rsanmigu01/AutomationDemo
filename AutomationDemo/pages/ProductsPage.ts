import {Selector} from 'testcafe'

class Products{
    //text
    productsTxt: any;


    constructor(){
        this.productsTxt = Selector('.product_label');
    }

    async validatePageLoaded(t: TestController) {
      await  t.expect(Selector(this.productsTxt).visible).ok();
    }

    async selectItems(t: TestController){
        const prodItems = Selector('button').withText('ADD TO CART');
        const countItems = await prodItems.count;
        for(let i=0; i<=countItems; i++){          
        if(await Selector(prodItems.nth(i)).exists){
        await t.click(prodItems.nth(i))
        var text = new Array(await Selector('.inventory_item_name').nth(i).innerText);
        console.log(text);
        }
        }         
        await t.click(Selector('#shopping_cart_container > a > svg > path'))
        
    }

    
}

export default new Products();
