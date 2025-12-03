const { Builder, By } = require("selenium-webdriver");

async function testRegistration() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("C:/Users/SRI SHIKA.L/Desktop/593/DevOps_Exam/HTML_pages/Registration.html");
        await driver.findElement(By.id("name")).sendKeys("TestUser");
        await driver.findElement(By.id("pass")).sendKeys("mypassword");
        await driver.findElement(By.css("button")).click();
        await driver.sleep(2000);

    } finally {
        await driver.quit();
    }
}

testRegistration();
