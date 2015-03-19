define([
  'intern',
  'intern!object',
  'intern/chai!assert',
  'pageObjects/<%= _.capitalize(pageName) %>'
], function (intern, registerSuite, assert, _.capitalize(pageName)) {
  'use strict';

  registerSuite(function () {
    var <%= pageName %>;
    return {
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
