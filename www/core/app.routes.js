(function () {
    'use strict';

    angular.module('app')

            .config(config)
            .run(run);

    run.$inject = ['$rootScope', '$state', '$stateParams', '$ionicPlatform'];

    function run($rootScope, $state, $stateParams, $ionicPlatform) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/todos/list');
        $urlRouterProvider.when('/', '/todos/list');
        $urlRouterProvider.when('/todos', '/todos/list');
        $urlRouterProvider.when('/todos/', '/todos/list');
        $urlRouterProvider.when('/mountains', '/mountains/list');
        $urlRouterProvider.when('/mountains/', '/mountains/list');
        $urlRouterProvider.otherwise('/');

        $stateProvider
                .state('tab', {
                    abstract: true,
                    url: '/',
                    templateUrl: 'core/navigation/tabs.html'
                })
                .state('tab.todos-list', {
                    url: 'todos/list',
                    data: {
                        title: 'To-do list'
                    },
                    views: {
                        'tab-todos': {
                            templateUrl: 'core/todos/listView.html',
                            controller: 'TodosListController',
                            controllerAs: 'TLC'
                        }
                    }
                })
                .state('tab.todo-new', {
                    url: 'todos/new',
                    data: {
                        title: 'New todo'
                    },
                    views: {
                        'tab-todos': {
                            templateUrl: 'core/todos/newView.html',
                            controller: 'TodosNewController',
                            controllerAs: 'TNC'
                        }
                    }
                })
                .state('tab.json', {
                    url: 'json',
                    data: {
                        title: 'Json'
                    },
                    views: {
                        'tab-json': {
                            templateUrl: 'core/json/jsonView.html',
                            controller: 'JsonController',
                            controllerAs: 'JC'
                        }
                    }
                })
                .state('tab.mountains-list', {
                    url: 'mountains/list',
                    data: {
                        title: 'List of mountains'
                    },
                    views: {
                        'tab-mountains': {
                            templateUrl: 'core/mountains/listView.html',
                            controller: 'MountainsListController',
                            controllerAs: 'MLC'
                        }
                    }
                })
                .state('tab.mountain-details', {
                    url: 'mountains/:mountainId/details',
                    data: {
                        title: 'Mountain details'
                    },
                    views: {
                        'tab-mountains': {
                            templateUrl: 'core/mountains/detailsView.html',
                            controller: 'MountainsDetailsController',
                            controllerAs: 'MDC'
                        }
                    }
                })
                .state('tab.form', {
                    url: 'form',
                    data: {
                        title: 'Form'
                    },
                    views: {
                        'tab-form': {
                            templateUrl: 'core/form/formView.html',
                            controller: 'FormController',
                            controllerAs: 'FC'
                        }
                    }
                });
    }
})();
