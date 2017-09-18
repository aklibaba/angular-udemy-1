var myApp = angular.module('myApp', [ 'ngMessages', 'ngResource' ]);

myApp.controller('mainController', [ '$log', '$scope', '$timeout', '$filter',
  function ($log, $scope, $timeout, $filter) {
    $scope.nick = 'Michal';
    $scope.lcNick = function () {
      return $filter('lowercase')($scope.nick);
    };


    setTimeout(function () {
      $scope.$apply(function () {
        $scope.nick = 'Peter';
      });
    }, 3000);

    $scope.rules = [
      {rulename: 'a'},
      {rulename: 'bb'},
      {rulename: 'ccc'}
    ];
    $log.log($scope.rules);

  } ]);
