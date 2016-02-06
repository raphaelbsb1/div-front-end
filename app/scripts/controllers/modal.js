'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */

var modalControllers = angular.module('modalControllers', []);

modalControllers.controller('ModalMunicipioCtrl', ['$scope', '$uibModalInstance', 'municipios', 'uf',
  	 function($scope, $uibModalInstance, municipios, uf) {

  $scope.municipios = municipios;
  $scope.uf = uf;
  $scope.selected = {
    item: $scope.municipios[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);







