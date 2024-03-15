class KategoriPage {
   
    get kategoriNav(){
        return $('//div[contains(text(), "kategori")]'); 
    }

    get addButton(){
        return $('//a[@href="/categories/create"]'); 
    }

    get namaInput(){
        return $('#nama'); 
    }

    get deskripsidInput(){
        return $('#deskripsi');
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
        return $('//td[contains(text(), "coba123")]')
    }

    get doticonEdit(){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[5]/td[3]/button[contains(@class, "chakra-button chakra-menu__menu-button")]'); 
    }

    get editChoose(){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[5]/td[3]/div/div/a[contains(@class, "chakra-menu__menuitem css-13c7rae")]'); 
    }

    get dataEdit(){
        return $('//td[contains(text(), "cobalagi")]')
    }

    get doticonDelete(){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[5]/td[3]/button[contains(@class, "chakra-button chakra-menu__menu-button")]'); 
    }

    get deleteChoose(){
        return $('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/table/tbody/tr[3]/td[3]/div/div/button[contains(@class, "chakra-menu__menuitem css-13c7rae")]'); 
    }

    get deleteButtonModal(){
        return $('/html/body/div[4]/div/div[3]/div/section/footer/button[2](@class, "chakra-button css-n45e6f")]'); 
    }


    async directAddKategori() {
        await this.kategoriNav.click()
        await this.addButton.click();
    }

    async addKategori(name,deskripsi) {
        await this.namaInput.setValue(name);
        await this.deskripsidInput.setValue(deskripsi);
        await this.saveButton.click();
    }

    async assertSuccessMessage(expectedMessage){
        await expect(await this.successMsg).toHaveTextContaining(expectedMessage);
    }
    
    async getSuccessMessage(){
        return await this.successMsg.getText();
    }

    async searchKategori(search){
        await this.kategoriNav.click()
        await this.inputSearch.setValue(search);
    }

    async assertsearchData(namakategori){
        await expect(this.dataSearch).toHaveTextContaining(namakategori)
    }

    async directUpdateKategori() {
        await this.kategoriNav.click()
        await this.doticonEdit.click();
        await this.editChoose.click();
    }

    async updateKategori(name,deskripsi){
        await this.namaInput.setValue(name);
        await this.deskripsidInput.setValue(deskripsi);
        await this.saveButton.click();
    }

    async directDeleteKategori() {
        await this.kategoriNav.click()
        await this.dotIcon.click();
    }

    async opsiDeleteKategori() {
        await this.deleteChoose.click();
        await this.deleteButtonModal.click();
    }
}

module.exports = new KategoriPage();