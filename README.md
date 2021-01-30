# cypressApplitoolsPOC

POC to combine cypress functional tests with applitools visual tests

Second step is to add Browserstack as target device


Web site targeted was a sample book store https://demoqa.com/books


# How to develop tests

1. Set APPLITOOLS_API_KEY variable (GitHub account required to register)

2. ` yarn cypress open`


# How to run tests locally

1. Set APPLITOOLS_API_KEY variable (GitHub account required to register)

2. `yarn cypress run --spec "cypress/integration/book_store.spec.js"`


# How to run tests in browserstack

1. Set APPLITOOLS_API_KEY variable in [applitools config file](./applitools.config.js)
2. Set username and access_key variables in [browserstack config file](./browserstack.json)

3. `yarn browserstack-cypress run --sync --specs "cypress/integration/book_store.spec.js"`
   
NOTE: I could not achieve to run from Windows, getting NPM_INSTALL_FAILED error, related to formatting of package.json

# Sample reports

Sample execution reports are available in [reports](./reports).

Video was obtained running with --record option

Captures from https://eyes.applitools.com

# Primary references

- https://www.learnwithjason.dev/visual-testing-using-cypress-and-applitools

- https://www.npmjs.com/package/@applitools/eyes-cypress

- https://www.browserstack.com/docs/automate/cypress
  
# Other references

- https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored