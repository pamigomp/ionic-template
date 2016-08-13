/* global expect */

"use strict";

describe("JsonController", function () {
    var log, jsonService, controller, httpBackend, vm;

    beforeEach(module("app.json"));

    beforeEach(inject(function ($controller, $httpBackend, _jsonService_, $log) {
        log = $log;
        jsonService = _jsonService_;
        httpBackend = $httpBackend;
        controller = $controller("JsonController", {});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

    it("should contain json array - HTTP 200", function () {
        httpBackend.expectGET("assets/data/data.json").respond("[{\"name\": \"ionic-template\",\"author\": \"Michal Pietrzak\",\"date\": \"2016-05-23T12:12:12.000000Z\", \"version\": \"0.0.1\"}]");
        httpBackend.flush();

        expect(vm.json).toEqual([
            {
                "name": "ionic-template",
                "author": "Michal Pietrzak",
                "date": "2016-05-23T12:12:12.000000Z",
                "version": "0.0.1"
            }
        ]);
    });

    it("should not contain json array - HTTP 404", function () {
        httpBackend.expectGET("assets/data/data.json").respond(404);
        httpBackend.flush();

        expect(vm.json).toEqual([]);
    });
});
