const playwrightExpect = require('@playwright/test').expect

class customValidators {

    constructor(attach, log, parameters){
        this.attach = attach, 
        this.log = log, 
        this.parameters = parameters
    }

    validateWebElementToContainText(actualValue, expectedToContainText){
        console.log(`Onto method :: validateWebElementToContainText`)
        this.attach(`Validating Text ${actualValue} Retrieved from WebElement To Have Text ${expectedToContainText}`)
        playwrightExpect(actualValue).toContain(expectedToContainText)
    }

}

module.exports = customValidators