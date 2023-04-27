const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  try {
    await page.goto('https://api.example.com');
  await page.setViewport({
    width:1200,
    height:800,
  })
  await page.click('#myBookingBody');
  const url1 = page.url();
  if (url1.match(/\/about$/)) {
   console.log('TESTCASE:test_case8:success');
  } else {
    console.log('TESTCASE:test_case8:failure');
  }
  }
  catch (e) {
    console.log('TESTCASE:test_case8:failure');
  }

  const page1 = await browser.newPage();
  try {
    await page1.goto('https://api.example.com');
          await page1.setViewport({
            width:1200,
            height:800,
          })
          await page1.click('#contact');
          const url3 = page1.url();
          if (url3.match(/\/contact$/)) {
            console.log('TESTCASE:test_case9:success');
          } else {
            console.error('TESTCASE:test_case9:failure');
          }
  }
  catch (e) {
    console.log('TESTCASE:test_case9:failure');
  }

  const page2 = await browser.newPage();
  try {
    await page2.goto('https://api.example.com');
  await page2.setViewport({
    width:1200,
    height:800,
  })
  await page2.click('#home');
  const url3 = page2.url();
  if (url3.match(/\/$/)) {
    console.log('TESTCASE:test_case10:success');
  } else {
    console.error('TESTCASE:test_case10:failure');
  }
  }
  catch (e) {
    console.log('TESTCASE:test_case10:failure');
  }

   finally {
    await page.close();
    await page1.close();
    await page2.close();

    await browser.close();
  }
})();