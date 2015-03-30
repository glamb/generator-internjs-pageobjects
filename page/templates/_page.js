// The Base page object will be the default. This object will contain
// any element that are found throughout your site, such as the navigation bar, or footer
define([
  './base'
], function (Base){
  'use strict';

  function <%= _.capitalize(pageName) %>(remote) {
    // Url for this page
    this.url = 'http://example.com';

    // Assign given remote to base remote remote
    Base.call(this, remote.get(this.url));
  }

  // Inherit from the initial page object
  <%= _.capitalize(pageName) %>.prototype = Object.create(Base.prototype);

  // Put your methods for finding elements below

  return <%= _.capitalize(pageName) %>;
});
