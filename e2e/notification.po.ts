import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor'
import { rendererTypeName } from '@angular/compiler';

export class Notification {
  public wrongStudentsMessage = 'Error:Student not found';
  public wrongLoginInformation = 'Error:Looks like you have entered the wrong login information. Please try again.';

  
  // Elements

  public get notificationElement(): ElementFinder {
    return element(by.xpath("//p[contains(text(),'Student not found')]"));
  }
  public get NotificationElementForWrongPassword(): ElementFinder {
    return element(by.xpath("//p[contains(text(),'Looks like you have entered the wrong login inform')]"));
  }

  public get textAreaForPost(): ElementFinder {
    return element(by.xpath("//textarea[@placeholder='What do you want to say, Chelsea?']"));
  }

  // Actions

  public async waitForNotificationExistence(): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(this.notificationElement));
  }
 

  public async getNotificationMessage(): Promise<any> {
    return this.notificationElement.getText();
  }
 
  public async waitForNotificationExistenceForWrongPassword(): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(this.NotificationElementForWrongPassword));
  }
  public async getNotificationForWrongPassword(): Promise<any> {
    return this.NotificationElementForWrongPassword.getText();
  }
}
