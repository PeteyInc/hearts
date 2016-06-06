angular.module('hearts').controller('detailsCtrl', function($scope, $stateParams, playerService) {

    $scope.name = "Details";

    $scope.getPlayers = function() {
        $scope.players = playerService.getPlayers();
    };
    $scope.getPlayers();
    // console.log($scope.players);
    $scope.playerId = $stateParams.id;

    $scope.getPlayer = function(arr, id) {
        console.log(id);
        for (var i = 0; i < arr.length; i++) {
          if (id === arr[i].id) {
              $scope.player = arr[i];
          }
        }
    };

    $scope.getPlayer($scope.players, $stateParams.id);

});
