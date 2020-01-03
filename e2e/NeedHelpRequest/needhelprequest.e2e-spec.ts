import { AppPage } from '../app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { async } from '@angular/core/testing';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

describe('Need help Section', () => {
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
        // await app.notification.textAreaForPost.click();
    
        // var backToChatButton = app.moderation.firstBackToChat;
        // backToChatButton.isPresent().then(function(result) {
        // if (result) {
        //     backToChatButton.click();
        //     (browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost)));
        //     app.notification.textAreaForPost.click();
        // } else {
        //     (browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost))); 
        //     app.notification.textAreaForPost.click();
        //    }
        // }); 
    })

    it('Verify student can request help for himself right now', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.NeedHelpButton));
        await app.needhelprequest.NeedHelpButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.InsideSchoolButton));
        await app.needhelprequest.InsideSchoolButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.ForMeButton));
        await app.needhelprequest.ForMeButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.RighNowButton));
        await app.needhelprequest.RighNowButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.BackToChatButton));
        await app.needhelprequest.BackToChatButton.click();

    })

    it('Verify student can request help for himself using soon', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.NeedHelpButton));
        await app.needhelprequest.NeedHelpButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.InsideSchoolButton));
        await app.needhelprequest.InsideSchoolButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.ForMeButton));
        await app.needhelprequest.ForMeButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.SoonButton));
        await app.needhelprequest.SoonButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.TeacherCheckBox));
        await app.needhelprequest.TeacherCheckBox.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.Reason));
        await app.needhelprequest.Reason.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.sendHelpRequestButton));
        await app.needhelprequest.sendHelpRequestButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.BackToChatButton));
        await app.needhelprequest.BackToChatButton.click();
    })

    it('Verify student can request help for someone else', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.NeedHelpButton));
        await app.needhelprequest.NeedHelpButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.InsideSchoolButton));
        await app.needhelprequest.InsideSchoolButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.SomeOneElseButton));
        await app.needhelprequest.SomeOneElseButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.studentPlaceholder));
        await app.needhelprequest.studentPlaceholder.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.selectStudent));
        await app.needhelprequest.selectStudent.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.teacherSelect));
        await app.needhelprequest.teacherSelect.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.Reason));
        await app.needhelprequest.Reason.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.sendHelpRequestButton));
        await app.needhelprequest.sendHelpRequestButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.BackToChatButton));
        await app.needhelprequest.BackToChatButton.click();
    })

    it('Verify student can request help outside of school', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.NeedHelpButton));
        await app.needhelprequest.NeedHelpButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.outSideSchoolButton));
        await app.needhelprequest.outSideSchoolButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.eSafetyCommissionerButton));
        await app.needhelprequest.eSafetyCommissionerButton.click();
    })

    it('Verify student can request help outside of school using kids helpline', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.NeedHelpButton));
        await app.needhelprequest.NeedHelpButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.outSideSchoolButton));
        await app.needhelprequest.outSideSchoolButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.needhelprequest.kidsHelplineButton));
        await app.needhelprequest.kidsHelplineButton.click();
    })
})