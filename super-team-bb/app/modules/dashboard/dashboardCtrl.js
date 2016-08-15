'use strict';

/**
 * @ngdoc function
 * @name superTeamBbApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the superTeamBbApp
 */
angular.module('superTeamBbApp')
  .controller('DashboardCtrl', function ($scope, CommonDatahub, $location) {
    
    /**
     * @ngdoc function
     * @name dashBoardInit
     * @methodOf superTeamBbApp.controller:DashboardCtrl
     * @description
     * This method is called as soon as dashboard controller initalizes, 
     * It redirects to login page if loggedIn details are not set, else set it to Dashboard only
     */
    $scope.dashBoardInit = function(){
    	if(!CommonDatahub.getLoggedInDet()){
    		$location.path( "/login" );
    	}else{
    		$scope.moduleName = "dashboard";

    		$scope.loggedIn = CommonDatahub.getLoggedInDet();
            $scope.garageList = CommonDatahub.getGarages()
    	}
    };


    $scope.openGarageDetails = function(g){
        CommonDatahub.setGarageDetails(g);
        $location.path( "/garage/list/"+g.properties.cdk_id );
    };
    
    
  });
