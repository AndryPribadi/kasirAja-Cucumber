class ProdukPage {
    get produkNav(){
        return $('//div[contains(text(), "produk")]'); 
    }

    get addButton(){
        return $('//a[@href="/products/create"]'); 
    }

    get namaInput(){
        return $('#nama'); 
    }

    get deskripsiInput(){
        return $('#deskripsi');
    }

    get hargabeliInput(){
        return $('//input[@id="harga beli"]');
    }

    get hargajualInput(){
        return $('//input[@id="harga jual"]');
    }

    get stokInput(){
        return $('#stok');
    }

    get dropdownKategori(){
        return $('//div[@class="chakra-input__right-addon css-7nrq"]');
    }

    get chooseKategori(){
        return $('//*[@id="chakra-modal--body-156"]/table/tbody/tr[1]/td');
    }

    get saveButton(){
        return $('//button[contains(text(), "simpan")]'); 
    }

    get successMsg(){
        return $('//div[contains(text(),"success")]'); 
    }

    get inputSearch(){
        return $('//input[@placeholder= "cari"]'); 
    }

    get dataSearch(){
        return $('//td[contains(text(), "asda")]')
    }

    get doticonEdit(){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[2]/td[10]/button[contains(@class, "chakra-button chakra-menu__menu-button")]'); 
    }

    get editChoose(){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[2]/td[10]/div/div/a[contains(@class, "chakra-menu__menuitem css-13c7rae")]'); 
    }

    get dataEdit(){
        return $('//td[contains(text(), "tambah")]')
    }

    get doticonDelete(){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[10]/button[contains(@class, "chakra-button chakra-menu__menu-button")]'); 
    }

    get deleteChoose(){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[1]/td[10]/div/div/button[contains(@class, "chakra-menu__menuitem css-13c7rae")]'); 
    }

    get deleteButtonModal(){
        return $('/html/body/div[5]/div/div[3]/div/section/footer/button[2](@class, "chakra-button css-n45e6f")]'); 
    }


    async directAddProduk() {
        await this.produkNav.click()
        await this.addButton.click();
    }

    async addProduk(name,deskripsi,hargabeli,hargajual,stok) {
        await this.namaInput.setValue(name);
        await this.deskripsiInput.setValue(deskripsi);
        await this.hargabeliInput.setValue(hargabeli);
        await this.hargajualInput.setValue(hargajual);
        await this.stokInput.setValue(stok);
        await this.dropdownKategori.click();
        await this.chooseKategori.click();
        await this.saveButton.click();
    }

    async assertSuccessMessage(expectedMessage){
        await expect(await this.successMsg).toHaveTextContaining(expectedMessage);
    }
    
    async getSuccessMessage(){
        return await this.successMsg.getText();
    }

    async searchProduk(search){
        await this.produkNav.click()
        await this.inputSearch.setValue(search);
    }

    async assertsearchData(namakategori){
        await expect(this.dataSearch).toHaveTextContaining(namakategori)
    }

    async directUpdateProduk() {
        await this.produkNav.click()
        await this.doticonEdit.click();
        await this.editChoose.click();
    }

    async updateProduk(name,deskripsi,hargabeli,hargajual,stok) {
        await this.namaInput.setValue(name);
        await this.deskripsiInput.setValue(deskripsi);
        await this.hargabeliInput.setValue(hargabeli);
        await this.hargajualInput.setValue(hargajual);
        await this.stokInput.setValue(stok);
        await this.dropdownKategori.click();
        await this.chooseKategori.click();
        await this.saveButton.click();
    }

    async directDeleteProduk() {
        await this.produkNav.click()
        await this.doticonDelete.click();
    }

    async opsiDeleteProduk() {
        await this.deleteChoose.click();
        await this.deleteButtonModal.click();
    }
}

module.exports = new ProdukPage();