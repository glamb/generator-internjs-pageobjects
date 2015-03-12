define([
  <% _.forEach(tests, function(test) { %>
    , './<%= test %>'
  <% }); %>
], function () {});
