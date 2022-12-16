const { SummaryFormatter, formatterHelpers, Status } = require('@cucumber/cucumber')
class SimpleFormatter extends SummaryFormatter {
  constructor(options) {
    super(options)
    options.eventBroadcaster.on('envelope', (envelope) => {
      if (envelope.testCaseFinished) {
        this.logTestCaseFinished(envelope.testCaseFinished)
      }
    })
  }
  logTestCaseFinished(testCaseFinished) {
    const testCaseAttempt = this.eventDataCollector.getTestCaseAttempt(testCaseFinished.testCaseStartedId)
    this.log(testCaseAttempt.gherkinDocument.feature.name + ' / ' + testCaseAttempt.pickle.name + '\n')
    const parsed = formatterHelpers.parseTestCaseAttempt({
      cwd: this.cwd,
      snippetBuilder: this.snippetBuilder, 
      supportCodeLibrary: this.supportCodeLibrary,
      testCaseAttempt 
    })
    parsed.testSteps.forEach(testStep => {
      this.log('  ' + testStep.keyword + (testStep.text || '') + ' - ' + Status[testStep.result.status] + '\n')
    })
    this.log('\n')
  }
}
module.exports = SimpleFormatter