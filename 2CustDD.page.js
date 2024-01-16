const { $ } = require('@wdio/globals')
const Page = require('./page');

class CustDropdown extends Page {
 get name(){
    return $(`//select[@id='userSelect']`);
 }

 get login(){
    return $(`//button[contains(text(),'Login')]`);
 }

async dropdown(){
    let user = await this.name;
    user.selectByAttribute('value', '2');
        await browser.pause(6000);
}

async loginNow(){
    (await this.login).click();
    await browser.pause(6000);
}


open () {
    return super.open('customer');
}
}

module.exports = new CustDropdown();