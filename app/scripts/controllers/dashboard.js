'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('DashboardCtrl', function ($scope, $location) {

  	$scope.irParaPaginaInicial = function() {
      $location.path('/');
    };
    
  });
