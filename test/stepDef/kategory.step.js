const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pages/login.page");
const KategoriPage = require("../pages/kategori.page");
const Page = require("../pages/page");

Given(/^I login Kasiraja with valid credential$/, async () => {
    await Page.open('/');
    await LoginPage.login('tio@gmail.com', '123456');
});

When (/^I add category in page category$/, async () => {
    await KategoriPage.directAddKategori();
});

When (/^I fill nama and deskripsi in page category$/, async () => {
    await KategoriPage.addKategori('Makanan', 'Makanan ringan');
});

Then (/^I should see success message$/, async () => {
    await KategoriPage.assertSuccessMessage('success');
});

Given (/^I search in page category$/, async () => {
    await KategoriPage.searchKategori('coba123');
});

Then (/^I should see data in search$/, async () => {
    await KategoriPage.assertsearchData('coba123');
});

Given (/^I update kategori in page category$/, async () => {
    await KategoriPage.directUpdateKategori();
});

When (/^I update nama and deskripsi in page category$/, async () => {
    await KategoriPage.updateKategori('cobalagi', 'updatecoba');
});

Then (/^I should see success message$/, async () => {
    await KategoriPage.assertsearchData('cobalagi');
});

Given (/^I choose delete in page category$/, async () => {
    await KategoriPage.directDeleteKategori();
});

When (/^I delete data in page category$/, async () => {
    await KategoriPage.opsiDeleteKategori();
});

Then (/^I should see success message$/, async () => {
    await KategoriPage.assertSuccessMessage('success');
});