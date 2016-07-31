/* global by, browser */

var MountainsDetailsPage = function () {
    var backButton = element(by.xpath('//button[contains(@class,\'back-button\')]'));
    var deleteButton = element(by.xpath('//button[@id=\'delete-btn\']'));
    var mountainCountry = element(by.xpath('//li[@id=\'mountain-country\']'));
    var mountainHeight = element(by.xpath('//li[@id=\'mountain-height\']'));
    var mountainName = element(by.xpath('//li[@id=\'mountain-name\']'));

    this.clickBackButton = function () {
        backButton.click();
    };

    this.clickDeleteButton = function () {
        deleteButton.click();
    };

    this.getMountainsDetailsPage = function (mountainId) {
        browser.get('index.html#/mountains/' + mountainId + '/details');
    };

    this.getMountainCountry = function () {
        return mountainCountry.getText();
    };

    this.getMountainHeight = function () {
        return mountainHeight.getText();
    };

    this.getMountainName = function () {
        return mountainName.getText();
    };
};

module.exports = new MountainsDetailsPage();

