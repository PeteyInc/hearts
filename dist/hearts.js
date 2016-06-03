'use strict';

angular.module('hearts', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('hearts').controller('mainCtrl', function ($scope) {

  $scope.name = "Hearts";
});