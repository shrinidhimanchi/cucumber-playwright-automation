const { Before, BeforeAll, After, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber')
const hookStepsObject = require('./hookSteps')
const hookSteps = new hookStepsObject()

setDefaultTimeout(60 * 1000)

BeforeAll(async function(){
    if(process.env.NODE_ENV == undefined){
        throw new Error(`NODE_ENV is mandatory to pass from CLI`)
    }
    await hookSteps.setGlobalBrowserAndPage()
})

Before(async function(scenario){
    console.log('Execution Start Time : '+new Date().toTimeString())
    this.scenarioName = scenario.pickle.name.toUpperCase()
    console.log('Started Executing The Scenario :: '+this.getScenarioName())
    global.page = await hookSteps.setGlobalContextAndPage()
})

After(async function(){
    console.log('Execution End Time : '+new Date().toTimeString())
    console.log('Finishing Execution Of The Scenario :: '+this.getScenarioName())
    await hookSteps.closeGlobalPageAndContext()
})

AfterAll(async function(){
    await hookSteps.closeBrowser()
})