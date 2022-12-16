# UBANK UI TEST

## This Project helps us in performing the automation testing of UI using playwright & cucumber-js

- As an automation QA Engineer, this boiler-plate project would definitely helps us in performing the automation testing of UI and efficiently using CucumberJs, playwright and other npm libraries. In addition, since the tests are written using Cucumber, it would help any non-technical users to understand the scenario(s) built.
- This Project was built with a passion to effectively perform quick and efficient way of API tesing.
- This has helped us in solving the quick delivery to production by performing necessary validations on all of the API test(s) to ensure test deliverables are met.
- Open Source has taught many things such as share,learn and improve code through the delivery of this API automation testing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How To Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

Please run the below commands sequentially from the current/present working directory of the cloned project to download all the dependencies required for the project.

```
npm install
npm run startUpScript
npm run executeShellScript
```

## Usage

We make use of `NODE_ENV` Global variable to execute the tests based on the choice of the environment.

In general, we could categorise environment as below - 
- development(environment used for developmental activities)
- testing(environment used for conducting either `System Testing` OR `System Integration Testing`)
- production(for production activities such as business acceptance testing OR business verification testing)

Whenever we want to run the tests, we use `NODE_ENV` with the value of either `development` OR `testing` OR `production`

For our testing activities, we would make use of `testing`. (i.e, `NODE_ENV=testing`)

```
NODE_ENV=testing npm run cucumber-test
```
Alternatively, we can make use of shell-script to run the tests! 

Hurray!!! Yay!!!

Please execute the below command from either `terminal` or `Iterm`
<Assuming you're on the current/present working directory of the project>

```
./ui-tests/cli/runAcceptanceTest.sh
```

When we run the above command, it would prompt us to select from the displayed choice of list. 

- Select `3` for now to execute the test(i.e, Press the numeric `3` on the keyboard to proceed further and press `enter` or `return` keyword).
- Select the appropriate feature to execute the tests(i.e, Press `1` for now since the `cucumber-tag` used on the feature file is `test`) and press `enter` or `return` keyword.
- It would show us the fully qualified command on the `terminal` followed by running the tests.

Once the tests are run successfully, reports would be generated under `output` directory(i.e, `api-tests/output/`)

-- An `.html` file automatically pops up in a browser on `Mac` once the above command gets executed.

We have 2 types of `.html` report(s) generated(as mentioned below)

- Cucumber's default html report(i.e, Cucumber generates the default HTML report under the directory(`api-tests/output`) with the filename  set to `inBuiltReport.html` as specified under our `cucumber.js` config on the root directory of the project.

- Using the npm module `multiple-cucumber-html-reporter` that gives the beautify HTML report under the directory(`api-tests/output/multiple_cucumber_report/`) with the filename set to `index.html`.(Kudos to its creators: `wswebcreation` for coming up with one of the amazing plugin to show the enriched information of cucumber tests)

Below folder hierarchy is used in building the project.

```
ubank-ui-test
├── ui-tests
|   ├── cli
|   |   ├── cliParser.js    # This file helps us in validating `NODE_ENV` is a mandatory input while running the tests via shell script.
|   |   └── runAcceptanceTest.sh  # This shell script helps us in running the test without having to type the fully qualified command on terminal.
|   ├── config
|   |   ├── development     # This directory contains all the properties required for executing the test(s) in `DEV` environment.
|   |   |   └── development.json  # This `json` file will have the user defined properties required for executing the test in `DEV` environment.
|   |   ├── production      # This file contains all the properties required for executing the test(s) in `PROD` environment.
|   |   |   └── production.json   # This `json` file will have the user defined properties required for executing the test in `PROD` environment.
|   |   ├── testing         # This file contains all the properties required for executing the test(s) in `TEST` environment.
|   |   |   └── testing.json      # This `json` file will have the user defined properties required for executing the test in `TEST` environment.
|   |   └── ...
|   ├── cucumber-report
|   |   ├── report.js      # This file contanins all the options required for generating html report for the npm library `multiple-cucumber-html-reporter`
|   |   └── reportCucumber.js     # This file contanins all the options required for generating html report for the npm library `cucumber-html-reporter`
|   ├── feature            # This directory contains the list of `.feature` files required for executing the cucumber tests based on tags.
|   |   ├── test.feature
|   |   └── ...
|   ├── output
|   |   ├── multiple_cucumber_report
|   |   |   ├── index.html  # This `.html` file contains the viewable html report generated by npm plugin `multiple-cucumber-html-reporter`
|   |   |   └── ...
|   |   ├── inBuiltReport.html    # This `.html` file contains the viewable html report generated by cucumber's default html report 
|   |   ├── messages.ndjson       # This `.ndjson` file contains the artefact of cucumber execution in `ndjson` format.
|   |   ├── output.json           # This `.json` file is the artefact of the `cucumber` feature execution.
|   |   ├── progress.txt          # This text file contains the progress of the cucumber execution.
|   |   ├── rerun.txt             # This text file contains the re-run result of the cucumber execution.
|   |   ├── summary               # This text file contains the summary of the cucumber execution.
|   |   ├── usage.ndjson          # This `.ndjson` file contains the artefact of cucumber execution in `ndjson` format.
|   |   └── usage.txt             # This text file contains the usage of `step-definition` along with the `pattern` and `location` of it.
|   ├── page-objects
|   |   └── homePage.js           # This file contains all the webElement informations of `homePage`
|   ├── models
|   |   └── customLocators.js           # This file contains all the reusable functions to operate on `webElements
|   |   └── customValidators.js         # This file contains all the reusable functions to validate `webElements
|   ├── prerequisities
|   |   └── startUpScript.js      # This file contains the required functions to create `output` directory along with the required `.json` file.
|   ├── requests
|   |   ├── testData              # This directory contains the collection of all input test-data required to run the given tests.
|   |   |   ├── testData-development  # This directory contains the collection of `.json` files required for executing `development` env tests.
|   |   |   |   ├── testData-development.json # This file contains the array of JSON Objects(i.e, collection of scenario data)
|   |   |   |   └── ...
|   |   |   ├── testData-production   # This directory contains the collection of `.json` files required for executing `production` env tests.
|   |   |   |   ├── testData-production.json  # This file contains the array of JSON Objects(i.e, collection of scenario data)
|   |   |   |   └── ...
|   |   |   ├── testData-testing      # This directory contains the collection of `.json` files required for executing `testing` env tests.
|   |   |   |   ├── testData-testing.json     # This file contains the array of JSON Objects(i.e, collection of scenario data)
|   |   |   |   └── ...
|   |   └── requestBody.json    # This `.json` file contains the list of input payload required for `PATCH`, `PUT` & `POST` requests.
|   ├── step_definitions
|   |   ├── support
|   |   |   ├── baseWorld.js          # This class file extends the `World` class of `cucumber` along with the required reusable functions.
|   |   |   ├── dataStore.js          # This file contains the list of reusable functions required for fetching the input data and header functions.
|   |   |   ├── envConfiguration.js   # This file reads the `name-value` pairs of `.json` file(if exists) from the `config` directory.
|   |   ├── step_definitions.js       # This file contains the collection of `step-definitions` required for executing the feature file.
|   |   └── ...
├── cucumber.js                       # This file contains the required configurations to execute our cucumber tests.
├── customFormat.js                   # This file gets executed when `customReport` is choosen for reporting the artefacts.
├── package.json                      # This file lists out the required dependencies along with the essential node scripts required for the project.
├── README.md                         # This file contains the README instructions to setup the project and execute the tests.
└── ...

```

## Credits

A Big Thanks to the following open source libraries(along with tutorials) which helped in building this project.

- https://github.com/wswebcreation/multiple-cucumber-html-reporter
- https://www.npmjs.com/package/@cucumber/cucumber
- https://www.npmjs.com/package/playwright

## License

MIT 🏆 

---



## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


## Features

- Lightweight automation framework for executing API tests using `cucumber-js`
- Reusable javascript function(s) for better readability of the code.
-  Use `Visual Studio Code` for better traceability.


## How to Contribute

- Create a branch out of `main` or `master`.
- Make required changes to the code and raise a pull request.
- Once pull request is approved, update the contributors sections in `package.json` file for better traceability.

## Tests

If any code changes are applied ensure all the existing feature test(s) are working as expected.

