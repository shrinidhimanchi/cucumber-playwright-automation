const report = require('multiple-cucumber-html-reporter')
const options = {
    jsonDir: __dirname + '/../output',
    reportPath: __dirname + '/../output/multiple_cucumber_report',
    staticFilePath: false,
    openReportInBrowser: true,
    disableLog: false,
    pageTitle: "Sample Report Page Title",
    reportName: "Sample Report Name",
    pageFooter: "Sample Report Footer",
    saveCollectedJSON: false,
    displayDuration: true,
    durationInMS: true,
    useCDN: true,
    displayReportTime: true
}

report.generate(options)
process.exit()