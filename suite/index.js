'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('lodash');
var suites = [];
var tests = [];

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    var suiteDirs = this.expand('tests/*/');
    _.forEach(suiteDirs, function(suite) {
      var s = suite.split(path.sep);
      suites.push(s[1]);
    });


    this.argument('suiteName', {
      required: true,
      type: String,
      desc: 'The suite name'
    });

    this.log('Creating test suite ' + this.suiteName + '.');
  },

  prompting: function () {
    var done = this.async();
    this.log(chalk.blue('Valid pages:'));
    this.log(suites);

    var prompts = [{
      name: 'pageName',
      message: 'Please enter a valid page name: ',
      default: suites[0]
    }];

    this.prompt(prompts, function (props) {
      this.pageName = props.pageName.toLowerCase();
      done();
    }.bind(this));
  },

  files: function() {
    this.template('_testsuite.js', 'tests/'+this.pageName+'/'+_.snakeCase(this.suiteName)+'.js');
  },

  suiteBootstrapper: function () {

    var testSuites = this.expand('tests/'+this.pageName+'/*');
    _.forEach(testSuites, function(test) {
      tests.push(_.last(test.split(path.sep)));
    });

    this.fs.copyTpl(
      this.templatePath('_all.js'),
      this.destinationPath('tests/'+this.pageName+'/all.js'),
      { tests: tests }
    );
  },
});
