import { AppPage } from '../app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';
import { async } from '@angular/core/testing';
import { first } from 'rxjs/operators';

fdescribe('Student Profile section', () => {
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

    it('Verify student can go to their own profile', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
    })

    it('Verify student can edit their profile', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.EditProfile));
        await app.studentProfile.EditProfile.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.textAreaForEdit));
        await app.studentProfile.textAreaForEdit.clear();
        await app.studentProfile.textAreaForEdit.sendKeys('Hello this is test for edit profile section');
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.saveButton));
        await app.studentProfile.saveButton.click();
        browser.sleep(5000); 
    })

    it('Verify student can see post details from pop up', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.clickForPopUp));
        await app.studentProfile.clickForPopUp.click();
        browser.sleep(5000);
    })

    it('Verify student can see list of all friends', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
        browser.sleep(5000);
        browser.actions().mouseMove(app.studentProfile.LeaderBoardICon).perform();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.friendListIcon));
        await app.studentProfile.friendListIcon.click();
        browser.sleep(5000);
    })

   it('Verify student can go to tutorial section from profile', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.GotoTutorialSection));
        await app.studentProfile.GotoTutorialSection.click();
        browser.sleep(5000);

    })

    it('Verify student can see leaderboards', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
        browser.sleep(5000);
        browser.actions().mouseMove(app.studentProfile.LeaderBoardICon).perform();
        browser.sleep(5000);
        
    })

    // it('Verify student can visit their avatar page', async () => {

    //     await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
    //     await app.studentProfile.ProfileImage.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.AvatarIconProfile));
    //     await app.studentProfile.AvatarIconProfile.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.MouthButton));
    //     await app.studentProfile.MouthButton.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.concernedMouth));
    //     await app.studentProfile.concernedMouth.click();
    //     await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.DefaultMouth));
    //     await app.studentProfile.DefaultMouth.click();
    //     browser.sleep(5000);
    // })

    it('Verify studnts can see friends profile', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
        browser.sleep(5000);
        browser.actions().mouseMove(app.studentProfile.LeaderBoardICon).perform();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.TimProfile));
        await app.studentProfile.TimProfile.click();
        browser.sleep(5000);
    })

    it('Verify user can comment from the pop up', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.clickForPopUp));
        await app.studentProfile.clickForPopUp.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.writeComment));
        await app.studentProfile.writeComment.click();
        await app.studentProfile.writeComment.sendKeys('Test');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(5000);

    })

    it('Verify user can react post from pop up', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.clickForPopUp));
        await app.studentProfile.clickForPopUp.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.LikeButton));
        await app.studentProfile.LikeButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.LoveReact));
        await app.studentProfile.LoveReact.click();
        browser.sleep(5000);
    })

    it('Verify user can react comment from pop up', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.ProfileImage));
        await app.studentProfile.ProfileImage.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.clickForPopUp));
        await app.studentProfile.clickForPopUp.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.likecomment));
        await app.studentProfile.likecomment.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.studentProfile.smileReact));
        await app.studentProfile.smileReact.click();
        browser.sleep(5000);
    })
})