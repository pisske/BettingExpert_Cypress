const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qkcknq",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.bettingexpert.com/",
    env: {
      username: "vlaadiimiir",
      home_page: "https://www.bettingexpert.com/",
    },
    chromeWebSecurity: true,

    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
  },
});
