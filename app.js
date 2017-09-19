var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$log', '$scope', '$timeout', '$filter', '$http',
  function ($log, $scope, $timeout, $filter, $http) {
    $scope.nick = 'Michal';
    $scope.newRules = [];
    $scope.newRule;
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
        console.log(response.data);
        $scope.users = response.data;
      })
      .catch(function(data, status) {
        console.log(data);
        console.log(status);
      })
    
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



