/* global expect */

"use strict";

describe("MountainsListController", function () {
    var mountainsService, controller, vm;

    beforeEach(module("app.mountains.list"));

    beforeEach(inject(function ($controller, _mountainsService_) {
        mountainsService = _mountainsService_;
        controller = $controller("MountainsListController", {});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

    it("should contain mountains\" list", function () {
        expect(vm.mountains).toEqual([
            {id: "1", mountain: "Mount Everest", metres: 8850, country: "Nepal-China"},
            {id: "2", mountain: "K2", metres: 8611, country: "Pakistan-China"},
            {id: "3", mountain: "Kangczendzonga", metres: 8598, country: "Nepal-India"},
            {id: "4", mountain: "Lhotse", metres: 8501, country: "Nepal-China"},
            {id: "5", mountain: "Makalu", metres: 8463, country: "Nepal-China"},
            {id: "6", mountain: "Cho Oyu", metres: 8201, country: "Nepal-China"},
            {id: "7", mountain: "Dhaulagiri", metres: 8167, country: "Nepal"},
            {id: "8", mountain: "Manaslu", metres: 8163, country: "Nepal"},
            {id: "9", mountain: "Nanga Parbat", metres: 8125, country: "Pakistan"},
            {id: "10", mountain: "Annapurna", metres: 8091, country: "Nepal"},
            {id: "11", mountain: "Shishapangma", metres: 8012, country: "China"}
        ]);
    });

    it("should move mountain", function () {
        var mountain = {id: "10", mountain: "Annapurna", metres: 8091, country: "Nepal"};

        expect(vm.mountains[5]).toEqual({id: "6", mountain: "Cho Oyu", metres: 8201, country: "Nepal-China"});

        vm.moveItem(mountain, 9, 5);

        expect(vm.mountains[5]).toEqual({id: "10", mountain: "Annapurna", metres: 8091, country: "Nepal"});
    });

    it("should delete mountain", function () {
        var mountainId = "10";

        expect(vm.mountains).toEqual([
            {id: "1", mountain: "Mount Everest", metres: 8850, country: "Nepal-China"},
            {id: "2", mountain: "K2", metres: 8611, country: "Pakistan-China"},
            {id: "3", mountain: "Kangczendzonga", metres: 8598, country: "Nepal-India"},
            {id: "4", mountain: "Lhotse", metres: 8501, country: "Nepal-China"},
            {id: "5", mountain: "Makalu", metres: 8463, country: "Nepal-China"},
            {id: "6", mountain: "Cho Oyu", metres: 8201, country: "Nepal-China"},
            {id: "7", mountain: "Dhaulagiri", metres: 8167, country: "Nepal"},
            {id: "8", mountain: "Manaslu", metres: 8163, country: "Nepal"},
            {id: "9", mountain: "Nanga Parbat", metres: 8125, country: "Pakistan"},
            {id: "10", mountain: "Annapurna", metres: 8091, country: "Nepal"},
            {id: "11", mountain: "Shishapangma", metres: 8012, country: "China"}
        ]);

        vm.deleteItem(mountainId);

        expect(vm.mountains).toEqual([
            {id: "1", mountain: "Mount Everest", metres: 8850, country: "Nepal-China"},
            {id: "2", mountain: "K2", metres: 8611, country: "Pakistan-China"},
            {id: "3", mountain: "Kangczendzonga", metres: 8598, country: "Nepal-India"},
            {id: "4", mountain: "Lhotse", metres: 8501, country: "Nepal-China"},
            {id: "5", mountain: "Makalu", metres: 8463, country: "Nepal-China"},
            {id: "6", mountain: "Cho Oyu", metres: 8201, country: "Nepal-China"},
            {id: "7", mountain: "Dhaulagiri", metres: 8167, country: "Nepal"},
            {id: "8", mountain: "Manaslu", metres: 8163, country: "Nepal"},
            {id: "9", mountain: "Nanga Parbat", metres: 8125, country: "Pakistan"},
            {id: "11", mountain: "Shishapangma", metres: 8012, country: "China"}
        ]);
    });
});
