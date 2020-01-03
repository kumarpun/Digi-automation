import { AppPage } from '../app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { async } from '@angular/core/testing';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

describe('Moderation for post', () => {
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
        await app.notification.textAreaForPost.click();
    
        var backToChatButton = app.moderation.firstBackToChat;
        backToChatButton.isPresent().then(function(result) {
        if (result) {
            backToChatButton.click();
            (browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost)));
            app.notification.textAreaForPost.click();
        } else {
            (browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost))); 
            app.notification.textAreaForPost.click();
           }
        }); 
    })

    it('Verify first moderated text can be caught', async () => {
       
       await app.notification.textAreaForPost.sendKeys('shit');
       await app.moderation.PostButton.click();
       await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.CheckBox));
       await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.BackToChatButton));
       await app.moderationpost.CheckBox.click();
       await app.moderationpost.BackToChatButton.click();
       
    });

    it('Verify second moderated text can be caught', async () => {
       
        await app.notification.textAreaForPost.sendKeys('shit');
        await app.moderation.PostButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.CheckBox));
        await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.BackToChatButton));
        await app.moderationpost.CheckBox.click();
        await app.moderationpost.BackToChatButton.click();
        
     });

     it('Verify third moderation force user to watch video', async () => {
       
        await app.notification.textAreaForPost.sendKeys('shit');
        await app.moderation.PostButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.watchTutorial));
        await app.moderationpost.watchTutorial.click();
        // await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.playVideo));
        // await app.moderationpost.playVideo.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.firstQuestionAnswer));
        await app.moderationpost.firstQuestionAnswer.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.NextButton));
        await app.moderationpost.NextButton.click();
      //   await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.firstQuestionAnswer));
      //   await app.moderationpost.firstQuestionAnswer.click();
      //   await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.NextButton));
      //   await app.moderationpost.NextButton.click();
      //   await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.AnswerNo));
      //   await app.moderationpost.AnswerNo.click();
      //   await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.CheckAnswer));
      //   await app.moderationpost.CheckAnswer.click();
      //   await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.OKButton));
      //   await app.moderationpost.OKButton.click();
      //   browser.sleep(5000);
        
     });

     it('Verify moderated text can be updated', async () => {
       
        await app.notification.textAreaForPost.sendKeys('shit');
        await app.moderation.PostButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.editButton));
        await app.moderationpost.editButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.editTextArea));
        await app.moderationpost.editTextArea.clear();
        await app.moderationpost.editTextArea.sendKeys('updated post after moderation');
        await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.updateButton));
        await app.moderationpost.updateButton.click();
     });

     it('Verify moderation on comment can be caught', async () => {

      await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.clickComment));
      await app.commentpost.clickComment.click();
      await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.writeComment));
      await app.commentpost.writeComment.click();
      await app.commentpost.writeComment.sendKeys('shit');
      browser.actions().sendKeys(protractor.Key.ENTER).perform();
      await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.CheckBox));
      await browser.wait(ExpectedConditions.visibilityOf(app.moderationpost.BackToChatButton));
      await app.moderationpost.CheckBox.click();
      await app.moderationpost.BackToChatButton.click();
     });
})