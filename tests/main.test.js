const puppeteer = require('puppeteer');

let browser;
let page;
let firstUrl;
let newUrl; 

async function start(urlTOenter) {
   browser = await puppeteer.launch({headless: false, slowMo: 10});
   page = await browser.newPage();
   await page.goto('http://localhost:3000/');
   await page.type('#url_input', urlTOenter);
   await page.waitForTimeout(10);
   await page.click('#submit-url');
   await page.waitForTimeout(10);
   page.on('dialog', async dialog => {
      await dialog.dismiss();
   });
   newUrl = await page.evaluate(async () => {
      try{
         return document.querySelector('body > main > div').textContent;
      } catch(error) {
         return newUrl = null;
      }
   })
   await browser.close()
}

let pageUrl;
let customEnding;
async function redirect() {
   browser = await puppeteer.launch({headless: false, slowMo: 10});
   page = await browser.newPage();
   await page.goto('http://localhost:3000/');
   await Promise.all([page.click('body > nav > ul > li:nth-child(3)'),  page.waitForNavigation()]);
   await page.waitForTimeout(10);
   pageUrl = await page.url();
   await page.type('#root > div > form > input[type=text]:nth-child(2)', 'https://www.youtube.com/watch?v=Oe421EPjeBE');
   await page.type('#root > div > form > input[type=text]:nth-child(3)', 'custom');
   await page.click('#root > div > form > button');
   await page.waitForTimeout(10);
   customEnding = await page.evaluate(async () => {
      try{
         return document.querySelector('body > main > div.newUrl-display-div').textContent;
      } catch(error) {
         return newUrl = null;
      }
   })
   await browser.close()
}


afterEach(async () => {
   await browser.close();
 })


test('entering a invalid url should resault in an alert', async () => {
   await start('invalid url');
   expect(newUrl).toBe(null);
});

test('entering a valid url should rsault in getting a shorten url', async() => {
   await start('https://www.sport5.co.il/liga.aspx?FolderID=397');
   firstUrl = newUrl;
   expect(Boolean(newUrl)).toBe(true);
});

test('entering the same url should resault in the same shortened url', async() => {
   await start('https://www.sport5.co.il/liga.aspx?FolderID=397');
   expect(newUrl).toBe(firstUrl);
})

test('pressing on the nav bar links should redirect to a new page', async() => {
    await redirect();
    expect(pageUrl).toBe('http://localhost:3000/satistics');
    expect(customEnding).toBe('http://localhost:3000/arniurl/custom');
})

