const { defineConfig } = require("cypress");
require('dotenv').config();

const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pet-shop.buckhill.com.hr',
    specPattern: '**/*.spec.js',
    env: { ADMIN_EMAIL, ADMIN_PASSWORD },
    setupNodeEvents(on, config) {
      // Delete the recorded video for specs that had no retry attempts or failures
    },
  },
});
