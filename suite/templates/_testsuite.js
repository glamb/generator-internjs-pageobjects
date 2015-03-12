define([
  'intern',
  'intern!object',
  'intern/chai!assert',
  'pageObjects/<%= _.capitalize(pageName) %>'
],function() {
  'use strict';

  registerSuite(function () {
    var <%= pageName %>;
    return {
      setup: function () {
        <%= pageName %> = new <%= pageName %>(this.remote);
      },

      // 'my first test': function () {
      //   return <%= pageName %>
      //     .dosomething();
      // },
    };
  });
});
