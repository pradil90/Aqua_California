(function(){
var app = angular.module('Map_mainModule', ['ngRoute'])

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Drought_Analysis', {
        templateUrl: '/MapGraph1',
        controller: 'MainMapController'
      }).
      when('/bubble1', {
        templateUrl: '/preciptation_graph',
        controller: 'ShowOrdersController'
      }).
      when('/bubble2', {
        templateUrl: '/water_usage',
        controller: 'ShowOrdersController'
      }).
      when('/bubble3', {
        templateUrl: '/temperature',
        controller: 'ShowOrdersController'
      }).
      when('/bubble4', {
        templateUrl: '/population_growth',
        controller: 'ShowOrdersController'
      }).
      when('/bubble5', {
        templateUrl: '/reservoirLevels',
        controller: 'ShowOrdersController'
      }).
      when('/bubble6', {
        templateUrl: '/PDSI',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/Drought_Analysis'
      }); 
  }]);
      

  app.controller("MainMapController", [ '$http', '$scope', function ($http,$scope)
  {
 
 var mainModule =this;
    mainModule.products = [ ];


    var data = {

                    "side1": "dashboard",
                    "side2": "Water Flow",
                    "side3": "Drought Monitor",
                    "side4": "Reservoir Levels",
                    "side5": "Water Consumption",
                    "side6": "Water Management",
                    "side7": "Facts and Information",
                    "side8": "Data Models",
                    "side9": "application Configuration",
                    "side10":"Enter Keywords",
                    "side11":"Home",
                    "side12":"About Us",
                    "side13":"Management",
                    "side14":"Pricing",
                    "side15":"Service Request",
                    "side16":"Registration",
                    "side17":"Contact Us",
                    "side18":"Dashboard",
                    "side19":"San Jose",
                    "side20":"Water Exhaustion",
                    "side21":"Temperature Variations",
                    "side22":"Climate Domain",
                    "side23":"Water Donor",
                    "side24":"Reservoir Data",
                    "side25":"Water Consumption",
                    "side26":"Indutrial Usage",
                    "side27":"Domestic Usage",
                    "side28":"Precipitation by Regions"
                    


                    
                };
mainModule.products = data;




        $scope.click = function() {
                    $http.get('/Eng_lang.json').success(function(data){


                                mainModule.products = data;
                                // alert(mainModule.products.side1);

                            });

                };

        $scope.click1 = function() {
        $http.get('/French_lang.json').success(function(data){


                    mainModule.products = data;
                    // alert(mainModule.products.side1);

                });

    };


         $scope.click2 = function() {
        $http.get('/Chin_lang.json').success(function(data){


                    mainModule.products = data;
                    // alert(mainModule.products.side1);

                });

    };



 } ]);


app.controller('AddOrderController', function($scope) {
     
    $scope.message = 'This is Add new order screen';

     var mainModule =this;
    mainModule.products = [ ];


    var data = {

                    "side1": "dashboard",
                    "side2": "Water Flow",
                    "side3": "Drought Monitor",
                    "side4": "Reservoir Levels",
                    "side5": "Water Consumption",
                    "side6": "Water Management",
                    "side7": "Facts and Information",
                    "side8": "Data Models",
                    "side9": "application Configuration",
                    "side10":"Enter Keywords",
                    "side11":"Alice Home",
                    "side12":"About Us",
                    "side13":"Management",
                    "side14":"Pricing",
                    "side15":"Service Request",
                    "side16":"Registration",
                    "side17":"Contact Us",
                    "side18":"Dashboard",
                    "side19":"San Jose",
                    "side20":"Water Exhaustion",
                    "side21":"Temperature Variations",
                    "side22":"Climate Domain",
                    "side23":"Water Donor",
                    "side24":"Reservoir Data",
                    "side25":"Water Consumption",
                    "side26":"Indutrial Usage",
                    "side27":"Domestic Usage",
                    "side28":"Precipitation by Regions"
                    


                    
                };
mainModule.products = data;
     
});
 
 
app.controller('ShowOrdersController', function($scope) {
 
    $scope.message = 'This is Show orders screen';
 
});




}) ();
  






