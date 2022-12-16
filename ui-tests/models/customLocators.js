class customLocators{
    constructor(attach, log, parameters){
        this.attach = attach,
        this.log = log,
        this.parameters = parameters
    }

    async getWebElementByRole(page, type, locatorName){
        console.log(`Onto method :: getWebElementByRole`)
        switch (type) {
            case 'link': {
                console.log('Matched type `link`')
                this.attach(`Retrieve WebElement Having type : ${type} Along With LocatorName : ${locatorName}`)
                return await page.getByRole(type, { name: locatorName })
            }
            case 'bla...': {
                this.attach(`Retrieve WebElement Having type : ${type} Along With LocatorName : ${locatorName}`)
                return await page.getByRole(type, { name: locatorName })
            }
            default:
                this.attach(`Retrieve WebElement Having type : ${type} Along With LocatorName : ${locatorName}`)
                return await page.getByRole(type, { name: locatorName })
        }
    }

    async getWebElementByPlaceholder(page, placeHolderName){
        console.log(`Onto method :: getWebElementByPlaceholder`)
        switch (placeHolderName) {
            case 'Search for anything': {
                console.log('Matched placeholder `Search for anything`')
                this.attach(`Retrieve WebElement Having PlaceHolderName : ${placeHolderName}`)
                return await page.getByPlaceholder(placeHolderName)
            }
            case 'bla...': {
                this.attach(`Retrieve WebElement Having PlaceHolderName : ${placeHolderName}`)
                return await page.getByPlaceholder(placeHolderName)
            }
            default:{
                this.attach(`Retrieve WebElement Having PlaceHolderName : ${placeHolderName}`)
                return await page.getByPlaceholder(placeHolderName)
            }
        }
    }

    async inputTextForWebElement(webElement, inputText){
        console.log(`Onto method :: inputTextForWebElement`)
        this.attach(`Input WebElement : ${webElement} With Text Input as ${inputText}`)
        await webElement.fill(inputText)
    }

    async clickOnWebElement(page, locator){
        console.log(`Onto method :: clickOnWebElement`)
        this.attach(`Click On WebElement having locator identifier as ${locator}`)
        await page.locator(`${locator}`).click()
    }

    async getWebElementByXPathBasedOnTagName(page, tagName, className){
        console.log(`Onto method :: getWebElementByXPath`)
        switch (tagName) {
            case 'h1': {
                console.log(`Matched ${tagName} Having ClassName as ${className}`)
                this.attach(`Retrieve WebElement Having tagName : ${tagName} Along With ClassName : ${className}`)
                return await page.locator(`//h1[contains(@class, \'${className}\')]`)
            }
            case 'div': {
                this.attach(`Retrieve WebElement Having tagName : ${tagName} Along With ClassName : ${className}`)
                return await page.locator(`//div[contains(@class, \'${className}\')]`)
            }
            case 'button': {
                this.attach(`Retrieve WebElement Having tagName : ${tagName} Along With ClassName : ${className}`)
                return await page.locator(`//button[contains(@class, \'${className}\')]`)
            }
            default: {
                this.attach(`Retrieve WebElement Having tagName : ${tagName} Along With ClassName : ${className}`)
                return await page.locator(`//h1[contains(@class, \'${className}\')]`)
            }
        }
    }

    async getTextContentOfWebElement(webElement){
        console.log(`Onto method :: getTextContentOfWebElement`)
        this.attach(`Retrieving textContent for the WebElement : ${webElement}`)
        const textContent = await webElement.textContent()
        this.attach(`Text Content Retrieved is : ${textContent}`)
        return textContent
    }
}

module.exports = customLocators
