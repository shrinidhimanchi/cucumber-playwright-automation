const configuration =  `--require ui-tests/setup/hooks.js
                        --require ui-tests/step_definitions
                        --format json:ui-tests/output/output.json
                        --format progress:ui-tests/output/progress.txt
                        --format rerun:ui-tests/output/rerun.txt
                        --format summary:ui-tests/output/summary
                        --format usage-json:ui-tests/output/usage.ndjson
                        --format usage:ui-tests/output/usage.txt
                        --format message:ui-tests/output/messages.ndjson ui-tests/output/reporter.html
                        --format html:ui-tests/output/inBuiltReport.html
                        --format @serenity-js/cucumber
                        --retry 1
                        --retry-tag-filter @rerun
                        --publish-quiet`

const progressBarFormat = `${configuration} --format progress-bar`
const customFormat = `${configuration} --format ./customFormat.js`
  
  module.exports = {
    'default': `${progressBarFormat}`,
    'customReport': `${customFormat}`,
    "dryRun": '--dry-run'
  }