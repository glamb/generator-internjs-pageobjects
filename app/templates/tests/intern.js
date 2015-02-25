define([
], function () {
  'use strict'

  var config = {
    // The port on which the instrumenting proxy will listen
    proxyPort: 9000,

    // A fully qualified URL to the Intern proxy
    proxyUrl: 'http://localhost:9000/',

    // Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
    // specified browser environments in the `environments` array below as well. See
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
    // Note that the `build` capability will be filled in with the current commit ID from the Travis CI environment
    // automatically
    capabilities: {
      'selenium-version': '2.44.0'
    },

    environments: [
      { browserName: 'chrome' }
    ],

    // Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
    maxConcurrency: 3,

    tunnel: 'NullTunnel',

    // Configuration options for the module loader; any AMD configuration options supported by the specified AMD loader
    // can be used here
    loader: {
      // Packages that should be registered with the loader in each testing environment
      packages: [ { name: 'internTests', location: './tests' },
      { name: 'pageObjects', location: '../pages' } ]
    },

    // Functional test suite(s) to run in each browser once non-functional tests are completed
    functionalSuites: [
          'internTests/example'
    ],

    excludeInstrumentation: /^(?:tests|node_modules|support|custom|pages)\//
  };

  return config;
});
