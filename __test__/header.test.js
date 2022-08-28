const puppeteer = require("puppeteer");

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: false }); // create a new browser instance
  page = await browser.newPage(); /// creates a new tab
  await page.goto("http://localhost:3000"); // go to the root of our app
});

afterEach(async () => await browser.close());

test("the header has the correct text", async () => {
  const text = await page.$eval("a.brand-logo", (el) => el.innerHTML); // get logo text
  expect(text).toEqual("Blogster");
});

test("clicking login starts oauth flow", async () => {
  await page.click(".right a");
  const url = page.url();
  expect(url).toMatch(/accounts\.google\.com/);
});
