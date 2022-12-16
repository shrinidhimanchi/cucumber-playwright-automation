const reporter = require('cucumber-html-reporter')

const options = {
    theme: 'bootstrap',
    brandTitle: 'Sample Report Title',
    jsonFile: __dirname + '/../output/output.json',
    output: __dirname + '/../output/reporter.html',
    reportSuiteAsScenarios: true,
    scenarioTimeStamp: true,
    launchReport: true,

};

reporter.generate(options)
process.exit()