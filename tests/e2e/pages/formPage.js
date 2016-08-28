/* global by, browser */

var FormPage = function () {
    var ageField = element(by.xpath('//input[@id=\'age\']'));
    var contactForm = element(by.xpath('//pre[@id=\'contactForm\']'));
    var emailField = element(by.xpath('//input[@id=\'email\']'));
    var genderField = '//select[@id=\'gender\']//option[normalize-space(text())=\'%s\']';
    var nameField = element(by.xpath('//input[@id=\'firstName\']'));
    var noteField = element(by.xpath('//textarea[@id=\'info\']'));
    var saveButton = element(by.xpath('//button[@id=\'save-btn\']'));
    var surnameField = element(by.xpath('//input[@id=\'lastName\']'));

    this.clickSaveButton = function () {
        if (saveButton.isDisplayed()) {
            saveButton.click();
        }
    };

    this.getFormPage = function () {
        browser.get('index.html#/form');
    };

    this.isSaveButtonEnabled = function () {
        return saveButton.isEnabled();
    };

    this.getSavedContactForm = function () {
        return contactForm.getText();
    };

    this.typeName = function (name) {
        nameField.clear();
        nameField.sendKeys(name);
    };

    this.typeSurname = function (surname) {
        surnameField.clear();
        surnameField.sendKeys(surname);
    };

    this.typeEmail = function (email) {
        emailField.clear();
        emailField.sendKeys(email);
    };

    this.selectGender = function (gender) {
        var xpath = genderField.replace('%s', gender);
        var option = element(by.xpath(xpath));
        if (option.isDisplayed()) {
            option.click();
        }
    };

    this.typeAge = function (age) {
        ageField.clear();
        ageField.sendKeys(age);
    };

    this.typeNote = function (note) {
        noteField.clear();
        noteField.sendKeys(note);
    };
};

module.exports = new FormPage();

