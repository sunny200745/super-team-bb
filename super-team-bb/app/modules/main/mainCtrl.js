'use strict';

/**
 * @ngdoc function
 * @name superTeamBbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the superTeamBbApp
 */
angular.module('superTeamBbApp')
  .controller('MainCtrl', function ($scope, $location, CommonDatahub, $rootScope) {
    $scope.moduleName = "main";
    $scope.header = "/modules/common/header.html";
    $scope.footer = "/modules/common/footer.html";
    $rootScope.loadingFinshed = true;

    // $scope.openGarage = function(){
    //     $scope.showAlert = true;
    //     $setTimeout(function() {
    //         $scope.showAlert = false;
    //         $location.path( "/garage" );
    //     }, 1000);
    		
    // };
    $scope.openDashboard = function(){
    	$location.path( "/dashboard" );	
    };
    $scope.logout = function(){
    	localStorage.clear();
    	$location.path( "/login" );
    	$scope.loggedIn = false;
    	
    	var login={'email':'b@b.com','password':'b'}
      	localStorage.setItem('loginObject',JSON.stringify(login));
    };

    $scope.$watch(function(){
        return CommonDatahub.getLoggedInDet()
    },function(newV,oldV){
        $scope.loggedIn = newV;
    });

  })
