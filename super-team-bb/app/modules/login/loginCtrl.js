'use strict';

/**
 * @ngdoc function
 * @name superTeamBbApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the superTeamBbApp
 */
angular.module('superTeamBbApp')
  .controller('LoginCtrl', function ($scope, CommonDatahub, $location) {
    $scope.moduleName = "login";

    /**
     * @ngdoc function
     * @name fn_login
     * @methodOf superTeamBbApp.controller:LoginCtrl
     * @description
     * This method is when user hits the login button in oredr to login to the application
     */

    $scope.fn_login = function () {  
        var userObj = {
            'email' : $scope.email,
            'password' : $scope.password
        };

        CommonDatahub.auth(userObj).then(function(d){
            
            $scope.loggedIn = true;
            CommonDatahub.setLoggedInDet(true);
            CommonDatahub.getGaragesList().then(function(res){
                CommonDatahub.setGarages(res);
                $location.path( "/dashboard" );
            },function(err){
                $location.path( "/login" );
            });
        },function(e){
            $scope.specificError = CommonDatahub.getSpecificError();
            $scope.loggedIn = false;
        });
    };
  })
