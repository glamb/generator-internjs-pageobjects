define([
  <% _.forEach(suites, function(suite) { %>
    , './<%= suite %>/all.js'
  <% }); %>
], function () {});
