import { LoginPage } from './Login/loginPage.po';
import { Notification } from './notification.po';
import { browser, ExpectedConditions } from 'protractor';
import { ModerationPage } from './messageboard/moderation.po';
import { CommentPostPage } from './commentpost/commentpost.po';
import { ModerationForPostPage } from './moderation/moderationforpost.po';
import { NeedHelpRequestPage } from './NeedHelpRequest/needhelprequest.po';
import { TutorialPage } from './tutorial/tutorial.po';
import { TeacherLoginPage } from './TeacherLogin/teacherloginPage.po';
import { TeacherNeedHelpResponse } from './TeacherNeedHelpResponse/teacherneedhelpPage.po';
import { StudentReportPage } from './studentreport/studentreport.po';

export interface AutomationUser {
  email: string;
  username?: string;
  password: string;
}

export interface AutomationUserForTeacher {
  email: string;
  password: string;
}

export class AppPage {
  public users: AutomationUser[] = [
    { email: 'chelsea', password: 'test' },
  ];

  public teacherusers: AutomationUserForTeacher[] = [
    {
      email: 'anita@tekkon.io', password: 'test'
    },
  ];

  public login = new LoginPage();
  public notification = new Notification();
  public moderation = new ModerationPage();
  public commentpost = new CommentPostPage();
  public moderationpost = new ModerationForPostPage();
  public needhelprequest = new NeedHelpRequestPage();
  public tutorial = new TutorialPage();
  public studentReport = new StudentReportPage();

  // teacher

  public teacherlogin = new TeacherLoginPage();
  public teacherHelpResponse = new TeacherNeedHelpResponse();

  // student login

  public validLogin(usernameText, passwordText) {
    browser.wait(ExpectedConditions.visibilityOf(this.login.emailInput()), 10000);
    this.login.setEmailText(usernameText);
    browser.wait(ExpectedConditions.visibilityOf(this.login.passwordInput()), 10000);
    this.login.setPasswordText(passwordText);
    browser.wait(ExpectedConditions.visibilityOf(this.login.loginButton()), 10000);
    this.login.clickLoginBtn();
  }

  // Teacher login
  public validLoginForTeacher(usernameText, passwordText) {
    browser.wait(ExpectedConditions.visibilityOf(this.teacherlogin.emailInput()), 10000);
    this.teacherlogin.setEmailText(usernameText);
    browser.wait(ExpectedConditions.visibilityOf(this.teacherlogin.passwordInput()), 10000);
    this.teacherlogin.setPasswordText(passwordText);
    browser.wait(ExpectedConditions.visibilityOf(this.teacherlogin.loginButton()), 10000);
    this.teacherlogin.clickLoginBtn();
  }

}
