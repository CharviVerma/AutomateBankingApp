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

// teble logic
// // Assuming you have already navigated to the webpage and located the table element

// // Example table locator
// const tableLocator = 'your-table-selector';

// // Build a dynamic XPath to select the last row
// const lastRowXPath = `${tableLocator}//tr[last()]`;

// // Find the last row using the dynamic XPath
// const lastRow = $(lastRowXPath);

// // Retrieve values from columns of the last row
// const dateTime = lastRow.$('td:nth-child(1)').getText();
// const amount = lastRow.$('td:nth-child(2)').getText();
// const transactionType = lastRow.$('td:nth-child(3)').getText();

// // Log or use the retrieved values as needed
// console.log('Date-Time:', dateTime);
// console.log('Amount:', amount);
// console.log('Transaction Type:', transactionType);


    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
