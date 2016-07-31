/* global by, browser */

var MountainsListPage = function () {
    var deleteButton = element(by.xpath('//button[@id=\'delete-btn\']'));
    var reorderButton = element(by.xpath('//button[@id=\'reorder-btn\']'));
    var rowName = '//a[contains(text(),\'%s\')]';

    this.clickDeleteButton = function () {
        deleteButton.click();
    };

    this.clickMountainLink = function (mountainName) {
        var xpath = rowName.replace('%s', mountainName);
        var row = element(by.xpath(xpath));
        row.click();
    };

    this.clickReorderButton = function () {
        reorderButton.click();
    };

    this.getMountainsListPage = function () {
        browser.get('index.html#/mountains/list');
    };

    this.isMountainPresent = function (mountainName) {
        var xpath = rowName.replace('%s', mountainName);
        var mountain = element(by.xpath(xpath));
        return mountain.isPresent();
    };
};

module.exports = new MountainsListPage();

