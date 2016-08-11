/* global by, browser */

var MountainsListPage = function () {
    var deleteButton = element(by.xpath('//button[@id=\'delete-btn\']'));
    var reorderButton = element(by.xpath('//button[@id=\'reorder-btn\']'));
    var rowName = '//a[contains(text(),\'%s\')]';
    var rowDeleteButtonForName = rowName + '//..//ion-delete-button';
    var rowReorderButtonForName = rowName + '//..//ion-reorder-button';
    var row = '//ion-item[%d]//a';

    this.clickDeleteButtonForMountain = function (mountainName) {
        var xpath = rowDeleteButtonForName.replace('%s', mountainName);
        var deleteButtonForMountain = element(by.xpath(xpath));
        deleteButtonForMountain.click();
    };

    this.clickGlobalDeleteButton = function () {
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

    this.dragAndDropMountain = function (startMountain, endMountain) {
        var startXpath = rowReorderButtonForName.replace('%s', startMountain);
        var startPosition = element(by.xpath(startXpath));

        var endXpath = rowReorderButtonForName.replace('%s', endMountain);
        var endPosition = element(by.xpath(endXpath));

        //Currently this method doesn't working on Chrome and Firefox.
        browser.actions()
                .dragAndDrop(startPosition.getWebElement(), endPosition.getWebElement())
                .perform();
        //This method works only on Firefox.
        browser.actions()
                .mouseMove(startPosition.getWebElement(), {x: 0, y: 0})
                .mouseDown(startPosition.getWebElement())
                .mouseMove(startPosition.getWebElement(), {x: 5, y: 5})
                .mouseMove(endPosition.getWebElement())
                .mouseUp(startPosition.getWebElement())
                .perform();
    };

    this.getMountainsListPage = function () {
        browser.get('index.html#/mountains/list');
    };

    this.getMountainNameForRow = function (rowNumber) {
        var xpath = row.replace('%d', rowNumber);
        var mountainName = element(by.xpath(xpath));

        return mountainName.getText();
    };

    this.isMountainPresent = function (mountainName) {
        var xpath = rowName.replace('%s', mountainName);
        var mountain = element(by.xpath(xpath));
        return mountain.isPresent();
    };
};

module.exports = new MountainsListPage();

