import { by, element, ElementFinder } from 'protractor';

export class CommentPostPage {

    public get Recentpost(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'mic check')]"));
    }
    // comment on post
    public get clickComment(): ElementFinder {
        return element(by.xpath("//body//div[@class='css-1jgxnjg']//div//div[1]//div[1]//div[2]//div[2]//span[1]//div[1]//span[1]//span[1]"));
    }
    public get writeComment(): ElementFinder {
        return element(by.xpath("//input[@placeholder='Write a comment']"));
    }

    // edit on post
    public get threedotIcon(): ElementFinder {
        return element(by.xpath("//div[@class='css-1jgxnjg']//div//div[1]//div[1]//div[1]//div[1]//div[2]//div[1]//button[1]"));
    }
    public get editText(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'Edit')]"));
    }
    public get inputTextBox(): ElementFinder {
        return element(by.xpath("//textarea[contains(text(),'helloooo from automation')]"));
    }
    public get EditButton(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Edit')]"));
    }

    // cancel edit
    public get CancelButton(): ElementFinder {
        return element(by.xpath("//button[contains(text(),'Cancel')]"));
    }
    // delete comment
    public get deleteCommentText(): ElementFinder {
        return element(by.xpath("//span[contains(text(),'delete comment')]"));
    }
    public get deleteIcon(): ElementFinder {
        return element(by.xpath("//div[5]//div[2]//div[1]//div[1]//div[1]//div[2]//div[1]//div[1]//button[1]"));
    }
    public get deleteCommentIcon(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'Delete')]"));
    }
    public get deleteButton(): ElementFinder {
        return element(by.xpath("//button[contains(text(), 'Delete')]"));
    }
    public get textPostForDelete(): ElementFinder {
        return element(by.xpath("//div[@class='css-o2pqu8']//div[2]//div[1]//div[1]//div[1]//div[2]//div[1]//div[1]"));
    }
    public get TestForDeletePost(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'test for delete')]"));
    }
    public get writeCommentDelete(): ElementFinder {
        return element(by.xpath("//input[@placeholder='Write a comment']"));
    }
    public get commentSpan(): ElementFinder {
        return element(by.xpath("//div[@class='css-b9jx31']//div//div[1]//div[2]//div[1]//div[2]//div[2]//span[2]"));
    }

    // reaction
    public get likeButton(): ElementFinder {
        return element(by.xpath('//*[@id="root"]/div/div[3]/div[2]/div/div/div[1]/div/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/span/span'));
    }
    public get likePopup(): ElementFinder {
        return element(by.xpath("//div[@class='css-1ujdyi1']"));
    }
    public get loveReaction(): ElementFinder {
        return element(by.xpath("//div[@class='css-le3mno']//div[3]"));
    }

    // delete post
    public get deleteIconForPost(): ElementFinder {
        return element(by.xpath("//div[contains(text(),'Delete')]"));
    }
    public get deleteButtonForPost(): ElementFinder {
        return element(by.xpath("//button[@class='rounded short css-qch4x7']"));
    }

    // reaction on comment
    public get likeForComment(): ElementFinder {
        return element(by.xpath("//body//div[contains(@class,'css-1jgxnjg')]//div//div[1]//div[2]//div[1]//div[1]//div[1]//div[1]//span[4]//div[1]//div[1]"));
    }
    public get commentReactionPopup(): ElementFinder {
        return element(by.xpath("//div[@class='css-xeuqdv']"));
    }
    public get smileReaction(): ElementFinder {
        return element(by.xpath("//div[@class='css-1ujdyi1']//div[1]"));
    }

    // click outside
    public get clickOutside(): ElementFinder {
        return element(by.xpath("//img[@class='css-c9shju']"));
    }

    public get logo(): ElementFinder {
        return element(by.xpath("//img[@class='css-c9shju']"));
    }
}