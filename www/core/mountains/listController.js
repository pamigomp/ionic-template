(function () {
    'use strict';

    angular.module('app.mountains.list', ['app.mountainsService'])

            .controller('MountainsListController', MountainsListController);

    MountainsListController.$inject = ['mountainsService'];

    function MountainsListController(mountainsService) {
        var vm = this;

        vm.mountains = mountainsService.getAll();
        vm.moveItem = moveItem;
        vm.deleteItem = deleteItem;

        function moveItem(mountain, fromIndex, toIndex) {
            vm.mountains.splice(fromIndex, 1);
            vm.mountains.splice(toIndex, 0, mountain);
        }

        function deleteItem(mountainId) {
            mountainsService.deleteById(mountainId);
        }
    }
})();
