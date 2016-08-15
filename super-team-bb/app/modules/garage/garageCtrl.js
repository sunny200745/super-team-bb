'use strict';

/**
 * @ngdoc function
 * @name superTeamBbApp.controller:GarageCtrl
 * @description
 * # GarageCtrl
 * Controller of the superTeamBbApp
 */
angular.module('superTeamBbApp')
  .controller('GarageCtrl', function ($scope, CommonDatahub, $location) {
    
    $scope.garageInit = function(){
    	if(!CommonDatahub.getLoggedInDet()){
    		$location.path( "/login" );
    	}else{
    		$scope.moduleName = "garage";
    		$scope.details = CommonDatahub.getGarageDetails();
    		$scope.spaceDetails = $scope.details.properties.layers['parking.garage'].data;
    		var cords = new google.maps.LatLng($scope.details.geometry.coordinates[1],$scope.details.geometry.coordinates[0]);

    		$scope.generateMap = function(){
	    		var settings = {
	    		  center:cords,
	    		  zoom:14,
	    		  mapTypeId:google.maps.MapTypeId.ROADMAP
	    		  };
	    		var map = new google.maps.Map(document.getElementById("map"),settings);
	    		var marker = new google.maps.Marker({
	    		   position:cords,
	    		});
	    		marker.setMap(map);
    		}
    		$scope.generateMap();
    	}
    }


  });




