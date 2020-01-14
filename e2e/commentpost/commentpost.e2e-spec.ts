import { AppPage } from '../app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

describe('Comment section', () => {
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

    it('Verify user can post a text on messageboard', async () => {
        
        await browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost));
        await app.notification.textAreaForPost.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderation.firstBackToChat));
        await app.moderation.firstBackToChat.click();
        await app.notification.textAreaForPost.sendKeys('helloooo from automation');
        await app.moderation.PostButton.click();
        browser.sleep(5000);
        
     });

    it('Verify user can comment on post', async () => {
       
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.clickComment));
        await app.commentpost.clickComment.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.writeComment));
        await app.commentpost.writeComment.click();
        await app.commentpost.writeComment.sendKeys('comment from automation');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(5000);

     });

     it('Verify user can edit post', async () => {
  
         await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.threedotIcon));
         await app.commentpost.threedotIcon.click();
         await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.editText));
         await app.commentpost.editText.click();
         await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.inputTextBox));
         await app.commentpost.inputTextBox.clear();
         await app.commentpost.inputTextBox.sendKeys('Test for edit from automation');
         await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.EditButton));
         await app.commentpost.EditButton.click();
         browser.sleep(5000);

     });

     it('Verify user can cancel the edited post', async () => {
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.threedotIcon));
        await app.commentpost.threedotIcon.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.editText));
        await app.commentpost.editText.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.inputTextBox));
        await app.commentpost.inputTextBox.clear();
        await app.commentpost.inputTextBox.sendKeys('Test for edit from automation');
        await app.commentpost.CancelButton.click();
        browser.sleep(5000);

    });

    it('Verify user can delete comment', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.clickComment));
        await app.commentpost.clickComment.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.writeComment));
        await app.commentpost.writeComment.click();
        await app.commentpost.writeComment.sendKeys('comment from automation');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.deleteIcon));
        await app.commentpost.deleteIcon.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.deleteCommentIcon));
        await app.commentpost.deleteCommentIcon.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.deleteButton));
        await app.commentpost.deleteButton.click();
        browser.sleep(5000);
    })

    it('Verify user can post a text on messageboard', async () => {
        
        await browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost));
        await app.notification.textAreaForPost.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderation.firstBackToChat));
        await app.moderation.firstBackToChat.click();
        await app.notification.textAreaForPost.sendKeys('helloooo from automation');
        await app.moderation.PostButton.click();
        browser.sleep(5000);
    })

    it('Verify user can delete the own post', async () => {

       await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.threedotIcon));
       await app.commentpost.threedotIcon.click();
       await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.deleteIconForPost));
       await app.commentpost.deleteIconForPost.click();
       await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.deleteButton));
       await app.commentpost.deleteButton.click();
    });


    it('Verify user can react on post', async() => {

        await browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost));
        await app.notification.textAreaForPost.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderation.firstBackToChat));
        await app.moderation.firstBackToChat.click();
        await app.notification.textAreaForPost.sendKeys('test');
        await app.moderation.PostButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.likeButton));
        await app.commentpost.likeButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.likePopup));
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.loveReaction));
        await app.commentpost.loveReaction.click();
        browser.sleep(5000);
    })

    it('Verify user can react on comment', async () => {

        await browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost));
        await app.notification.textAreaForPost.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.moderation.firstBackToChat));
        await app.moderation.firstBackToChat.click();
        await app.notification.textAreaForPost.sendKeys('test');
        await app.moderation.PostButton.click();
        browser.sleep(5000);
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.clickComment));
        await app.commentpost.clickComment.click();
        await app.commentpost.clickComment.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.writeComment));
        await app.commentpost.writeComment.click();
        await app.commentpost.writeComment.sendKeys('comment from automation');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.likeForComment));
        await app.commentpost.likeForComment.click();
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.commentReactionPopup));
        await browser.wait(ExpectedConditions.visibilityOf(app.commentpost.smileReaction));
        await app.commentpost.smileReaction.click();
        browser.sleep(5000);
    })

    });
