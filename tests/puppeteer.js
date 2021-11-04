const puppeteer = require('puppeteer');

async function start() {
   const browser = await puppeteer.launch({headless: false, slowMo: 30});
   const page = await browser.newPage();
   await page.goto('http://localhost:3000/');
   await page.type('#url_input', 'hello this is puppeteer');
   await page.click('#submit-url');
   await browser.close();
}

start();