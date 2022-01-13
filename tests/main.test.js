const puppeteer = require("puppeteer");

const baseUrl = "http://localhost:3000/";

// let browser;
// let page;
// let firstUrl;
// let newUrl;

const newUrl = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(baseUrl);
  await page.type("#url_input", url);
  await page.click("#submit-url");
  await page.waitForTimeout(1500);
  const newUrl = await page.evaluate(() => {
    return document.querySelector(".newUrl-display-div").textContent;
  });
  browser.close();
  return newUrl;
};

const mockData = async (url, querySelector) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url);

  const data = await page.evaluate((Selector) => {
    return document.querySelector(Selector).textContent;
  }, querySelector);
  await browser.close();
  return data;
};

describe("entering the google adress", () => {
  test("should return a shortened url that leades to the goole website", async () => {
    expect(
      await mockData(
        await newUrl("https://en.wikipedia.org/wiki/Java"),
        "#firstHeading"
      )
    ).toBe("Java");
  }, 8000);
});
