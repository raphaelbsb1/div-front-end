'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:ModalMunicipioCtrl
 * @description
 * # ModalMunicipioCtrl
 * Controller of the divulgaApp
 */

var modalControllers = angular.module('modalControllers', []);

modalControllers.controller('ModalMunicipioCtrl', ['$scope', '$uibModalInstance', 
  'municipios', 'uf', function($scope, $uibModalInstance, municipios, uf) {

  $scope.municipios = municipios;
  $scope.uf = uf;

  $scope.selecaoMunicipio = function (itemSelecionado) {
    $scope.municipio = itemSelecionado;
    $uibModalInstance.close($scope.municipio);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);







