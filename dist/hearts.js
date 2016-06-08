'use strict';

angular.module('hearts', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    }).state('players', {
        url: '/players',
        templateUrl: 'views/players.html'
    }).state('games', {
        url: '/games',
        templateUrl: 'views/games.html'
    }).state('details', {
        url: '/players/:id',
        templateUrl: 'views/details.html',
        controller: 'detailsCtrl'
    }).state('newgame', {
        url: '/play',
        templateUrl: 'views/newgame.html'
    }).state('table', {
        url: '/table',
        templateUrl: 'views/scorecard.html'
    });
}).directive("jared", function () {
    return {
        restrict: 'E',
        templateUrl: 'views/nav.html'
    };
}).directive("games", function () {
    return {
        restrict: 'E',
        templateUrl: 'views/games.html'
    };
}).directive("players", function () {
    return {
        restrict: 'E',
        templateUrl: 'views/players.html'
    };
});
'use strict';

angular.module('hearts').controller('detailsCtrl', function ($scope, $stateParams, playerService) {

    $scope.name = "Details";

    $scope.getPlayers = function () {
        $scope.players = playerService.getPlayers();
    };
    $scope.getPlayers();
    // console.log($scope.players);
    $scope.playerId = $stateParams.id;

    $scope.getPlayer = function (arr, id) {
        console.log(id);
        for (var i = 0; i < arr.length; i++) {
            if (id === arr[i].id) {
                $scope.player = arr[i];
            }
        }
    };

    $scope.getPlayer($scope.players, $stateParams.id);
});
'use strict';

angular.module('hearts').service('gameService', function () {

    var heartsGames = [{
        "id": "1",
        "position": [{
            "id": "0920",
            "name": "Danielle"
        }, {
            "id": "0512",
            "name": "Jared"
        }, {
            "id": "1218",
            "name": "Linda"
        }, {
            "id": "0811",
            "name": "John"
        }],
        "scores": [[7, 13, 6, 0, 0, 5, 0, 4, 13, 22, 2, 5], [13, 1, 1, 4, 7, 6, 3, 5, 0, 4, 3, 0], [1, 11, 19, 8, 0, 2, 2, 0, 0, 5, 0, 2, 5], [5, 1, 0, 14, 19, 13, 3, 17, 8, 0, 19, 16]]
    }, {
        "id": "2",
        "position": [{
            "id": "1218",
            "name": "Linda"
        }, {
            "id": "0512",
            "name": "Jared"
        }, {
            "id": "0920",
            "name": "Danielle"
        }, {
            "id": "0811",
            "name": "John"
        }],
        "scores": [[1, 26, 1, 0, 2, 0, 9, 9, 13, 0, 0], [0, 0, 25, 0, 20, 13, 0, 2, 13, 18, 25], [2, 26, 0, 4, 4, 11, 17, 1, 0, 8, 1], [23, 26, 0, 22, 0, 2, 0, 14, 0, 0, 0]]
    }, {
        "id": "3",
        "position": [{ "id": "0811", "name": "John" }, { "id": "1218", "name": "Linda" }, { "id": "0920", "name": "Danielle" }, { "id": "0512", "name": "Jared" }],
        "scores": [[26, 22, 0, 5, 3, 7, 0], [26, 1, 14, 4, 1, 1, 0], [0, 0, 0, 4, 9, 2, 1], [26, 3, 12, 13, 13, 16, 25]]
    }, {
        "id": "4",
        "position": [{ "id": "0920", "name": "Danielle" }, { "id": "1218", "name": "Linda" }, { "id": "0512", "name": "Jared" }, { "id": "0811", "name": "John" }],
        "scores": [[26, 0, 3, 20, 2, 22, 2, 5, 13, 8], [26, 2, 7, 4, 24, 3, 5, 0, 1, 4], [0, 21, 16, 1, 0, 1, 5, 15, 5, 14], [26, 3, 0, 1, 0, 0, 14, 6, 7, 0]]
    }, {
        "id": "5",
        "position": [{ "id": "0920", "name": "Danielle" }, { "id": "1218", "name": "Linda" }, { "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }],
        "scores": [[0, 0, 8, 26, 17, 0, 26], [2, 26, 18, 26, 4, 3, 0], [11, 26, 0, 0, 5, 0, 26], [13, 26, 0, 26, 0, 23, 26]]
    }, {
        "id": "6",
        "position": [{ "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[4, 25, 14, 26, 0, 25, 8], [14, 1, 1, 0, 1, 1, 18], [2, 0, 11, 26, 19, 0, 0], [6, 0, 0, 26, 6, 0, 0]]
    }, {
        "id": "7",
        "position": [{ "id": "1218", "name": "Linda" }, { "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[26, 2, 0, 10, 20, 3, 0, 0, 14, 0, 26], [26, 11, 0, 16, 0, 14, 8, 4, 1, 8, 26], [0, 13, 21, 0, 6, 0, 17, 0, 11, 18, 0], [26, 0, 5, 0, 0, 9, 1, 22, 0, 0, 26]]
    }, {
        "id": "8",
        "position": [{ "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }, { "id": "0920", "name": "Danielle" }, { "id": "0811", "name": "John" }],
        "scores": [[19, 15, 0, 1, 21, 21, 8, 18], [4, 7, 2, 14, 2, 0, 14, 0], [0, 1, 24, 0, 2, 0, 1, 5], [3, 3, 0, 11, 1, 5, 3, 3]]
    }, {
        "id": "9",
        "position": [{ "id": "0920", "name": "Danielle" }, { "id": "0512", "name": "Jared" }, { "id": "1230", "name": "Colter" }, { "id": "0811", "name": "John" }],
        "scores": [[26, 1, 1, 25, 15, 6, 0, 0, 3, 3, 4, 1], [26, 25, 8, 1, 1, 5, 5, 18, 4, 1, 0, 4], [26, 0, 13, 0, 0, 14, 20, 3, 4, 14, 1, 21], [0, 0, 4, 0, 10, 1, 1, 5, 15, 8, 21, 0]]
    }, {
        "id": "10",
        "position": [{ "id": "0920", "name": "Danielle" }, { "id": "1230", "name": "Colter" }, { "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }],
        "scores": [[13, 0, 1, 0, 3, 0, 0, 15, 26], [0, 24, 25, 12, 5, 0, 20, 4, 26], [0, 2, 0, 0, 1, 14, 0, 7, 0], [13, 0, 0, 14, 17, 12, 6, 0, 26]]
    }, {
        "id": "11",
        "position": [{ "id": "0811", "name": "John" }, { "id": "1230", "name": "Colter" }, { "id": "0920", "name": "Danielle" }, { "id": "0917", "name": "Nicole" }],
        "scores": [[3, 0, 12, 16, 14, 0, 25, 1, 1], [0, 0, 14, 3, 1, 26, 0, 0, 0], [22, 1, 0, 0, 0, 26, 1, 2, 0], [1, 25, 0, 7, 11, 26, 0, 23, 25]]
    }, {
        "id": "12",
        "position": [{ "id": "0811", "name": "John" }, { "id": "0920", "name": "Danielle" }, { "id": "1230", "name": "Colter" }, { "id": "0917", "name": "Nicole" }],
        "scores": [[5, 15, 2, 0, 1, 8, 0, 4, 9, 1, 3], [5, 0, 13, 14, 3, 14, 7, 18, 0, 2, 4], [15, 11, 5, 0, 4, 0, 19, 2, 17, 23, 19], [1, 0, 6, 12, 18, 4, 0, 2, 0, 0, 0]]
    }, {
        "id": "13",
        "position": [{ "id": "0512", "name": "Jared" }, { "id": "0920", "name": "Danielle" }, { "id": "0917", "name": "Nicole" }, { "id": "1230", "name": "Colter" }],
        "scores": [[3, 12, 1, 0, 17, 26, 19, 15, 17], [1, 13, 3, 0, 5, 0, 0, 0, 2], [22, 1, 0, 25, 0, 26, 0, 1, 3], [0, 0, 22, 1, 4, 26, 7, 10, 4]]
    }, {
        "id": "14",
        "position": [{ "id": "0917", "name": "Nicole" }, { "id": "0811", "name": "John" }, { "id": "0920", "name": "Danielle" }, { "id": "1230", "name": "Colter" }],
        "scores": [[2, 2, 0, 20, 4, 0, 17, 0, 0], [11, 0, 1, 0, 1, 5, 4, 15, 3], [0, 2, 2, 6, 3, 6, 2, 11, 0], [13, 22, 23, 0, 18, 15, 3, 0, 23]]
    }, {
        "id": "15",
        "position": [{ "id": "0920", "name": "Danielle" }, { "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }],
        "scores": [[14, 4, 1, 0, 6, 21, 6, 1, 1, 1, 0], [3, 8, 20, 2, 2, 0, 2, 0, 19, 24, 23], [0, 1, 5, 0, 18, 5, 0, 1, 1, 0, 3], [9, 13, 0, 24, 0, 0, 18, 24, 5, 1, 0]]
    }, {
        "id": "16",
        "position": [{ "id": "1218", "name": "Linda" }, { "id": "0512", "name": "Jared" }, { "id": "0811", "name": "John" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[22, 14, 1, 0, 2, 0, 0, 4, 22, 8, 8, 0, 0], [0, 1, 1, 4, 0, 23, 20, 0, 0, 0, 1, 0, 3], [1, 3, 24, 0, 0, 0, 5, 18, 3, 4, 13, 20, 20], [3, 8, 0, 22, 24, 3, 1, 4, 1, 14, 4, 6, 3]]
    }, {
        "id": "17",
        "position": [{ "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[0, 1, 0, 19, 7, 0, 6, 0, 0], [5, 2, 6, 4, 0, 2, 0, 1, 26], [21, 23, 1, 2, 19, 0, 20, 13, 26], [0, 0, 19, 1, 0, 24, 0, 12, 26]]
    }, {
        "id": "18",
        "position": [{ "id": "1218", "name": "Linda" }, { "id": "0811", "name": "John" }, { "id": "0920", "name": "Danielle" }, { "id": "0512", "name": "Jared" }],
        "scores": [[26, 0, 2, 13, 2, 8, 18], [26, 10, 21, 12, 14, 15, 2], [26, 2, 2, 0, 6, 3, 6], [0, 14, 1, 1, 4, 0, 0]]
    }, {
        "id": "19",
        "position": [{ "id": "0811", "name": "John" }, { "id": "1218", "name": "Linda" }, { "id": "0920", "name": "Danielle" }, { "id": "0512", "name": "Jared" }],
        "scores": [[22, 23, 12, 0, 2, 26, 0, 3, 13], [1, 3, 0, 16, 0, 26, 21, 21, 4], [2, 0, 14, 3, 24, 26, 1, 2, 5], [1, 0, 0, 7, 0, 0, 4, 0, 4]]
    }, {
        "id": "20",
        "position": [{ "id": "0920", "name": "Danielle" }, { "id": "1218", "name": "Linda" }, { "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }],
        "scores": [[2, 7, 13, 1, 5, 0, 14, 4, 13, 0], [17, 15, 2, 4, 2, 23, 7, 18, 0, 26], [2, 0, 7, 21, 17, 3, 5, 0, 13, 26], [5, 4, 4, 0, 2, 0, 0, 4, 0, 26]]
    }, {
        "id": "21",
        "position": [{ "id": "0811", "name": "John" }, { "id": "1218", "name": "Linda" }, { "id": "0512", "name": "Jared" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[4, 22, 25, 3, 13, 0, 0, 0, 26, 1], [0, 1, 0, 23, 0, 0, 6, 20, 26, 6], [0, 2, 0, 0, 0, 5, 20, 6, 0, 3], [22, 1, 1, 0, 13, 21, 0, 0, 26, 16]]
    }, {
        "id": "22",
        "position": [{ "id": "1230", "name": "Colter" }, { "id": "0917", "name": "Nicole" }, { "id": "0512", "name": "Jared" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[6, 4, 0, 3, 0, 26, 0, 4, 0], [13, 2, 25, 15, 9, 0, 0, 13, 25], [0, 5, 1, 0, 16, 26, 25, 9, 1], [7, 15, 0, 8, 1, 26, 1, 0, 0]]
    }, {
        "id": "23",
        "position": [{ "id": "0917", "name": "Nicole" }, { "id": "0512", "name": "Jared" }, { "id": "0920", "name": "Danielle" }, { "id": "0811", "name": "John" }],
        "scores": [[0, 0, 0, 13, 0, 0, 22, 26], [17, 2, 24, 4, 26, 17, 0, 26], [5, 0, 0, 6, 26, 5, 2, 26], [4, 24, 2, 3, 26, 4, 2, 0]]
    }, {
        "id": "24",
        "position": [{ "id": "0917", "name": "Nicole" }, { "id": "0811", "name": "John" }, { "id": "1230", "name": "Colter" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[24, 5, 0, 0, 0, 1, 0, 2, 26], [1, 0, 24, 4, 0, 23, 24, 7, 26], [1, 0, 2, 22, 18, 1, 2, 17, 0], [0, 21, 0, 0, 8, 1, 0, 0, 26]]
    }, {
        "id": "25",
        "position": [{ "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }, { "id": "0811", "name": "John" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[24, 18, 4, 4, 0, 0, 14, 7, 15, 26], [1, 3, 0, 1, 16, 1, 8, 15, 0, 26], [1, 5, 15, 16, 6, 25, 4, 0, 9, 0], [0, 0, 7, 5, 4, 0, 0, 4, 2, 26]]
    }, {
        "id": "26",
        "position": [{ "id": "0920", "name": "Danielle" }, { "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }],
        "scores": [[14, 0, 9, 25, 13, 26, 0, 5, 0, 4, 22], [6, 2, 0, 0, 11, 26, 3, 1, 24, 17, 0], [0, 4, 3, 0, 1, 0, 6, 20, 0, 2, 4], [6, 20, 14, 1, 1, 26, 17, 0, 2, 3, 0]]
    }, {
        "id": "27",
        "position": [{ "id": "0811", "name": "John" }, { "id": "0920", "name": "Danielle" }, { "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }],
        "scores": [[8, 15, 0, 0, 11, 7, 26, 0, 0, 0], [14, 7, 2, 0, 2, 0, 0, 17, 19, 26], [3, 4, 7, 19, 0, 15, 26, 7, 3, 26], [1, 0, 17, 7, 13, 4, 26, 2, 4, 26]]
    }, {
        "id": "28",
        "position": [{ "id": "0811", "name": "John" }, { "id": "0920", "name": "Danielle" }, { "id": "1230", "name": "Colter" }, { "id": "0917", "name": "Nicole" }],
        "scores": [[5, 7, 0, 4, 4, 7, 0, 22, 1, 0, 18, 13, 26], [1, 0, 22, 4, 0, 0, 4, 0, 11, 22, 3, 0, 26], [20, 19, 0, 1, 1, 16, 4, 1, 14, 2, 3, 6, 0], [0, 0, 4, 17, 21, 3, 18, 3, 0, 2, 2, 7, 26]]
    }, {
        "id": "29",
        "position": [{ "id": "0917", "name": "Nicole" }, { "id": "0920", "name": "Danielle" }, { "id": "0512", "name": "Jared" }, { "id": "1230", "name": "Colter" }],
        "scores": [[0, 2, 5, 14, 26, 26], [22, 0, 0, 1, 0, 0], [4, 0, 4, 1, 26, 26], [0, 24, 17, 10, 26, 26]]
    }, {
        "id": "30",
        "position": [{ "id": "0920", "name": "Danielle" }, { "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }],
        "scores": [[0, 0, 1, 3, 13, 18, 0, 17, 1, 0, 0], [26, 0, 4, 13, 7, 0, 8, 7, 24, 2, 26], [26, 12, 0, 0, 4, 8, 16, 2, 0, 13, 26], [26, 14, 21, 10, 2, 0, 2, 0, 1, 11, 26]]
    }, {
        "id": "31",
        "position": [{ "id": "1218", "name": "Linda" }, { "id": "0811", "name": "John" }, { "id": "0512", "name": "Jared" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[5, 1, 1, 0, 3, 17, 13, 4, 0, 8, 26], [4, 0, 19, 4, 21, 0, 0, 15, 24, 1, 0], [15, 0, 2, 22, 2, 0, 13, 5, 2, 17, 26], [2, 25, 4, 0, 0, 9, 0, 2, 0, 0, 26]]
    }, {
        "id": "32",
        "position": [{ "id": "0920", "name": "Danielle" }, { "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }, { "id": "0811", "name": "John" }],
        "scores": [[22, 0, 0, 7, 24, 9, 8, 0, 25, 22], [2, 1, 1, 0, 2, 16, 0, 6, 0, 0], [2, 15, 0, 19, 0, 0, 17, 1, 0, 4], [0, 10, 25, 0, 0, 1, 1, 19, 1, 0]]
    }, {
        "id": "33",
        "position": [{ "id": "0811", "name": "John" }, { "id": "1218", "name": "Linda" }, { "id": "0920", "name": "Danielle" }, { "id": "0512", "name": "Jared" }],
        "scores": [[14, 0, 3, 4, 23, 4, 5, 0, 13], [10, 3, 0, 9, 3, 1, 4, 0, 0], [1, 2, 1, 13, 0, 2, 16, 1, 0], [1, 21, 22, 0, 0, 19, 1, 25, 13]]
    }, {
        "id": "34",
        "position": [{ "id": "0512", "name": "Jared" }, { "id": "1218", "name": "Linda" }, { "id": "0920", "name": "Danielle" }, { "id": "0811", "name": "John" }],
        "scores": [[0, 7, 0, 4, 1, 0, 8, 17, 0, 0], [4, 1, 26, 0, 25, 20, 16, 1, 1, 0], [3, 5, 26, 22, 0, 2, 0, 3, 0, 13], [19, 13, 26, 0, 0, 4, 2, 5, 25, 13]]
    }, {
        "id": "35",
        "position": [{ "id": "1218", "name": "Linda" }, { "id": "0811", "name": "John" }, { "id": "0920", "name": "Danielle" }, { "id": "0512", "name": "Jared" }],
        "scores": [[5, 1, 5, 4, 20, 0, 0, 0, 15, 1], [0, 0, 16, 15, 2, 4, 0, 14, 10, 1], [3, 0, 1, 6, 0, 0, 24, 7, 1, 2], [18, 25, 4, 1, 4, 22, 2, 5, 0, 22]]
    }, {
        "id": "36",
        "position": [{ "id": "0518", "name": "Katie" }, { "id": "0512", "name": "Jared" }, { "id": "0811", "name": "John" }, { "id": "0920", "name": "Danielle" }],
        "scores": [[0, 16, 0, 3, 2, 21, 0, 6, 0, 6, 5, 15], [1, 0, 11, 23, 17, 1, 0, 13, 20, 0, 0, 2], [23, 1, 15, 0, 3, 3, 19, 6, 0, 7, 21, 7], [2, 9, 0, 0, 4, 1, 7, 1, 6, 13, 0, 2]]
    }];

    this.getGames = function () {
        return heartsGames;
    };
});

// {"id": "0920", "name": "Danielle"}
// {"id": "0512", "name": "Jared"}
// {"id": "1218", "name": "Linda"}
// {"id": "0811", "name": "John"}
// {"id": "0402", "name": "Isaac"}
// {"id": "0518", "name": "Katie"}
// {"id": "0917", "name": "Nicole"}
// {"id": "1230", "name": "Colter"}
// {"id": "1206", "name": "Jess"}
'use strict';

angular.module('hearts').controller('mainCtrl', function ($scope, $stateParams, playerService, gameService) {

  $scope.name = "Hearts";
  $scope.players = playerService.getPlayers();
  $scope.games = gameService.getGames();

  $scope.scoreSum = function (array) {
    return array.reduce(function (a, b) {
      return a + b;
    });
  };

  $scope.cardNum = function (string) {
    return string.charAt(0);
  };
});
'use strict';

angular.module('hearts').service('playerService', function () {

  var heartsPlayers = [{ "id": "0512", "name": "Jared" }, { "id": "0402", "name": "Isaac" }, { "id": "0518", "name": "Katie" }, { "id": "0811", "name": "John" }, { "id": "1218", "name": "Linda" }, { "id": "0920", "name": "Danielle" }, { "id": "0917", "name": "Nicole" }, { "id": "1230", "name": "Colter" }, { "id": "1206", "name": "Jess" }];

  this.getPlayers = function () {
    return heartsPlayers;
  };
});