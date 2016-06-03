angular.module('hearts', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    }).state('players', {
        url: '/players',
        templateUrl: 'views/players.html'
    }).state('history', {
        url: '/history',
        templateUrl: 'views/history.html'
    });

}).directive("jared", function() {
    return {
        restrict: 'E',
        templateUrl: 'views/nav.html'
    };
});
