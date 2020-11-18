import {Selector} from 'testcafe'
import config from '../configuration/config';
import Config from '../configuration/config'

class checkout{
    checkOutBtn: any;
    continueBtn: any;
    firstNameFld: any;
    lastNameFld: any;
    errorMsg: any;

    constructor(){
        this.checkOutBtn = Selector('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button');
        this.continueBtn = Selector('#checkout_info_container > div > form > div.checkout_buttons > input');
        this.firstNameFld = Selector('#first-name');
        this.lastNameFld = Selector('#last-name');
        this.errorMsg = Selector('#shopping_cart_container > a > svg');
    }
    async checkOutProcess(t: TestController){
        await t 
        .hover(Selector(this.checkOutBtn))
        .expect(Selector(this.checkOutBtn).visible).ok()
        .click(this.checkOutBtn)
        .expect(Selector(this.continueBtn).visible).ok()
        .typeText(this.firstNameFld, config.firstName)
        .typeText(this.lastNameFld, config.lastName)
        .click(this.continueBtn)   
        .expect(Selector(this.errorMsg).visible).ok();
        var message = await Selector(this.errorMsg).innerText;
        console.log(message);
        
        

    }
}
export default new checkout();