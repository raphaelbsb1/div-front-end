'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('MainCtrl', ['$scope', '$location',  '$log', 
	'$uibModal', 'AnosEleitorais', 'Template', 
  	 function($scope, $location, $log, $uibModal, AnosEleitorais, Template) {

  	$scope.Template = Template;

  	$scope.buscar = function() {
  		$location.path('/busca');
  	};

  	$scope.irParaEstado = function(id) {
  		$location.path('/estados');
  	};  	



  $scope.open = function (uf) {
    var modalInstance = $uibModal.open({
      templateUrl: 'modalMunicipios',
      controller: 'ModalMunicipioCtrl',
      resolve: {
        municipios: function () {
          return $scope.municipios;
        },
        uf:function () {
          return uf;
        }
      }
    });


    modalInstance.result.then(function (itemSelecionado) {
      $scope.municipio = itemSelecionado;
    });
  };
	

  $scope.municipios = [
  {nome: 'Abaíra'},
  {nome: 'Abaré'},
  {nome: 'Acajutiba'},
  {nome: 'Adustina'},
  {nome: 'Água Fria'},
  {nome: 'Aiquara'},
  {nome: 'Alagoinhas'},
  {nome: 'Alcobaça'},
  {nome: 'Amélia Rodrigues'},
  {nome: 'Almadina'},
  {nome: 'Amargosa'},
  {nome: 'América Dourada'},
  {nome: 'Anagé'},
  {nome: 'Andaraí'},
  {nome: 'Andorinha'},
  {nome: 'Angical'},
  {nome: 'Anguera'},
  {nome: 'Antas'},
  {nome: 'Antônio Cardoso'},
  {nome: 'Antônio Gonçalves'},
  {nome: 'Aporá'},
  {nome: 'Apuarema'},
  {nome: 'Araçás'},
  {nome: 'Aracatu'},
  {nome: 'Araci'},
  {nome: 'Aramari'},
  {nome: 'Arataca'},
  {nome: 'Aratuípe'},
  {nome: 'Aurelino Leal'},
  {nome: 'Barreiras'},
  {nome: 'Bom Jesus da Lapa'},
  {nome: 'Brumado'},
  {nome: 'Baianópolis'},
  {nome: 'Baixa Grande'},
  {nome: 'Banzaê'},
  {nome: 'Barra'},
  {nome: 'Barra da Estiva'},
  {nome: 'Barra do Choça'},
  {nome: 'Barra do Mendes'},
  {nome: 'Barra do Rocha'},
  {nome: 'Barro Alto'},
  {nome: 'Barro Preto'},
  {nome: 'Barrocas'},
  {nome: 'Belmonte'},
  {nome: 'Belo Campo'},
  {nome: 'Biritinga'},
  {nome: 'Boa Nova'},
  {nome: 'Boa Vista do Tupim'},
  {nome: 'Bom Jesus da Serra'},
  {nome: 'Boninal'},
  {nome: 'Bonito'},
  {nome: 'Boquira'},
  {nome: 'Botuporã'},
  {nome: 'Brejões'},
  {nome: 'Brejolândia'},
  {nome: 'Brotas de Macaúbas'},
  {nome: 'Buerarema'},
  {nome: 'Buritirama'},
  {nome: 'Caculé'},
  {nome: 'Camaçari'},
  {nome: 'Cruz das Almas'},
  {nome: 'Candeias'},
  {nome: 'Casa Nova'},
  {nome: 'Caatiba'},
  {nome: 'Cabaceiras do Paraguaçu'},
  {nome: 'Cachoeira'},
  {nome: 'Caém'},
  {nome: 'Caetanos'},
  {nome: 'Caetité'},
  {nome: 'Cafarnaum'},
  {nome: 'Cairu'},
  {nome: 'Caldeirão Grande'},
  {nome: 'Camacan'},
  {nome: 'Camamu'},
  {nome: 'Campo Formoso'},
  {nome: 'Campo Alegre de Lourdes'},
  {nome: 'Canápolis'},
  {nome: 'Canarana'},
  {nome: 'Canavieiras'},
  {nome: 'Candeal'},
  {nome: 'Candiba'},
  {nome: 'Cândido Sales'},
  {nome: 'Cansanção'},
  {nome: 'Canudos'},
  {nome: 'Capela do Alto Alegre'},
  {nome: 'Capim Grosso'},
  {nome: 'Caraíbas'},
  {nome: 'Caravelas'},
  {nome: 'Cardeal da Silva'},
  {nome: 'Carinhanha'},
  {nome: 'Castro Alves'},
  {nome: 'Catolândia'},
  {nome: 'Catu'},
  {nome: 'Caturama'},
  {nome: 'Central'},
  {nome: 'Chorrochó'},
  {nome: 'Cícero Dantas'},
  {nome: 'Cipó'},
  {nome: 'Coaraci'},
  {nome: 'Cocos'},
  {nome: 'Conceição da Feira'},
  {nome: 'Conceição do Almeida'},
  {nome: 'Conceição do Coité'},
  {nome: 'Conceição do Jacuípe'},
  {nome: 'Conde'},
  {nome: 'Condeúba'},
  {nome: 'Contendas do Sincorá'},
  {nome: 'Coração de Maria'},
  {nome: 'Cordeiros'},
  {nome: 'Coribe'},
  {nome: 'Coronel João Sá'},
  {nome: 'Correntina'},
  {nome: 'Cotegipe'},
  {nome: 'Cravolândia'},
  {nome: 'Crisópolis'},
  {nome: 'Cristópolis'},
  {nome: 'Cruz das Almas'},
  {nome: 'Curaçá'},
  {nome: 'Dário Meira'},
  {nome: 'Dom Basílio'},
  {nome: 'Dom Macedo Costa'}
];  

}]);







