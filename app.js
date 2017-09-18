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

    $scope.users = [];

    var root = 'https://jsonplaceholder.typicode.com';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        $scope.$apply(function () {
          $scope.users = JSON.parse(xhr.responseText);
        })
      }
    };
    xhr.open("GET", root + '/users', true);
    xhr.send();

  } ]);



