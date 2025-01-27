const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const path = require("path");

module.exports = defineConfig({
  e2e: {
    projectId: "33h1er",
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    async setupNodeEvents(on, config) {
      // Initialisation du plugin Cucumber Preprocessor
      await addCucumberPreprocessorPlugin(on, config);

      // Configuration du bundler avec esbuild
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);

      // Configuration des chemins des step definitions
      config.stepDefinitions = path.resolve("cypress/e2e/**/*js"); // Ajustez ce chemin si nécessaire

      // Retournez la configuration mise à jour
      return config;
    },
    chromeWebSecurity: false,
    supportFile: false,
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*.feature", // Chemin des fichiers .feature
  },
});