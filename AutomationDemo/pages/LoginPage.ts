import {Selector} from 'testcafe'
import config from '../configuration/config'
class LoginPage {
    //text fields
    usernameFld: any;
    passwordFld: any;
    //buttons
    loginBtn: any;
    logoutBtn: any;
    errorMsg: any;


    constructor(){
    this.usernameFld  = Selector('[id="user-name"]');
    this.passwordFld  = Selector('[id="password"]');  
    this.loginBtn = Selector('[id="login-button"]');   
    this.errorMsg = Selector('#login_button_container > div > form > h3 > button');
}
    async validatePageLoaded(t: TestController) {
    
    await  t.expect(Selector(this.usernameFld).visible).ok();
    
  }

    async invalidLogin(t: TestController){
        await t
        .typeText(this.usernameFld, config.invalidUser.toString())
        .typeText(this.passwordFld, config.invalidPassword.toString())     
        .click(this.loginBtn)
        .expect(Selector(this.errorMsg).visible).ok();


    }

    async successfullLogin(t: TestController) {
        await t
        .typeText(this.usernameFld, config.validUser)
        .typeText(this.passwordFld, config.validPassword)     
        .click(this.loginBtn)
        
    }
    
}

export default new LoginPage();
 