(function (angular) {
    "use strict";

    angular
        .module("components.pages")
        .config(routesConfig);

    routesConfig.$inject = [
        "$stateProvider",
        "$locationProvider",
        "$urlRouterProvider",
        "RouteHelpersProvider"
    ];

    function routesConfig(
        $stateProvider,
        $locationProvider,
        $urlRouterProvider,
        helper
    ) {
        $stateProvider.state("app.pages-dashboard", {
            url: "/pages-dashboard",
            title: "Pages Dashboard",
            templateUrl: helper.componentPath("pages/dashboard", "pagesDashboard"),
            resolve: helper.resolveFor(
                "ng-bootstrap-select"
            )
        })
        .state("app.pages-manage", {
            url: "/pages-manage",
            title: "Pages Dashboard",
            templateUrl: helper.componentPath("pages/manage", "pagesManage"),
            resolve: helper.resolveFor(
                "smart-table",
                "ng-bootstrap-select",
                "highcharts",
                "highcharts-export",
                "ui.select"
            )
        })
        .state("app.pages-manage.best", {
            url: "/best"
        })
        .state("app.pages-manage.least", {
            url: "/least"
        });
    }
})(angular);