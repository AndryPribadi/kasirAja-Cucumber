const { Given, When, Then } = require("@wdio/cucumber-framework");
const Page = require("../pages/page");
const LoginPage = require("../pages/login.page");
const DashboardPage = require("../pages/dashboard.page");

Given(/^I open Kasiraja website$/, async () => {
    await Page.open('/');
})

//Data driven test (Scenario Outline) step defintions
When(/^I login with (\S+) and (.+)$/, async (email, password) => {
    await LoginPage.login(email, password);
});

Then(/^I should see an error message$/, async () => {
    await LoginPage.assertErrorMessage('Kredensial yang Anda berikan salah')
})

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('tio@gmail.com','123456')
})

Then(/^I should be on the dashboard page$/, async () => {
    await DashboardPage.assertDashboardUrl()
})

