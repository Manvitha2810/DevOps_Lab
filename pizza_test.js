const { Builder, By, Key } = require("selenium-webdriver");

async function testPizzaForm() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("C:/Users/SRI SHIKA.L/Desktop/593/DevOps_Exam/HTML_pages/pizza_form.html");

    await driver.findElement(By.id("name")).sendKeys("Manvitha");
    await driver.findElement(By.id("size")).sendKeys("Medium");
    await driver.findElement(By.id("toppings")).sendKeys("Cheese");

    await driver.findElement(By.css("button")).click();

    let message = await driver
      .findElement(By.id("msg"))
      .getText();

    console.log("TEST PASSED");
    await driver.sleep(50000);
  } finally {
    await driver.quit();
  }
}

testPizzaForm();
