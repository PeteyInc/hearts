angular.module('hearts').service('playerService', function() {

  var heartsPlayers = [
    {"id": "0512", "name": "Jared"},
    {"id": "0402", "name": "Isaac"},
    {"id": "0518", "name": "Katie"},
    {"id": "0811", "name": "John"},
    {"id": "1218", "name": "Linda"},
    {"id": "0920", "name": "Danielle"},
    {"id": "0917", "name": "Nicole"},
    {"id": "1230", "name": "Colter"},
    {"id": "1206", "name": "Jess"}
    ];

    this.getPlayers = function() {
      return heartsPlayers;
    };

});
