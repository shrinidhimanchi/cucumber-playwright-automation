const playwright = require('playwright')
const envConfiguration = require('../step_definitions/support/envConfiguration')
const envConfig = new envConfiguration()

class hookSteps {

    constructor(){
        this.globalBrowser = {}
        this.globalPage = {}
        this.globalContext = {}
    }

    async setGlobalBrowserAndPage(){
        console.log('Onto method :: setGlobalBrowserAndPage')
        global.browser = await this.createGlobalBrowser()
        global.page = await this.createGlobalPage()
    }

    async createGlobalBrowser(){
        console.log('Launch Browser')
        global.browser = await playwright.chromium.launch({
            args: ['--window-size=2560,1600'],
            channel: 'chrome',
            headless: false,
            slowMo: 2000,
            timeout: 60000
        })
        this.globalBrowser = global.browser
        return this.globalBrowser
    }

    async createGlobalPage(){
        console.log('Onto method :: createGlobalPage')
        global.page = await this.globalBrowser.newPage()
        this.globalPage = global.page
        return this.globalPage
    }

    async createGlobalContext(globalBrowser){
        console.log('Onto method :: createGlobalContext')
        console.log('Current URL is : '+envConfig.getUiHost())
        return await globalBrowser.newContext({
            acceptDownloads: true,
            baseURL: envConfig.getUiHost(),
            viewport: null,
            colorScheme: 'light'
        })
    }

    async setGlobalContextAndPage(){
        console.log('Onto method :: setGlobalContextAndPage')
        global.context = await this.createGlobalContext(global.browser)
        this.globalContext = global.context
        global.page = await this.globalContext.newPage()
        return global.page
    }

    async closeGlobalPageAndContext(){
        console.log('Onto method :: closeGlobalPageAndContext')
        await global.page.close()
        await global.context.close()
    }

    async closeBrowser(){
        await this.globalBrowser.close()
    }

}
module.exports = hookSteps
