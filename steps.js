const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const CustomerLoginPage = require('../pageobjects/CustomerLogin.page');
const TransactionPage = require('../pageobjects/Transactions.page');

const pages = {
    Login: CustomerLoginPage,
    Transactions: TransactionPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Then(/^I click on the Customer Login button$/, async () => {
    await CustomerLoginPage.CustomerLoginButton();
});

Then(/^I select my name from the dropdown$/, async () => {
    await CustomerLoginPage.NameDropdown();
});

Then(/^I click on the Login button$/, async () => {
    await TransactionPage.AccountNumberDropdown();
});

Then(/^I click on the Transactions button$/, async () => {
    await TransactionPage.ClickTransactionsButton();
});

Then(/^I retrieve the latest transactional data$/, async () => {
    await CustomerLoginPage.ClickToLogin();
});


