const LogOut = require("../src/class/logOut");
const LoginPage = require("../src/class/login");
const {createWebDriverChrome} = require("../src/utils/driver");
const { describe } = require("mocha");
const { By, until } = require("selenium-webdriver");
const makeScreenshot = require('../src/utils/makeScreenShot');

describe("Log In and Log Out", async () => {
  console.log('new container');
    // add varibalses for testing
    const URL = 'https://dev-frontend.colorjob.terenbro.com/login';
    const urlForCheck = "https://dev-frontend.colorjob.terenbro.com/system/dashboard"
    // const URL = 'http://localhost:4300/login';
    // const urlForCheck = "http://localhost:4300/system/dashboard"
    const email = "superadmin@gmail.com";
    const password ="colorjob" ;
    let driverChrome = null

  beforeEach(async () => {

    driverChrome = await createWebDriverChrome();

  });

  afterEach(async () => {

      await driverChrome.quit();

  });

  it("Log In and Log Out the Coloradojob in the chrome browser", async () => {
    
      try {

        const loginPageTest = new LoginPage(driverChrome,URL);
        const logOutUserTest = new LogOut(driverChrome);
        await loginPageTest.openLoginForm();
        await loginPageTest.fillEmailInput(email);
        await loginPageTest.fillPasswordInput(password);
        await loginPageTest.checkSaveForFuture();
        await loginPageTest.login(urlForCheck);
        await logOutUserTest.findUserMenu();
        await logOutUserTest.userLogOut(URL)
      } 

      catch (error) {
        // if something wrong make screen in utils/screenshot
        makeScreenshot(driverChrome, 'logout');
          throw error
      
        }
    });

});
