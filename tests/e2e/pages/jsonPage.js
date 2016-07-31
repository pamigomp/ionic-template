/* global by, browser */

var JsonPage = function () {
    var preText = element(by.id('json'));

    this.getJsonPage = function () {
        browser.get('index.html#/json');
    };

    this.isTextPresent = function () {
        return preText.isPresent();
    };
};

module.exports = new JsonPage();

