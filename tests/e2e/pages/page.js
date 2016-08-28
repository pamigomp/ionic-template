/* global by, browser */

var Page = function () {
    var appFooter = element(by.xpath('//app-about'));
    var formTab = element(by.xpath('//a//span[text(),\'Form\']/..'));
    var jsonTab = element(by.xpath('//a//span[text(),\'Json\']/..'));
    var mountainsTab = element(by.xpath('//a//span[text(),\'Mountains\']/..'));
    var tabTitle = element(by.xpath('//div[@nav-bar=\'active\']//div[contains(@class, \'title\')]'));
    var todosTab = element(by.xpath('//a//span[text(),\'Todos\']/..'));

    this.clickFormTab = function () {
        if (formTab.isDisplayed()) {
            formTab.click();
        }
    };

    this.clickJsonTab = function () {
        if (jsonTab.isDisplayed()) {
            jsonTab.click();
        }
    };

    this.clickMountainsListTab = function () {
        if (mountainsTab.isDisplayed()) {
            mountainsTab.click();
        }
    };

    this.clickTodosTab = function () {
        if (todosTab.isDisplayed()) {
            todosTab.click();
        }
    };

    this.getAppFooter = function () {
        return appFooter.getText();
    };

    this.getHomepage = function () {
        browser.get('index.html');
    };

    this.getLocation = function () {
        return browser.getLocationAbsUrl();
    };

    this.getTabTitle = function () {
        return tabTitle.getText();
    };
};

module.exports = new Page();
