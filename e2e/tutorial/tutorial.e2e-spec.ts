import { AppPage } from '../app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { async } from '@angular/core/testing';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

fdescribe('Tutorial section', () => {
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

    it('Verify student can view tutorial category', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
        await app.tutorial.TutorialLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.viewAllTab));
    })

    it('Verify student can search tutorial based on title', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
        await app.tutorial.TutorialLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.viewAllTab));
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.serachBar));
        await app.tutorial.serachBar.click();
        await app.tutorial.serachBar.sendKeys('two');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(5000);
    })

    // fit('Verify student can view all video when search field is cleared', async () => {

    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
    //     await app.tutorial.TutorialLink.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.viewAllTab));
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.serachBar));
    //     await app.tutorial.serachBar.click();
    //     await app.tutorial.serachBar.sendKeys('two');
    //     browser.actions().sendKeys(protractor.Key.ENTER).perform();
    //     browser.sleep(5000);
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoTitleTwo));
    //     await app.tutorial.serachBar.clear();
    //     browser.actions().sendKeys(protractor.Key.ENTER).perform();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.searchIcon));
    //     await app.tutorial.searchIcon.click();
    //     browser.sleep(5000);
    // })

    it('Verify student can watch tutorial video based on category', async () => {
        
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
        await app.tutorial.TutorialLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoTitleOne));
        await app.tutorial.videoTitleOne.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.playButton));
        browser.sleep(5000);
        await app.tutorial.playButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoAutoPlay));
        // await app.tutorial.videoAutoPlay.click();
        browser.sleep(8000);
    })

    it('Verify student can view specific category', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
        await app.tutorial.TutorialLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
        await app.tutorial.CategoryOne.click();
    })

    it('Verify student can view all category', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
        await app.tutorial.TutorialLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
        await app.tutorial.CategoryOne.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.viewAllTab));
        await app.tutorial.viewAllTab.click();
        browser.sleep(5000);
    })
    it('Verify student cannot go back to message board while video is playing', async () => {
        
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
        await app.tutorial.TutorialLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoTitleOne));
        await app.tutorial.videoTitleOne.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.playButton));
        browser.sleep(5000);
        await app.tutorial.playButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoAutoPlay));
        await app.tutorial.videoAutoPlay.click();
        await app.tutorial.videoAutoPlay.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.digiLogo));
        await app.tutorial.digiLogo.click();
    })

    // it('Verify student can go back to video list after answered question correctly', async () => {
        
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
    //     await app.tutorial.TutorialLink.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoTitleOne));
    //     await app.tutorial.videoTitleOne.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.playButton));
    //     browser.sleep(5000);
    //     await app.tutorial.playButton.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoAutoPlay));
    //     await app.tutorial.videoAutoPlay.click();
    //     await app.tutorial.videoAutoPlay.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.questionOne));
    //     await app.tutorial.questionOne.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.questionTwoAnswer));
    //     await app.tutorial.questionTwoAnswer.click();
    //     browser.sleep(91000);
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.submitAnswerButton));
    //     await app.tutorial.submitAnswerButton.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.backToViedeosButton));
    //     await app.tutorial.backToViedeosButton.click();
    //     browser.sleep(5000);
    // })
    it('Verify student gain extra 10 digit point if answered questions correctly', async () => {
        
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
        await app.tutorial.TutorialLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoTitleOne));
        await app.tutorial.videoTitleOne.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.playButton));
        browser.sleep(5000);
        await app.tutorial.playButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoAutoPlay));
        await app.tutorial.videoAutoPlay.click();
        await app.tutorial.videoAutoPlay.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.questionOne));
        await app.tutorial.questionOne.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.questionTwoAnswer));
        await app.tutorial.questionTwoAnswer.click();
        browser.sleep(91000);
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.submitAnswerButton));
        await app.tutorial.submitAnswerButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.backToViedeosButton));
        await app.tutorial.backToViedeosButton.click();
        browser.sleep(5000);
    })

    it('Verify student are provided with two option if answers are incorrect', async () => {
        
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.TutorialLink));
        await app.tutorial.TutorialLink.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.CategoryOne));
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoTitleOne));
        await app.tutorial.videoTitleOne.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.playButton));
        browser.sleep(5000);
        await app.tutorial.playButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.videoAutoPlay));
        await app.tutorial.videoAutoPlay.click();
        await app.tutorial.videoAutoPlay.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.questionOneWrongAnswer));
        await app.tutorial.questionOneWrongAnswer.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.questionTwoWrongAnswer));
        await app.tutorial.questionTwoWrongAnswer.click();
        browser.sleep(91000);
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.submitAnswerButton));
        await app.tutorial.submitAnswerButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.tutorial.backToViedeosButton));
        browser.sleep(5000);
    })
})