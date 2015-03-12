// The Base page object will be the default. This object will contain
// any element that are found throughout your site, such as the navigation bar, or footer
define([
], function (){
  'use strict';
  function Base(remote) {
    //Assign given remote to this remote
    this.remote = remote;
  }

  // Inherit from the initial page object
  Base.prototype.constructor = Base;

  // // Example methods
  // Base.prototype.getUrl = function () {
  //   return this.remote
  //     .getCurrentUrl()
  //     .then(function (url) {
  //       return url;
  //     });
  // };

  return Base;
});
