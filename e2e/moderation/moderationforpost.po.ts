import { by, element, ElementFinder } from 'protractor';

export class ModerationForPostPage {

    public get BackToChatButton(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Back to Chat')]"));
    }
    public get CheckBox(): ElementFinder {
        return element(by.xpath("//input[@id='CheckBox']"));
    }
    public get watchTutorial(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Watch Tutorial')]"));
    }
    public get firstQuestionAnswer(): ElementFinder {
        return element(by.xpath("//div[@class='slick-slide slick-active slick-current']//div//div//div//div[@class='css-4zdmq7'][contains(text(),'Yes')]"));
    }
    public get AnswerNo(): ElementFinder {
        return element(by.xpath("//div[@class='slick-slide slick-active slick-current']//div//div//div//div[@class='css-4zdmq7'][contains(text(),'No')]"));
    }
    public get CheckAnswer(): ElementFinder {
        return element(by.xpath("//button[@class='rounded short css-p224jt']"));
    }
    public get OKButton(): ElementFinder {
        return element(by.xpath("//button[@class='short css-p224jt']"));
    }
    public get playVideo(): ElementFinder {
        return element(by.xpath("//div[@class='css-13s5mcc']//div//div//video"));
    }
    public get NextButton(): ElementFinder {
        return element(by.xpath("//button[@class='nextButton']"));
    }

    // update
    public get editButton(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Edit')]"));
    }
    public get editTextArea(): ElementFinder {
        return element(by.xpath("//textarea[@class='css-j24j4g']"));
    }
    public get updateButton(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Update')]"));
    }

}
