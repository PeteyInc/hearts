angular.module('hearts').service('gameService', function() {

  var heartsGames = [
    {"id": "1",
      "position": [{"id": "0920", "name": "Danielle"}, {"id": "0512", "name": "Jared"}, {"id": "1218", "name": "Linda"}, {"id": "0811", "name": "John"}],
      "scores": [
        [7,13,6,0,0,5,0,4,13,22,2,5],
        [13,1,1,4,7,6,3,5,0,4,3,0],
        [1,11,19,8,0,2,2,0,0,5,0,2,5],
        [5,1,0,14,19,13,3,17,8,0,19,16]
      ]},
    {"id": "2",
      "position": [{"id": "1218", "name": "Linda"}, {"id": "0512", "name": "Jared"}, {"id": "0920", "name": "Danielle"}, {"id": "0811", "name": "John"}],
      "scores": [
        [1,26,1,0,2,0,9,9,13,0,0],
        [0,0,25,0,20,13,0,2,13,18,25],
        [2,26,0,4,4,11,17,1,0,8,1],
        [23,26,0,22,0,2,0,14,0,0,0]
      ]}
    ];

    this.getGames = function() {
      return heartsGames;
    };

});
//
// ,
// {"id": "0402", "name": "Isaac"},
// {"id": "0518", "name": "Katie"},
// ,
// ,
// ,
// {"id": "0917", "name": "Nicole"},
// {"id": "1230", "name": "Colter"},
// {"id": "1206", "name": "Jess"}
