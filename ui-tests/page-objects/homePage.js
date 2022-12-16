const customLocators = require('../models/customLocators')
const customValidators = require('../models/customValidators')

class homePage{
    constructor(attach, log, parameters){
        this.attach = attach, 
        this.log = log, 
        this.parameters = parameters,
        this.currentUrl = ''
        this.customLocators = new customLocators(this.attach, this.log, this.parameters)
        this.customValidators = new customValidators(this.attach, this.log, this.parameters)
    }

    async navigateToHomePageAndValidate(page){
        await page.goto('/')
        this.validateHomePage(page)
    }

    validateHomePage(page){
        this.currentUrl = page.url()
        this.attach(`URL Retrieved from Browser is : ${this.currentUrl}`)
        this.customValidators.validateWebElementToContainText(this.currentUrl, 'ebay.com.au')
    }

    async clickWebElementSignIn(page){
        const webElement = await this.customLocators.getWebElementByRole(page, 'link', 'Sign in')
        await webElement.click()
    }

    async inputTextOnSearchField(page,input){
        const webElement = await this.customLocators.getWebElementByPlaceholder(page, 'Search for anything')
        await this.customLocators.inputTextForWebElement(webElement, input)
    }

    async clickOnSearchButton(page, buttonValue){
        await this.customLocators.clickOnWebElement(page, `[value=${buttonValue}]`)
    }

    async validateSearchResults(page, validateText){
        const headingWebElement = await this.customLocators.getWebElementByXPathBasedOnTagName(page, 'h1', 'srp-controls__count-heading')
        const headingTextContent = await this.customLocators.getTextContentOfWebElement(headingWebElement)
        this.customValidators.validateWebElementToContainText(headingTextContent, validateText)
    }
}

module.exports = homePage
