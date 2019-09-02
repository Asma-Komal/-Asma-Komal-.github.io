var app = angular.module('demo', []);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/one', {
    templateUrl:'page1.html'
  })
  .when('/two', {
    templateUrl:'page2.html'
  })
  .otherwise({
    redirectTo:'/one'
  });
});

app.controller('MainCtrl', function($scope, $rootScope, $location) {

  var styles = {
    // appear from right
    front: '.enter-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all;   -webkit-transform:translate3d(100%,0,0)  }  .enter-setup.enter-start {   position:absolute;  -webkit-transform:translate3d(0,0,0)}  .leave-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all;   -webkit-transform:translate3d(0,0,0)} .leave-setup.leave-start {   position:absolute;  -webkit-transform:translate3d(-100%,0,0) };',
    // appear from left
    back: '.enter-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all; -webkit-transform:translate3d(-100%,0,0)}  .enter-setup.enter-start {   position:absolute;   -webkit-transform:translate3d(0,0,0) }  .leave-setup {   position:absolute;   -webkit-transition: 0.5s ease-out all;  -webkit-transform:translate3d(0,0,0)} .leave-setup.leave-start {   position:absolute;  -webkit-transform:translate3d(100%,0,0) };'
  };
  
  $scope.direction = function(dir) {
    // update the animations classes
    $rootScope.style = styles[dir];
  }

  $scope.go = function(path) {
    $location.path(path);
  }
  $scope.direction('front');
});
