'use strict';


angular.module('superTeamBbApp')
  

   /**
    * @ngdoc service
    * @name superTeamBbApp.CommonDatahub
    * @description
    * # CommonDatahub
    * Service used to fetch information for various modules
    * @requires  $q Dependencies in Service
    * @requires $http  Dependencies in Service
    */

  .factory('CommonDatahub', function ($http, $q, $timeout) {
    var loggedIn, email, pass, garageDetails, garageList;
    
    return {

      /**
       * @ngdoc function
       * @name superTeamBbApp.CommonDatahub#auth
       * @methodOf superTeamBbApp.CommonDatahub
       * @description
       * # auth
       * This dummy services ehich returns promise if email/password matches with localstorage details
       * @returns {object} Returns boolean value 
       */

      auth : function(login){

        return $q(function(resolve, reject){
          var loginObj = JSON.parse(localStorage.getItem('loginObject'));
          $timeout(function() {
            email = login.email === loginObj.email ? 'email' : 'error';
            pass = login.password === loginObj.password ? 'pass' : 'error';
            var res = (login.email === loginObj.email && login.password === loginObj.password);
            if(res){
              resolve(true);
            }else{
              reject(false);
            }
          }, 1000);

        });

      },
      /**
       * @ngdoc function
       * @name superTeamBbApp.CommonDatahub#getLoggedInDet
       * @methodOf superTeamBbApp.CommonDatahub
       * @description
       * # getLoggedInDet
       * This method returns whether the user is successfully logged in or not
       * @returns {object} Returns boolean value 
       */
      getLoggedInDet : function(){
        return loggedIn;
      },

      setLoggedInDet : function(d){
        loggedIn = d;
      },
      /**
       * @ngdoc function
       * @name superTeamBbApp.CommonDatahub#getSpecificError
       * @methodOf superTeamBbApp.CommonDatahub
       * @description
       * # getSpecificError
       * This method returns whether the user is successfully logged in or not
       * @returns {object} Return object with specific failure of username or password 
       */
      getSpecificError : function(){
        return {email:email,pass:pass};
      },
      setGarages : function(g){
        garageList = g;
      },
      getGarages : function(){
        return garageList;
      },
      getGaragesList : function(){
        return $http({
          method: 'GET',
          url : 'http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25'
        }).then(
          function(response) {
            return response.data.features;
          },
          function(error) {
            return $q.reject(error);
          }
        );
      },
      setGarageDetails : function(g){
        garageDetails = g;
      },
      getGarageDetails : function(){
        return garageDetails;
      }
    }
  })