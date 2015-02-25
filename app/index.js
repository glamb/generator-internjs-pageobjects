'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
// var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the perfect' + chalk.red('InternjsPageobjects') + ' generator!'
    ));

    var prompts = [{
      name: 'appname',
      message: 'Name of project:',
      default: 'internjs-test'
    },
    {
     name: 'author',
     message: 'Name of author:',
     default: 'John Doe'
    }];

    this.prompt(prompts, function (props) {
      this.appname = props.appname;
      this.author = props.author;

      done();
    }.bind(this));
  },

  configuring: {
    enforceFolderName: function () {
      if (this.appname !==_.last(this.destinationRoot().split(path.sep))) {
        this.destinationRoot(this.appname);
      }
      this.config.save();
    }
  },

  writing: {
    app: function () {
      this.template('_package.json', 'package.json');
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    },

    gitfiles: function () {
      this.copy('gitattributes', '.gitattributes');
      this.copy('gitignore', '.gitignore');
    },

    bootstrapfiles: function () {
      this.copy('pages/base.js', 'pages/base.js');
      this.copy('pages/page.js', 'pages/page.js');
      this.copy('tests/intern.js', 'tests/intern.js');
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
