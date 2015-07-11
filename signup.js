var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope){
  $scope.master = {};
  $scope.user = {};
  $scope.minLength = 2;
  $scope.submit = function() {
    alert('Name: ' + $scope.user.name + '   Email:' + $scope.user.email);
    $scope.user = angular.copy($scope.master);
  };
});