angular.module("weatherApp").controller("weatherCtrl", function($scope, weatherService){

  $scope.getWeatherData = weatherService.getWeatherApi().then(function(results){
    $scope.weather = results;
  })



})


  
