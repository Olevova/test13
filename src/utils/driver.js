const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

// Function to create the WebDriver for Chrome
async function createWebDriverChrome() {
    const options = new chrome.Options();
    options.addArguments("--incognito");
    options.addArguments('--start-maximized');
    options.addArguments("--private");

    const driver = await new Builder()
        .forBrowser("chrome")
        .usingServer("http://selenium-hub:4444/wd/hub")
        .setChromeOptions(options)
        .build();

    return driver;
}

// Function to create the WebDriver for Firefox
async function createWebDriverFirefox() {
    const options = new firefox.Options();
    options.addArguments("--private");

    const driver = await new Builder()
        .forBrowser("firefox")
        .usingServer("http://selenium-container:4444/wd/hub") // Use the same Selenium Grid URL
        .setFirefoxOptions(options)
        .build();

    return driver;
}

module.exports = { createWebDriverChrome, createWebDriverFirefox };
