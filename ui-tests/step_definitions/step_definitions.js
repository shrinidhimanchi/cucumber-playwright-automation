var { Given, When, Then } = require('@cucumber/cucumber')

Given(/^User Visits Ebay Home Page$/, async function(){
    await this.homePage.navigateToHomePageAndValidate(page)
})

When(/^User Fills Search Criteria With Text (.*)$/, async function(inputText){
    inputText = inputText.replace(/['"]+/g, '')
    await this.homePage.inputTextOnSearchField(page, inputText)
})

When(/^User Clicks On (.*) Button$/, async function(buttonName){
    buttonName = buttonName.replace(/['"]+/g, '')
    await this.homePage.clickOnSearchButton(page, buttonName)
})

Then(/^User Should Validate The Search Results$/, async function(){
    await this.homePage.validateSearchResults(page, '+ results for ToolKit')
})
