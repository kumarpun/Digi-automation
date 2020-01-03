  
import { by, element, ElementFinder } from 'protractor';

export class ModerationPage {

    public get PostButton(): ElementFinder {
        return element(by.xpath("//button[contains (text(), 'POST')]"));
        
    }
    public get checkBoxForFirstModeration(): ElementFinder {
        return element(by.xpath("//input[@id='CheckBox']"));
    }
    public get backToChatButton(): ElementFinder {
        return element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div[1]/div[2]/div/div/div/div[2]/div/div[2]/div[3]/div[2]/button'));
    }
    public get firstStrike(): ElementFinder {
        return element(by.xpath("//body/div[@id='root']/div/div[@class='css-o2pqu8']/div[@class='css-1ua5vwp']/div[@class='css-1kt1vmt']/div[@class='css-1syh5d8']/div[@class='css-1575f4t']/div[@class='css-10vt4hq']/div[@class='css-5e2h08']['red']/*[1]"));
    }
    public get secondStrike(): ElementFinder {
        return element(by.xpath("//body/div[@id='root']/div/div[@class='css-o2pqu8']/div[@class='css-1ua5vwp']/div[@class='css-1kt1vmt']/div[@class='css-1syh5d8']/div[@class='css-1575f4t']/div[@class='css-10vt4hq']/div[@class='css-5e2h08']['red']/*[2]"))
    }
    public get firstBackToChat(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Back to Chat')]"))
    }
    public get textAreaForMessage(): ElementFinder {
        return element(by.xpath("//textarea[@placeholder='What do you want to say, Chelsea?']"));
    }
    public get textAreaForPost(): ElementFinder {
        return element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div[1]/div/div/div[2]/div/div/textarea'));
    }

    public get photoSpan(): ElementFinder {
        return element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div[2]/div[1]/span[2]'));
    }
    public get BannerTab(): ElementFinder {
        return element(by.xpath("//div[@class='css-yi07ym']//div[2]"));
    }
    public get SelectBanner(): ElementFinder {
        return element(by.xpath("//div[@class='css-13952ex']//span[4]//img[1]"));
    }
    public get FeelingTab(): ElementFinder {
        return element(by.xpath("//div[@class='css-ov1ktg']//div[3]"));
    }
    public get happyFeeling(): ElementFinder {
        return element(by.xpath("//div[@class='css-1vrdtb6']//div[1]"));
    }

    // tag
    public get tagTab(): ElementFinder {
        return element(by.xpath("//span[contains(text(),'TAG')]"));
    }
    public get TagClaire(): ElementFinder {
        return element(by.xpath("//div[@class='css-ezn9md']//span[contains(text(),'Claire')]"));
    }
    public get closeTag(): ElementFinder {
        return element(by.xpath("//ul[contains(@class,'clearfix css-6dyxpg')]"));
    }

    // gif
    public get gifTab(): ElementFinder {
        return element(by.xpath("//div[@class='css-13952ex']//div[6]"));
    }
    public get gifInput(): ElementFinder {
        return element(by.xpath("//input[@placeholder='Search for a GIF...']"));
    }
    public get coolGifSelect(): ElementFinder {
        return element(by.xpath("//div[@class='css-zl546o']//img[1]"));
    }

    // photo
    public get photoTab(): ElementFinder {
        return element(by.xpath("//span[contains (text(), 'PHOTO/VIDEO')]"));
    }
    public get photoUpload(): ElementFinder {
        return element(by.xpath('//*[@id="root"]/div/div/div/div[3]/div/div/div[1]/div/div[1]/div/div[1]/div[2]/div'));
    }
}