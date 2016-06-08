angular.module('hearts').controller('mainCtrl', function($scope, $stateParams, playerService, gameService) {

    $scope.name = "Hearts";
    $scope.players = playerService.getPlayers();
    $scope.games = gameService.getGames();

    $scope.scoreSum = function(array) {
      return array.reduce(function(a, b) {
        return a + b;
      });
    };

    $scope.cardNum = function(string) {
      return string.charAt(0);
    };

});
