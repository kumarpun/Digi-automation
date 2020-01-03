import {browser, by, element, ElementFinder, ExpectedConditions} from 'protractor';

export class LoginPage {
  public loginUrlPath = '';
  public schoolInput = () => element(by.xpath("//i[@class='anticon anticon-down ant-select-arrow-icon']"));
  public emailInput = () => element(by.xpath("//input[@placeholder='Username']"));
  public passwordInput = () => element(by.xpath("//input[@placeholder='Password']"));
  public loginButton = () => element(by.xpath("//button[contains(text(),'LOG IN')]"));
public log = () => element(by.xpath('//*[@id="root"]/div'));

  public async navigateTo(): Promise<any> {

    await browser.waitForAngularEnabled(false);
    return browser.get('https://staging.digiisocial.com/student/login');
  }

  // public async getEmailText(): Promise<any> {
  //   return this.emailInput().getText();
  // }
  public async setSchool(): Promise<any> {
    const schoolInput = this.schoolInput();
    await schoolInput.click();
  }

  public async setEmailText(text: string): Promise<any> {
    const emailInput = this.emailInput();
    await emailInput.clear();
    await emailInput.sendKeys(text);
  }

  // public async getPasswordText(): Promise<any> {
  //   return this.passwordInput().getText();
  // }

  public async setPasswordText(text: string): Promise<any> {
    const passwordInput = this.passwordInput();
    await passwordInput.click();
    await passwordInput.clear();
    await passwordInput.sendKeys(text);
  }

  public async clickLoginBtn(): Promise<any> {
    await this.loginButton().click();
  }

  public get SchoolOption(): ElementFinder {
    return element(by.xpath("//i[@class='anticon anticon-down ant-select-arrow-icon']"));
  }
  public get Yunderup(): ElementFinder {
    return element(by.xpath("//li[@class='ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active']"));
  }
}
