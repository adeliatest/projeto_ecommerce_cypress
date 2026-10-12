// cypress.config.js
import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://saucedemo.com',
    chromeWebSecurity: false,
    specPattern: "**/*.feature", //executa apenas os arquivos gherkin
    async setupNodeEvents(on, config) {
      // configuração do Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // configuração do Cucumber e Esbuild
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      
      return config;
    },
  },
});