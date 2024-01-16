const { $ } = require('@wdio/globals')
const Page = require('./page');

class CustTrans extends Page {


    get AccNo(){
        return $(`//select[@id='accountSelect']`);
    }

    get transBtn(){
        return $(`//button[contains(text(),'Transactions')]`);
    }

    async accSelection(){

        await browser.pause(1000);
        let acc = await this.AccNo;
        acc.selectByVisibleText("1005");
        await browser.pause(6000);
    }

    async clickTransBtn(){
        let Button = (await this.transBtn).click();
        await browser.pause(6000);
    }


open () {
    return super.open('account');
}
}

module.exports = new CustTrans();