/* global by, browser */

var TodosListPage = function () {
    var addButton = element(by.xpath('//button[@id=\'add-btn\']'));
    var deleteButton = element(by.xpath('//button[@id=\'delete-btn\']'));
    var rowName = '//div//strong[normalize-space(text())=\'%s\']';
    var rowCheckboxForName = rowName + '//ancestor::label';
    var searchField = element(by.xpath('//input[@id=\'search\']'));

    this.clickAddButton = function () {
        if (addButton.isDisplayed()) {
            addButton.click();
        }
    };

    this.clickDeleteButton = function () {
        if (deleteButton.isDisplayed()) {
            deleteButton.click();
        }
    };

    this.getTodosListPage = function () {
        browser.get('index.html#/todos/list');
    };

    this.isRowForNamePresent = function (name) {
        var xpath = rowName.replace('%s', name);
        var row = element(by.xpath(xpath));
        return row.isPresent();
    };

    this.markRowAsCompleted = function (name) {
        var xpath = rowCheckboxForName.replace('%s', name);
        var row = element(by.xpath(xpath));
        if (row.isDisplayed()) {
            row.click();
        }
    };

    this.searchText = function (textToSearch) {
        searchField.clear();
        searchField.sendKeys(textToSearch);
    };
};

module.exports = new TodosListPage();

