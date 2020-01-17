import { by, element, ElementFinder } from 'protractor';
import { ReadLine } from 'readline';

export class StudentProfilePage {

public get ProfileImage(): ElementFinder {
    return element(by.xpath("//div[@class='css-1h5x3dy']"));
}

public get EditProfile(): ElementFinder {
    return element(by.xpath("//div[contains(text(),'Edit Profile')]"));
}
public get textAreaForEdit(): ElementFinder {
    return element(by.xpath("//textarea[@class='scrollableDiv css-opmsns']"));
}
public get saveButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'Save')]"));
}
public get clickForPopUp(): ElementFinder {
    return element(by.xpath("//div[@class='invisibleScrollableDiv false css-j0by1q']//div[1]//div[1]//div[2]//div[2]//span[1]//div[1]"));
}

public get friendListIcon(): ElementFinder {
    return element(by.xpath("//div[@class='css-3jje4d']//div[@class='clearfix css-16hw5m6']//div[@class='css-2d6kk5']"));
}

public get GotoTutorialSection(): ElementFinder {
    return element(by.xpath("//div[@class='noShadow css-3jje4d']//div[@class='css-2d6kk5']"));
}

public get LeaderBoardICon(): ElementFinder {
    return element(by.xpath("//div[contains(text(),'year')]"));
}

public get AvatarIconProfile(): ElementFinder {
    return element(by.xpath("//body/div[@id='root']/div/div[@class='scrollableDiv css-1d09mqm']/div[@class='css-yfmfo2']/div[@class='css-1t5u7ok']/div/div[@class='css-11mnlc7']/div[@class='css-khlg5y']/div[@class='clearfix css-1phwc50']/div[@class='css-2dmy2k']/span/*[1]"));
}
public get MouthButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'Mouth')]"));
}
public get concernedMouth(): ElementFinder {
    return element(by.xpath("//body/div[@id='root']/div/div[@class='scrollableDiv css-1d09mqm']/div[@class='css-yfmfo2']/div[@class='css-1t5u7ok']/div/div[@class='css-0']/div[@class='css-1xygo7x']/div/div[@class='slick-slider slider slick-initialized']/div[@class='slick-list']/div[@class='slick-track']/div[@class='slick-slide slick-active slick-current']/div/div[contains(text(),'Concerned')]/div[@class='css-fjvqat']/*[1]"));
}
public get DefaultMouth(): ElementFinder {
    return element(by.xpath("//body/div[@id='root']/div/div[@class='scrollableDiv css-1d09mqm']/div[@class='css-yfmfo2']/div[@class='css-1t5u7ok']/div/div[@class='css-0']/div[@class='css-1xygo7x']/div/div[@class='slick-slider slider slick-initialized']/div[@class='slick-list']/div[@class='slick-track']/div[@class='slick-slide slick-active']/div/div[contains(text(),'Default')]/div[@class='css-fjvqat']/*[1]"));
}
public get TimProfile(): ElementFinder {
    return element(by.xpath("//div[@class='css-1xbe4yp']//div[4]"));
}

public get writeComment(): ElementFinder {
    return element(by.xpath('//*[@id="root"]/div/div[3]/div/div/div/div[3]/div[1]/div[1]/div[2]/div/div/div/div/div[2]/div/div/div[2]/div[1]/input'));
}
public get LikeButton(): ElementFinder {
    return element(by.xpath("//div[contains(@class,'0 css-ufza8x')]//div[contains(@class,'css-1cerdqh')]//span//span[contains(text(),'Like')]"));
}
public get LoveReact(): ElementFinder {
    return element(by.xpath("//div[contains(@class,'css-9fcy2h')]//div[3]"));
}

public get likecomment(): ElementFinder {
    return element(by.xpath("//div[contains(@class,'0 css-1fbk6sb')]//div[contains(@class,'0 0 css-puxvef')]//div//span[contains(@class,'css-1085oq2')]//div[contains(@class,'css-1pbmmi3')]//div[contains(@class,'css-1cerdqh')]//span//span[contains(text(),'Like')]"));
}
public get smileReact(): ElementFinder {
    return element(by.xpath("//div[contains(@class,'css-1ujdyi1')]//div[1]"));
}
}