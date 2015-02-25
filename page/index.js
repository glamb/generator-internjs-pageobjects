'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('Creating the new page object:', this.name);

    this.argument('pageName', {
      required: true,
      type: String,
      desc: 'Create a new page object'
    });
  },

  writing: function () {
    this.template('_page.js', 'pages/' + this.pageName + '.js');
  }
});
