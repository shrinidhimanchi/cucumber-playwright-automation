const { setWorldConstructor, World } = require('@cucumber/cucumber')
const homePage = require('../../page-objects/homePage')

class baseWorld extends World {
    constructor({ attach, log, parameters }){
        super({ attach, log, parameters })
        this.attach = attach
        this.log = log
        this.parameters = parameters
        this.scenarioName = ''
        this.homePage = new homePage(attach, log, parameters)
    }

    getScenarioName(){
        return this.scenarioName
    }

}
setWorldConstructor(baseWorld)
