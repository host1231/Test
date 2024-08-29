const puppeteer = require('puppeteer');

async function main() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();

    await page.goto('https://tap.az');


    await new Promise((resolve, reject) => setTimeout(resolve, 3000))

    await browser.close();
}

main().catch(error => console.error(error));