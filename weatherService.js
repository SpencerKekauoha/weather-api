angular.module("weatherApp").service("weatherService", function($http, $q){

  this.getWeatherApi = function(){
    console.log("working1");
    var baseUrl = "http://api.openweathermap.org/data/2.5/group?id=4047656&units=imperial&APPID=f6b253d91f09a01c556e587e81b62bbd";
    return $http ({
      method: "GET",
      url: baseUrl
    }).then(function(serverResponse){
      console.log("working2");
      var response = serverResponse.data;
      console.log(response);
      return response;
    })
  }


})
