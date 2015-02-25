// This page object is to return information that any and every
// page would contain(e.g. url, status code, page title)
define([], function (){
  'use strict';

  function Page(remote) {
    //Assign given remote to this remote
    this.remote = remote;
  };

  Page.prototype.constructor = Page;

  //return the url of the given page
  Page.prototype.getUrl = function () {
  };

  //return the page title of the given page
  Page.prototype.getPageTitle = function () {
  };

  //return the current status code
  Page.prototype.getStatusCode = function () {
  };

  return Page;

});
