const { $ } = require('@wdio/globals');
const Page = require('./page');


class LoginPage extends Page {


    get CustLoginBtn(){
        return $(`//button[contains(text(),'Customer Login')]`);
    }

    get NameDD(){
        return $(`//select[@id='userSelect']`);
    }

    get LoginBtn(){
        return $(`//button[contains(text(),'Login')]`);
    }

    async CustomerLoginButton(){
        let btn = this.CustLoginBtn;
        (await btn).click();
        await browser.pause(2000);
    }

    async NameDropdown(){
        let dd = this.NameDD;
        (await dd).selectByIndex(2);
        await browser.pause(2000);
    }

    async ClickToLogin(){
        let btn = this.LoginBtn;
        (await btn).click();
        await browser.pause(2000);
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
