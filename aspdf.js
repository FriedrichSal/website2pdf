// Imports
const puppeteer = require('puppeteer');

const selector_to_wait_for = '*'

// Main function for generating pdf using puppeteer
function url2pdf(url, filename) {
  puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']}).then(async browser => {

    const page = await browser.newPage();
    try {
      await page.goto(url, {waitUntil: 'networkidle2'});
    } catch (err) {
      console.log('url2pdf says: could not go to url: ' + url)
      console.error(err)
      return
    }

  
    page
    .waitForSelector(selector_to_wait_for, {
      visible: true,
      timeout: 60000,

    })
    .then(
      () => {
        console.log('selector is visible -> send to renderer')
        setTimeout(async () => {
          await page.pdf({path: filename, format: 'A4'});
          await browser.close();
          console.log('DONE')

        }, 5000)

      }      
    ).catch(

      () => {
        console.log('selector is not visible -> send to renderer anyway')
        setTimeout(async () => {
          await page.pdf({path: filename, format: 'A4'});
          await browser.close();
          console.log('DONE')

        }, 5000)

      }      
    );

  
  });  
}

module.exports = url2pdf