class LoginPage {
    //Definisikan locator dari element
    get emailInput(){
        return $('#email'); //locator field username
    }

    get passwordInput(){
        return $('#password'); //locator field password
    }

    get loginButton(){
        return $('//button[@type="submit"]'); //locator login button
    }

    get errorMsg(){
        return $('//div[@class="chakra-alert css-qwanz3"]'); //locator error message
    }

    //Definisikan action/interaksi yang dilakukan pada element tersebut
    async login(email,password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage()
