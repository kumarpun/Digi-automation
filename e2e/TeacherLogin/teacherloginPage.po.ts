import {browser, by, element, ElementFinder, ExpectedConditions, promise} from 'protractor';

export class TeacherLoginPage {
    public teacherLoginUrlPath = '';
    public emailInput = () => element(by.xpath("//input[@placeholder='Email']"));
    public passwordInput = () => element(by.xpath("//input[@placeholder='Password']"));
    public loginButton = () => element(by.xpath("//button[contains(text(),'LOG IN')]"));

    public async navigateTo(): Promise<any> {

        await browser.waitForAngularEnabled(false);
        return browser.get('https://staging.digiisocial.com/');
    }

    public async setEmailText(text: string): Promise<any> {
        const emailInput = this.emailInput();
        await emailInput.clear();
        await emailInput.sendKeys(text);
    }

    public async setPasswordText(text: string): Promise<any> {
        const passwordInput = this.passwordInput();
        await passwordInput.clear();
        await passwordInput.sendKeys(text);
    }
    
    public async clickLoginBtn(): Promise<any> {
        await this.loginButton().click();
    }


    // error message
    public get errorMessageForInvalidCredential(): ElementFinder {
        return element(by.xpath('//*[@id="root"]/div/div/div[2]/form/div[2]/p'));
    }

    public get errorMessageForWrongPassword(): ElementFinder {
        return element(by.xpath("//p[contains(text(),'Credentials do not match.')]"));
    }

    public get invalidEmail(): ElementFinder {
        return element(by.xpath("//p[text()='Invalid email address']"));
    }
}

