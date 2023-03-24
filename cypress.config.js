const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  e2e: {
    env: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    video: false,
    
    screenshotsFolder: 'cypress/screenshots',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      "reportDir": "cypress/reports",
      "charts": true,
      "reportPageTitle": "Weaver-Cypress",
      "reportFilename": "Shopping_Report",
      "embeddedScreenshots": true,
      "inlineAssets": true,
      "saveAllAttempts": true,
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.saucedemo.com/',
    testIsolation: false,
  },
})
