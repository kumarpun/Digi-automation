import { by, element, ElementFinder } from 'protractor';

export class NeedHelpRequestPage {

public get NeedHelpButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'Need Help')]"));
}
public get InsideSchoolButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'Inside School')]"));
}
public get ForMeButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'For Me')]"));
}
public get RighNowButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'Right Now')]"));
}
public get BackToChatButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'Back to Chat')]"));
}

// soon
public get SoonButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'Soon')]"));
}
public get TeacherCheckBox(): ElementFinder {
    return element(by.xpath("//div[contains(@class,'css-235pno')]//div[1]//input[1]"));
}
public get Reason(): ElementFinder {
    return element(by.xpath("//li[contains(text(),'being asked for inappropriate images')]//input"));
}
public get sendHelpRequestButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(), 'Send Help Request')]"));
}

// Someone Else
public get SomeOneElseButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'Someone Else')]"));
}
public get studentPlaceholder(): ElementFinder {
    return element(by.xpath("//div[contains(@class,'ant-select-selection__placeholder')]"));
}
public get selectStudent(): ElementFinder {
    return element(by.xpath("//li[contains(text(),'Tim Orange')]"));
}
public get teacherSelect(): ElementFinder {
    return element(by.xpath("//div[contains(@class,'css-235pno')]//div//div[2]//input[1]"));
}

// outside school
public get outSideSchoolButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'Outside School')]"));
}
public get eSafetyCommissionerButton(): ElementFinder {
    return element(by.xpath("//button[contains(text(),'eSafety Commissioner')]"));
}
public get kidsHelplineButton():ElementFinder {
    return element(by.xpath("//button[contains(text(),'eSafety Commissioner')]"));
}
}