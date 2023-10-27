const { By, until } = require("selenium-webdriver");


class LogOut {

  constructor(driver) {
    this.driver = driver;
  };

  async findUserMenu(){
    await this.driver.sleep(1000);
    const profileMenu = this.driver.findElement(By.id('profileUserBtn'))
    await profileMenu.click();
    await this.driver.sleep(1000);
  };

  async userLogOut(urlLogin){
    const logOutBtn = this.driver.findElement(By.id('btnLogout'));
    await logOutBtn.click();
    await this.driver.sleep(1000);
    await this.driver.wait(until.urlIs(urlLogin));
  };


};

module.exports = LogOut;
