'use strict';

angular.module('hearts', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

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
}).directive("jared", function () {
    return {
        restrict: 'E',
        templateUrl: 'views/nav.html'
    };
});
'use strict';

angular.module('hearts').controller('mainCtrl', function ($scope, playerService) {

  $scope.name = "Hearts";
  $scope.getPlayers = function () {
    $scope.players = playerService.getPlayers();
  };

  $scope.getPlayers();
});
'use strict';

angular.module('hearts').service('playerService', function () {

  var heartsPlayers = [{ "id": "0512", "name": "Jared" }, { "id": "0402", "name": "Isaac" }, { "id": "0518", "name": "Katie" }, { "id": "0811", "name": "John" }, { "id": "1218", "name": "Linda" }, { "id": "0920", "name": "Danielle" }, { "id": "0917", "name": "Nicole" }, { "id": "1230", "name": "Colter" }, { "id": "1206", "name": "Jess" }];

  this.getPlayers = function () {
    return heartsPlayers;
  };
});