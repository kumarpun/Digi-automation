// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
var jasmineReporters = require('jasmine-reporters');
var htmlReporter = require('protractor-html-reporter-2');

exports.config = {
  allScriptsTimeout: 11000,
  restartBrowserBetweenTests: true,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
        args: ["--start-maximized", "--window-size=1630,963"]
    }
  },
  directConnect: true,
  port: null,
  baseUrl: '',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 260000,
    print: () => {}
  },
  beforeLaunch: () => {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },

    onPrepare: function() {

      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'xmlresults'
    }));
    // require("./e2e/setup.e2e-spec")
  },
    onComplete: function () {
      var browserName, browserVersion;
      var capsPromise = browser.getCapabilities();

      capsPromise.then(function (caps) {
          browserName = caps.get('browserName');
          browserVersion = caps.get('version');
          platform = caps.get('platform');

          testConfig = {
              reportTitle: 'Protractor Test Execution Report',
              outputPath: './',
              outputFilename: 'ProtractorTestReport',
              testBrowser: browserName,
              browserVersion: browserVersion,
              modifiedSuiteName: false,
              testPlatform: platform
          };
          new htmlReporter().from('./xmlresults.xml', testConfig);
      });
  }
}
