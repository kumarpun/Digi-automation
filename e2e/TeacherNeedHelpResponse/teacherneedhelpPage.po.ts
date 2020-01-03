import { by, element, ElementFinder } from 'protractor';

export class TeacherNeedHelpResponse {

    public get StudentMessage(): ElementFinder {
        return element(by.xpath("//div[contains (text(), 'Chelsea Lama')]"))
    }

    public get AcceptButton(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Accept')]"));
    }

    public get needHelpCount(): ElementFinder {
        return element(by.xpath("//button[@class='roundedShadow teacher css-1ap70zj']"));
    }

    public get inputAreaForMessage(): ElementFinder {
        return element(by.xpath("//input[@placeholder='Write a message']"));
    }

    public get closeButton(): ElementFinder {
        return element(by.xpath("//button[contains (text(), 'Close')]"));
    }

    public get greyTick(): ElementFinder {
        return element(by.xpath("//button[@class='css-1l6nj7o']"))
    }

    public get cancelHelpRequestpopup(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Cancel')]"));
    }

    public get yesButtonForPopup(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'YES')]"));
    }
}