const { $ } = require('@wdio/globals');
const Page = require('./page');


class LoginPage extends Page {

get AccountNumDD(){
    return $(`//select[@id='accountSelect']`);
}

get TransactionsBtn(){
    return $(`//button[contains(text(),'Transactions')]`);
}

get Table(){
    return $(``);
}

async AccountNumberDropdown(){
    let accnumdd = this.AccountNumDD;
    (await accnumdd).selectByVisibleText(1004);
    await browser.pause(2000);
}

async ClickTransactionsButton(){
    let btn = this.TransactionsBtn;
    (await btn).click();
    await browser.pause(2000);

}

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
