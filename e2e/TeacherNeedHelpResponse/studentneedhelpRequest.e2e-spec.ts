import { AppPage } from '../app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { async } from '@angular/core/testing';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

describe('Need help Section for teacher', () => {
    let app = new AppPage();

    beforeEach(async () => {
        app = new AppPage();
        await app.login.navigateTo();
        await app.login.setSchool();
        await browser.wait(ExpectedConditions.visibilityOf(app.login.Yunderup));
        await app.login.Yunderup.click();
        await (browser.wait(ExpectedConditions.visibilityOf(app.login.emailInput()), 10000));
        await app.validLogin(app.users[0].email, app.users[0].password);
        await (browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost)));    
    })

    it('Verify student can request help for himself right now', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.NeedHelpButton));
        await app.needhelprequest.NeedHelpButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.InsideSchoolButton));
        await app.needhelprequest.InsideSchoolButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.ForMeButton));
        await app.needhelprequest.ForMeButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.RighNowButton));
        await app.needhelprequest.RighNowButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.BackToChatButton));
        await app.needhelprequest.BackToChatButton.click();
    })

    it('Verify student can request help for himself right now', async () => {
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.NeedHelpButton));
        await app.needhelprequest.NeedHelpButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.InsideSchoolButton));
        await app.needhelprequest.InsideSchoolButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.ForMeButton));
        await app.needhelprequest.ForMeButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.RighNowButton));
        await app.needhelprequest.RighNowButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.BackToChatButton));
        await app.needhelprequest.BackToChatButton.click();

    })

    it('Verify student can request help for himself right now', async () => {
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.NeedHelpButton));
        await app.needhelprequest.NeedHelpButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.InsideSchoolButton));
        await app.needhelprequest.InsideSchoolButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.ForMeButton));
        await app.needhelprequest.ForMeButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.RighNowButton));
        await app.needhelprequest.RighNowButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.BackToChatButton));
        await app.needhelprequest.BackToChatButton.click();
    })
})