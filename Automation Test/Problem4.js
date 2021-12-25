const puppy = require('puppeteer');
let videoLink = 'https://www.youtube.com/watch?v=zZ3i35msNNg&t=4s'
async function downloadVid() {
    let browser = await puppy.launch({
        headless: false,
        defaultViewport: false
    })
    let tabs = await browser.pages();
    let tab = tabs[0];
    await tab.goto(videoLink.substring(0, 12) + 'ss' + videoLink.substring(12, videoLink.length));
    await tab.waitForSelector('.link.link-download.subname.ga_track_events.download-icon');
    await tab.click('.link.link-download.subname.ga_track_events.download-icon');

}
downloadVid();
