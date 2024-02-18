// Karma configuration file
// Documentation: https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-edge-launcher"), // Plugin pour Edge
    ],
    client: {
      clearContext: false, // laisse la sortie de Jasmine Spec Runner visible dans le navigateur
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "../coverage"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Edge"],
    customLaunchers: {
      Edge: {
        base: "Edge",
        flags: ["--no-sandbox", "--disable-gpu"],
      },
    },
    singleRun: false,
  });
};
