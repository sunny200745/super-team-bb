'use strict';

/**
 * @ngdoc overview
 * @name superTeamBbApp
 * @description
 * # superTeamBbApp
 *
 * Main module of the application.
 */
angular
  .module('superTeamBbApp', [
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider ) {
    
    $urlRouterProvider.otherwise("/");
    // Now set up the states
    $stateProvider
      .state('login', {
        url: "/",
        templateUrl: "modules/login/login.html",
        controller: 'LoginCtrl'
      })
      .state('dashboard', {
        url: "/dashboard",
        templateUrl: "modules/dashboard/dashboard.html",
        controller: 'DashboardCtrl'
      })
      .state('garage', {
        url: "/garage",
        abstract: true,
        template: '<ui-view/>',
      })
      .state('garage.list', {
        url: "/list/:garegeId",
        templateUrl: "modules/garage/garage.html",
        controller: 'GarageCtrl'
      })
      $urlRouterProvider.otherwise('/');

      var login={'email':'b@b.com','password':'b'}
      localStorage.setItem('loginObject',JSON.stringify(login));

      
  
  });
