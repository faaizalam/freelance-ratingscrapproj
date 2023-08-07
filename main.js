import puppeter from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import {OpenWebsite, datainfo } from './UseFunction.js';
import { delyTime } from './Delay.js';
puppeter.use(StealthPlugin())
const url = "https://www.solawave.co/collections/skincare-devices-1/products/radiant-renewal-skincare-wand-with-red-light-therapy"
const puppeterdiplay = (async () => {
    const browser = await puppeter.launch({
      headless: false,
      defaultViewpageort: null,
      args: ["--start-maximized"],
      executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe",
      userDataDir:"C:/Users/Lenovo/AppData/Local/Google/Chrome/User Data/Profile 4"
      
    })
    let page = await browser.newPage();
    await page.setViewport({
      width: 1300,
      height: 700,
      
    });
    await delyTime(3000)
    console.log("2 min compeleted");
    await OpenWebsite(url, page)
    console.log(datainfo);

  })
  puppeterdiplay()