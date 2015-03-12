'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var suites = [];

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('pageName', {
      required: true,
      type: String,
      desc: 'Create a new page object'
    });

    this.log('Creating the new page object:', this.pageName);
  },

  files: function () {
    this.template('_page.js', 'pages/' + this.pageName + '.js');
    this.mkdir('tests/' + this.pageName);
  },

  suiteBootstrapper: function () {
    var suiteDirs = this.expand('tests/*/');
    _.forEach(suiteDirs, function(suite) {
      var s = suite.split(path.sep);
      suites.push(s[1]);
    });

    this.fs.copyTpl(
      this.templatePath('tests/_all.js'),
      this.destinationPath('tests/all.js'),
      { suites:  suites }
    );


    // this.fs.copyTpl(
    //   this.templatePath('tests/suite/_all.js'),
    //   this.destinationPath('tests/'+this.pageName+'/all.js')
    // );
  },
});
