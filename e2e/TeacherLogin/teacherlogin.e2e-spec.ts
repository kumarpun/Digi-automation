import { browser, ExpectedConditions } from 'protractor';
import { AppPage } from '../app.po';
import { async } from 'q';

describe('Teacher Login Page', () => {
    let app: AppPage;

    beforeEach(async () => {
        app = new AppPage();
        await app.teacherlogin.navigateTo();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherlogin.emailInput()));
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherlogin.passwordInput()));
    });

    it('should send error text when user does not exist', async () => {
        
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherlogin.emailInput()));
        await app.teacherlogin.emailInput().click();
        await app.teacherlogin.setEmailText('non-existent-email@email.com');
        await app.teacherlogin.setPasswordText('random-password');
        await app.teacherlogin.clickLoginBtn();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherlogin.errorMessageForInvalidCredential));
    })

    it('should show error text when email type is invalid', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.teacherlogin.emailInput()));
        await app.teacherlogin.emailInput().click();
        await app.teacherlogin.setEmailText('test');
        await app.teacherlogin.passwordInput().click();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherlogin.invalidEmail));
    })

    it('should show error text when password is invalid', async () => {

        await browser.waitForAngularEnabled(false);
        await app.teacherlogin.setEmailText(app.teacherusers[0].email);
        await app.teacherlogin.setPasswordText('invalid-password');
        await app.teacherlogin.clickLoginBtn();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherlogin.errorMessageForWrongPassword)); 
    })

    it('should log the user in when credential is valid', async () => {

        await app.teacherlogin.setEmailText(app.teacherusers[0].email);
        await app.teacherlogin.setPasswordText(app.teacherusers[0].password);
        await app.teacherlogin.clickLoginBtn();
    })
})