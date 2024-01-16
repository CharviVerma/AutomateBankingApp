const { $ } = require('@wdio/globals')
const Page = require('./page');

class CustLogin extends Page {
    get Custloginbtn(){
        return $(`//button[contains(text(),'Customer Login')]`);;
    }

    // get Manloginbtn(){
    //     return $(`//button[contains(text(),'Bank Manager Login')]`);;
    // }

    async Login(){
        let btn = this.Custloginbtn;
        await btn.click();  
        await browser.pause(6000);

    }


open () {
    return super.open('login');
}
}

module.exports = new CustLogin();