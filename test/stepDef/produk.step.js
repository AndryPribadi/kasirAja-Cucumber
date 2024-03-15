const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pages/login.page");
const Page = require("../pages/page");
const ProdukPage = require("../pages/produk.page");

Given(/^I login Kasiraja with valid credential$/, async () => {
    await Page.open('/');
    await LoginPage.login('tio@gmail.com', '123456');
});

When (/^I add produk in page produk$/, async () => {
    await ProdukPage.directAddProduk();
});

When (/^I fill nama, deskripsi, harga beli, harga jual, stok and kategori in page produk$/, async () => {
    await ProdukPage.addProduk('baju','bajulebaran','20','50','8');
});

Then (/^I should see success message$/, async () => {
    await ProdukPage.assertSuccessMessage('success');
});

Given (/^I search in page produk$/, async () => {
    await ProdukPage.searchProduk('asda');
});

Then (/^I should see data in search$/, async () => {
    await ProdukPage.assertsearchData('asda');
});

Given (/^I update produk in page produk$/, async () => {
    await ProdukPage.directUpdateProduk();
});

When (/^I update nama, deskripsi, harga beli, harga jual, stok and kategori in page produk$/, async () => {
    await ProdukPage.updateProduk('baru','tahunlalu','10','60','9');
});

Then (/^I should see success message$/, async () => {
    await ProdukPage.assertsearchData('asda');
});

Given (/^I I choose delete in page produk$/, async () => {
    await ProdukPage.directDeleteProduk();
});

When (/^I delete data in page produk$/, async () => {
    await ProdukPage.opsiDeleteProduk();
});

Then (/^I should see success message$/, async () => {
    await ProdukPage.assertSuccessMessage('success');
});