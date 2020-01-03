import { AppPage } from '../app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { async } from '@angular/core/testing';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

describe('Report section', () => {
    let app = new AppPage();

    beforeEach(async () => {
        app = new AppPage();
        await app.login.navigateTo();
        await (browser.wait(ExpectedConditions.visibilityOf(app.login.schoolInput()), 10000));
        await app.login.setSchool();
        await browser.wait(ExpectedConditions.visibilityOf(app.login.Yunderup));
        await app.login.Yunderup.click();
        await (browser.wait(ExpectedConditions.visibilityOf(app.login.emailInput()), 10000));
        await app.validLogin(app.users[0].email, app.users[0].password);
        await (browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost)));
    
        var backToChatButton = app.moderation.firstBackToChat;
        backToChatButton.isPresent().then(function(result) {
        if (result) {
            backToChatButton.click();
            (browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost)));
        } else {
            (browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost))); 
           }
        }); 
    });

    it('Verify student can post on message board', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost));
        await app.notification.textAreaForPost.click();
        await app.notification.textAreaForPost.sendKeys('Report post automation');
        await app.moderation.PostButton.click();
        browser.sleep(5000);
    })

    
    it('Verify student can report on post', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentReport.settingIcon));
        await app.studentReport.settingIcon.click();
        await app.studentReport.settingIcon.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentReport.logoutOption));
        await app.studentReport.logoutOption.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.login.schoolInput()));
        await app.login.setSchool();
        await browser.wait(ExpectedConditions.visibilityOf(app.login.Yunderup));
        await app.login.Yunderup.click();
        await app.login.setEmailText('lucas');
        await app.login.setPasswordText('test');
        await app.login.clickLoginBtn();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentReport.threedotElispseButton));
        await app.studentReport.threedotElispseButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentReport.reportOption));
        await app.studentReport.reportOption.click();
     //   browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.studentReport.putDownContent));
        await app.studentReport.putDownContent.click();
      //  browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.studentReport.reportButton));
        await app.studentReport.reportButton.click();
        browser.sleep(5000);
    })
})