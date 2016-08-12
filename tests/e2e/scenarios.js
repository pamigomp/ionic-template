/* global browser, expect */

'use strict';

describe('Ionic Template', function () {
    var page = require('./pages/page.js');

    it('should automatically redirect to /todos/list when location hash/fragment is empty', function () {
        page.getHomepage();
        expect(page.getLocation()).toEqual('/todos/list');
    });

    describe('todos list', function () {
        var todosListPage = require('./pages/todosListPage.js');

        beforeEach(function () {
            todosListPage.getTodosListPage();
        });

        it('should render todos list when user navigates to /todos/list', function () {
            expect(page.getTabTitle()).toEqual('To-do list');
        });

        xit('should delete completed todos', function () {
            expect(todosListPage.isRowForNamePresent('Date')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Gym')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Homework')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Meeting')).toBeTruthy();

            todosListPage.markRowAsCompleted('Date');
            todosListPage.markRowAsCompleted('Meeting');
            todosListPage.clickDeleteButton();

            expect(todosListPage.isRowForNamePresent('Date')).toBeFalsy();
            expect(todosListPage.isRowForNamePresent('Gym')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Homework')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Meeting')).toBeFalsy();
        }).pend('Need to be fixed. Test fails on CI.');

        it('should filter tasks when user type text into search field', function () {
            var textToSearch = 'Homework';

            todosListPage.searchText(textToSearch);
            expect(todosListPage.isRowForNamePresent('Date')).toBeFalsy();
            expect(todosListPage.isRowForNamePresent('Gym')).toBeFalsy();
            expect(todosListPage.isRowForNamePresent('Homework')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Meeting')).toBeFalsy();
        });

        it('should render add task when user click on \'Add todo\' button', function () {
            todosListPage.clickAddButton();
            expect(page.getTabTitle()).toEqual('New todo');
        });
    });

    describe('new todo', function () {
        var todosNewPage = require('./pages/todosNewPage.js');

        beforeEach(function () {
            todosNewPage.getTodosNewPage();
        });

        it('should render mountain\'a details when user navigates to /todos/new', function () {
            expect(page.getTabTitle()).toEqual('New todo');
        });

        xit('should add new todo when user click on add button', function () {
            var todoName = 'Programming!';
            var todoType = 'Science';
            var todoEstimatedTime = '6 h';
            var todoDate = '23/05/2016';

            todosNewPage.typeName(todoName);
            todosNewPage.selectType(todoType);
            todosNewPage.selectEstimatedTime(todoEstimatedTime);
            todosNewPage.selectDate(todoDate);

            expect(todosNewPage.isAddButtonEnabled()).toBeTruthy();

            todosNewPage.clickAddButton();

            var todosListPage = require('./pages/todosListPage.js');

            expect(todosListPage.isRowForNamePresent(todoName)).toBeTruthy();
        }).pend('Need to be fixed. Test fails on Firefox.');
    });

    describe('json', function () {
        var jsonPage = require('./pages/jsonPage.js');

        beforeEach(function () {
            jsonPage.getJsonPage();
        });

        it('should render json view when user navigates to /json', function () {
            expect(jsonPage.isTextPresent()).toBeTruthy();
        });
    });

    describe('mountains\' list', function () {
        var mountainsListPage = require('./pages/mountainsListPage.js');

        beforeEach(function () {
            mountainsListPage.getMountainsListPage();
        });

        it('should render mounatins\' list when user navigates to /mountains/list', function () {
            expect(page.getTabTitle()).toEqual('List of mountains');
        });

        xit('should render details of mountain when user click on mountain', function () {
            var mountainName = 'Annapurna';

            mountainsListPage.clickMountainLink(mountainName);

            var mountainsDetailsPage = require('./pages/mountainsDetailsPage.js');

            expect(page.getTabTitle()).toEqual('Mountain details');
        }).pend('Need to be fixed. Test fails on CI.');

        xit('should back to mountains\' list when user click on back button', function () {
            var mountainName = 'Annapurna';

            mountainsListPage.clickMountainLink(mountainName);

            var mountainsDetailsPage = require('./pages/mountainsDetailsPage.js');

            mountainsDetailsPage.clickBackButton();

            expect(page.getLocation()).toEqual('/mountains/list');
        }).pend('Need to be fixed. Test fails on CI.');

        xit('should delete mountain when user click on delete button', function () {
            var mountainName = 'Annapurna';

            mountainsListPage.clickGlobalDeleteButton();
            mountainsListPage.clickDeleteButtonForMountain(mountainName);

            expect(mountainsListPage.isMountainPresent(mountainName)).toBeFalsy();
        }).pend('Need to be fixed. Test fails on Firefox.');

        xit('should reorder mountains when user drag and drop mountain', function () {
            var startMountain = 'Mount Everest';
            var endMountain = 'Shishapangma';

            expect(mountainsListPage.getMountainNameForRow(1)).toContain(startMountain);
            expect(mountainsListPage.getMountainNameForRow(11)).toContain(endMountain);

            mountainsListPage.clickReorderButton();
            mountainsListPage.dragAndDropMountain(startMountain, endMountain);

            expect(mountainsListPage.getMountainNameForRow(11)).toContain(startMountain);
        }).pend('Need to be fixed. Test fails on Chrome.');
    });

    describe('mountain\'s details', function () {
        var mountainsDetailsPage = require('./pages/mountainsDetailsPage.js');
        var mountainId = 10;
        var mountainName = 'Annapurna';

        beforeEach(function () {
            mountainsDetailsPage.getMountainsDetailsPage(mountainId);
        });

        it('should render mountain\'a details when user navigates to /mountains/10/details', function () {
            expect(page.getTabTitle()).toEqual('Mountain details');
            expect(mountainsDetailsPage.getMountainName()).toEqual('Name: ' + mountainName);
        });

        it('should delete mountain from mountains\' list when user click on delete button', function () {
            mountainsDetailsPage.clickDeleteButton();

            var mountainsListPage = require('./pages/mountainsListPage.js');

            expect(mountainsListPage.isMountainPresent(mountainName)).toBeFalsy();
        });
    });

    describe('form', function () {
        var formPage = require('./pages/formPage.js');

        beforeEach(function () {
            formPage.getFormPage();
        });

        it('should render form when user navigates to /form', function () {
            expect(page.getTabTitle()).toEqual('Form');
        });

        xit('should save form when user click on save button', function () {
            var age = '22';
            var email = 'm.pietrzak93@yahoo.com';
            var gender = 'Male';
            var name = 'Michal';
            var note = 'It is an awesome Ionic template!';
            var surname = 'Pietrzak';

            formPage.typeName(name);
            formPage.typeSurname(surname);
            formPage.typeEmail(email);
            formPage.selectGender(gender);
            formPage.typeAge(age);
            formPage.typeNote(note);

            expect(formPage.isSaveButtonEnabled()).toBeTruthy();

            formPage.clickSaveButton();

            expect(formPage.getSavedContactForm()).toContain(note);
        }).pend('Need to be fixed. Test fails on CI.');
    });
});
