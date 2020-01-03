import { by, element, ElementFinder } from 'protractor';

export class StudentReportPage {

    public get settingIcon(): ElementFinder {
        return element(by.xpath("//div[@class='css-1lsy4c']"));
    }

    public get logoutOption(): ElementFinder {
        return element(by.xpath("//li[contains(text(),'Logout')]"));
    }

    public get threedotElispseButton(): ElementFinder {
        return element(by.xpath("//div[@class='css-1jgxnjg']//div//div[1]//div[1]//div[1]//div[1]//div[2]//div[1]//button[1]"));
    }
    public get reportOption(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'Report')]"));
    }
    public get badLanguage(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'Bad language')]"));
    }
    public get reportButton(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Report')]"));
    }
    public get putDownContent(): ElementFinder {
        return element(by.xpath("//label[contains(text(),'Put down or meanness')]"));
    }
}