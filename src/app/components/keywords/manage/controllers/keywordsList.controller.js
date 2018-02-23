(function (angular) {
    'use strict';

    angular
        .module('components.keywords')
        .controller('keywordsListController', keywordsListController)

    keywordsListController.$inject = [
        '$scope', '$timeout', '$resource', '$q',
        '$location', 'keywordsService'
    ];

    function keywordsListController(
        $scope, $timeout, $resource, $q,
        $location, keywordsService) {
        /* jshint validthis:true */
        var vm = this;
        vm.site = {};
        vm.site.selected = undefined;
        vm.sites = [];
        vm.keywords = [];
        vm.bulkActions = [];
        vm.filterCondition = '1';
        vm.allRowsMarked = false;
        vm.selectedRows = [];
        vm.popupOpen = {};

        activate();

        //////////////

        function activate() {
            getOwnSites();
            getKeywords();
            init();
        }

        // Initialize controller
        function init() {
            vm.bulkActions = [{
                    label: 'Remove Marked from System',
                    icon: 'fa-trash-o'
                },
                {
                    label: 'Refresh, Process Marked',
                    icon: 'fa-refresh'
                },
                {
                    label: 'Mark Keyword for Monitoring',
                    icon: 'fa-line-chart'
                },
                {
                    label: 'Mark Keyword for Promotion',
                    icon: 'fa-toggle-on'
                },
                {
                    label: 'Force Promotion of Marked Keyword ',
                    icon: 'fa-bookmark-o'
                },
                {
                    label: 'Mark as Default Keyword',
                    icon: 'fa-anchor'
                }
            ];
            vm.itemsByPage =  ['5', '10', '15', '20'];
            vm.numberOfRows = vm.itemsByPage[1];
        }

        // Get user's own site names.
        function getOwnSites() {
            var data = [{
                    id: 1,
                    name: 'www.umm.com'
                },
                {
                    id: 2,
                    name: 'www.uee.com'
                }
            ];
            vm.sites = data;
            vm.site.selected = data[0].name;
        }

        function getKeywords() {
            //TODO: Replace by real side it from vm.site.selected.id
            var demoSiteID = 'sdfsdfsdfsdffsdf';
            keywordsService
                .getKeywords(demoSiteID)
                .then(function (response) {
                    vm.rowCollection = response.data;
                    vm.numberOfRows = '10';
                    _(vm.rowCollection).forEach(function (value, index) {
                        vm.selectedRows[index] = false;
                    });
                });
        }

        $scope.$watch(function () {
            return vm.allRowsMarked;
        }, function (current, original) {
            _(vm.selectedRows).forEach(function (value, index) {
                if (current === true) {
                    vm.selectedRows[index] = true;
                } else {
                    vm.selectedRows[index] = false;
                }
            });
        });
    }

})(angular);