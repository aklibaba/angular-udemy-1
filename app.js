var myApp = angular.module('myApp', ['ngMessages', 'ngResource', 'ngRoute']);

myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'secondController'
    })
    .when('/second', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })
}]);

myApp.controller('mainController', ['$log', '$scope', '$timeout', '$filter', '$http', '$location',
  function ($log, $scope, $timeout, $filter, $http, $location) {
    $scope.nick = 'Michal';
    $scope.newRules = [];
    $scope.newRule = '';
    $scope.submit = function () {
      console.log('submitted');
      $scope.newRules.push($scope.newRule)
    };
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

    // traditionalXhr($scope,root);

    /**
     * @function angular.$http
     */
    $http.get(root + '/users')
      .then(function (response) {
        $scope.users = response.data;
      })
      .catch(function (data, status) {
        console.log(data);
        console.log(status);
      })

    $log.info('path', $location.path());

  }]);

myApp.controller('secondController', ['$log', '$scope', '$timeout', '$filter', '$http',
  function ($log, $scope, $timeout, $filter, $http) {
  console.log('second controller called');
    $scope.nick = 'alexoo';
  }]);

function traditionalXhr($scope, root) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      $scope.$apply(function () {
        $scope.users = JSON.parse(xhr.responseText);
      })
    }
  };
  xhr.open("GET", root + '/users', true);
  xhr.send();
}

window.addEventListener('hashchange', function () {

  if (window.location.hash === '#/bookmark/1') {
    console.log('Loaded page 1');
  }
});





