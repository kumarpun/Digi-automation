import { by, element, ElementFinder } from 'protractor';

export class TutorialPage {

    public get TutorialLink(): ElementFinder {
        return element(by.xpath("//span[contains(text(),'Tutorials')]"));
    }
    public get CategoryOne(): ElementFinder {
        return element(by.xpath("//span[contains(text(),'Educational Video Category One')]"));
    }
    public get viewAllTab(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'View All')]"));
    }

    // video title
    public get videoTitleOne(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'Video Titile Two')]"));
    }
    public get playButton(): ElementFinder {
        return element(by.xpath("//div[@class='css-czhq83']"));
    }
    public get inputButtonForAnswer1(): ElementFinder {
        return element(by.xpath('//*[@id="root"]/div/div/div/div[2]/div/div[2]/div/div[1]/div[2]/span[4]/input'));
    }
    public get videoAutoPlay(): ElementFinder {
        return element(by.xpath("//div[@class='css-mkgb2k']//video"));
    }
    public get questionOne(): ElementFinder {
        return element(by.xpath("//div[@class='css-8m5ric']//div[2]//span[4]//input[1]"));
    }
    public get questionTwoAnswer(): ElementFinder {
        return element(by.xpath("//div[@class='css-yfmfo2']//div[3]//span[4]//input[1]"));
    }
    public get questionOneWrongAnswer(): ElementFinder {
        return element(by.xpath("//div[@class='css-8m5ric']//div[2]//span[3]//input[1]"));
    }
    public get questionTwoWrongAnswer(): ElementFinder {
        return element(by.xpath("//div[@class='css-yfmfo2']//div[3]//span[3]//input[1]"))
    }
    public get submitAnswerButton(): ElementFinder {
        return element(by.xpath("//button[contains(text(), 'Submit Answer')]"));
    }
    public get backToViedeosButton(): ElementFinder {
        return element(by.xpath("//button[text()='Back to Videos']"));
    }
    public get digiLogo(): ElementFinder {
        return element(by.xpath("//img[@class='css-c9shju']"));
    }

    public get serachBar(): ElementFinder {
        return element(by.xpath("//input[@placeholder='Search']"));
    }
    public get videoTitleTwo(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'Video Titile Two')]"));
    }
    public get searchIcon(): ElementFinder {
        return element(by.xpath("//div[@class='css-3xtl6g']//span"));
    }
}