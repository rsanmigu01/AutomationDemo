import { Selector, t } from 'testcafe'
import LoginPage from '../pages/LoginPage';
import invalidLogin from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import products from '../pages/ProductsPage';
import CheckOutPage from '../pages/CheckOutPage';

fixture ('Automation Demo')
        .page('https://www.saucedemo.com/')
        

test
('Validate unsuccesfull login', async t=> {
    await t.maximizeWindow();
    await LoginPage.validatePageLoaded(t);
    await LoginPage.invalidLogin(t);
    //await t.expect(Selector(LoginPage.errorMsg).visible).ok();

});

test
('validate successfull login', async t => {
    await LoginPage.successfullLogin(t);
    await ProductsPage.validatePageLoaded(t);
    
});

test('add items to the shopping card and checkout', async t => {
    await LoginPage.successfullLogin(t);
    await ProductsPage.validatePageLoaded(t);
    await ProductsPage.selectItems(t);
    await CheckOutPage.checkOutProcess(t);
});


    






