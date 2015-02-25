// The Base page object will be the default. This object will contain
// any element that are found throughout your site, such as the navigation bar, or footer
define([
  './Page'
], function (Page){
  function Base(remote) {
    //Assign given remote to this remote
    this.remote = remote;
  }

  // Inherit from the initial page object
  Base.prototype = new Page()
  Base.prototype.constructor = Base;

  return Base;
});
