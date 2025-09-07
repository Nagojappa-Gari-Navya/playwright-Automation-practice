const { test, expect } = require('@playwright/test');
class loginpage{
    constructor(page){
        this.page=page
        this.usernameInput=page.locator('//input[@placeholder="Username"]')
        this.passwordInput=page.locator('//input[@placeholder="Password"]')
        this.loginButton=page.locator("//button[@type='submit']")
        this.loginErrorMessage=page.locator('//p[text()="Invalid credentials"]')
    }


}