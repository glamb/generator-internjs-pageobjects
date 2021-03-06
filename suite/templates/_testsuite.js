define([
  'intern',
  'intern!object',
  'intern/chai!assert',
  'pageObjects/<%= pageName %>'
], function (intern, registerSuite, assert, <%= _.capitalize(pageName) %>) {
  'use strict';

  registerSuite(function () {
    var <%= pageName %>;
    return {
      name: '<%= suiteName %>',

      setup: function () {
        <%= pageName %> = new <%= _.capitalize(pageName) %>(this.remote);
      },

      // 'my first test': function () {
      //   return <%= pageName %>
      //     .dosomething();
      // },
    };
  });
});
