import { AppPage } from '../app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { async } from '@angular/core/testing';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

describe('Teacher help response', () => {
    let app = new AppPage();

    beforeEach(async () => {
        app = new AppPage();
        await app.teacherlogin.navigateTo();
        await (browser.wait(ExpectedConditions.visibilityOf(app.teacherlogin.emailInput()), 10000));
        await app.validLoginForTeacher(app.teacherusers[0].email, app.teacherusers[0].password);
    })

    it('Teacher should be able to cancel new help request pop up through grey tick', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.greyTick));
        await app.teacherHelpResponse.greyTick.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.cancelHelpRequestpopup));
        await app.teacherHelpResponse.cancelHelpRequestpopup.click();
        browser.sleep(5000);
    })

    it('Teacher should be able to accept the new help request from students', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.StudentMessage));
        await app.teacherHelpResponse.StudentMessage.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.AcceptButton));
        await app.teacherHelpResponse.AcceptButton.click();
        browser.sleep(5000);
    })

    it('Teacher should be reply to students', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.StudentMessage));
        await app.teacherHelpResponse.StudentMessage.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.AcceptButton));
        await app.teacherHelpResponse.AcceptButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.StudentMessage));
        await app.teacherHelpResponse.StudentMessage.click();
        // await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.AcceptButton));
        // await app.teacherHelpResponse.AcceptButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.inputAreaForMessage));
        await app.teacherHelpResponse.inputAreaForMessage.sendKeys('Hello Chelsea');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(5000);
    })

    it('Teacher should be able to close/complete help request', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.StudentMessage));
        await app.teacherHelpResponse.StudentMessage.click();
        // await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.AcceptButton));
        // await app.teacherHelpResponse.AcceptButton.click();
        // await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.inputAreaForMessage));
        // await app.teacherHelpResponse.inputAreaForMessage.sendKeys('Hello Chelsea');
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.closeButton));
        await app.teacherHelpResponse.closeButton.click();
        browser.sleep(5000);
    })

    it('Teacher should be able to accept new help request through grey tick', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.greyTick));
        await app.teacherHelpResponse.greyTick.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.teacherHelpResponse.yesButtonForPopup));
        await app.teacherHelpResponse.yesButtonForPopup.click();
        browser.sleep(5000);
    })
})