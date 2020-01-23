import { AppPage } from '../app.po';
import { browser, ExpectedConditions, element, by } from 'protractor';
import { async } from '@angular/core/testing';
import { triggerAsyncId } from 'async_hooks';
import { protractor } from 'protractor/built/ptor';

fdescribe('Post Section', () => {
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
        await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.challengePopup)))
        browser.sleep(5000);

        var challengePopup = app.moderation.challengePopup;
        challengePopup.isPresent().then(function(result) {
            if (result) {
                browser.wait(ExpectedConditions.visibilityOf(app.moderation.noCheckbox))
                app.moderation.noCheckbox.click();
                browser.wait(ExpectedConditions.visibilityOf(app.moderation.challengeSumit))
                app.moderation.challengeSumit.click();
            } else {
                (browser.wait(ExpectedConditions.visibilityOf(app.notification.textAreaForPost))); 
                app.notification.textAreaForPost.click();
            }
        })
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

   it('Verify user can post a text on messageboard', async () => {

       await app.notification.textAreaForPost.sendKeys('helloooo from automation');
       await app.moderation.PostButton.click();
       browser.sleep(5000);
       
    });

   it('Verify user can post Banner', async () => {

       await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.BannerTab)));
       await app.moderation.BannerTab.click();
       await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.SelectBanner)));
       await app.moderation.SelectBanner.click();
       await app.moderation.PostButton.click();
       browser.sleep(5000);

    
   });
   
   it('Verify user can post feeling', async () => {

        await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.FeelingTab)));
        await app.moderation.FeelingTab.click();
        await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.happyFeeling)));
        await app.moderation.happyFeeling.click();
        await app.moderation.PostButton.click();
        browser.sleep(5000);

   })

   it('Verify user can post a tag', async () => {

        await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.tagTab)));
        await app.moderation.tagTab.click();
        await(browser.wait(ExpectedConditions.visibilityOf(app.moderation.TagClaire)));
        await app.moderation.TagClaire.click();
        await app.moderation.closeTag.click();
        await app.moderation.PostButton.click();
        browser.sleep(5000);
   })

   it('Verify user can post a gif', async () => {

        await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.gifTab)));
        await app.moderation.gifTab.click();
        await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.gifInput)));
        await app.moderation.gifInput.click();
        await app.moderation.gifInput.sendKeys('cool');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.coolGifSelect)));
        await app.moderation.coolGifSelect.click();
        browser.sleep(5000);
        await app.moderation.PostButton.click();   
        browser.sleep(5000);
     
   })

   var path = require('path');

   it('Verify user can post a picture', async () => {

    var fileToUpload = '../../snn.jpg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    await (browser.wait(ExpectedConditions.visibilityOf(app.moderation.photoTab)));
    await app.moderation.photoTab.click();
    await browser.wait(ExpectedConditions.visibilityOf(app.moderation.photoUpload));
    console.log(absolutePath);
    // Need to unhide flowjs's secret file uploader
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", app.moderation.photoUpload.getWebElement());
    element(by.css('input[type="file"]')).sendKeys(absolutePath);
    browser.sleep(5000);
    await app.moderation.PostButton.click();        
    browser.sleep(5000);
 })
})
