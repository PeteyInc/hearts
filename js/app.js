angular.module('hearts', ['ui.router']).config(function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

});
