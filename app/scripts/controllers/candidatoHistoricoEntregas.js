'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('CandidatoHistoricoEntregasCtrl', function ($scope, $location) {

    $scope.itemsByPage = 10;

  	$scope.resultData = {
  		id: 123456,
  		nomeUrna: 'AÉCIO NEVES',
  		foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000085.jpg?x=1415304600000280000000085',
  		numero: 45,
  		candidatura: 'Presidente',
  		cnpj: '20572776000193',
  		situacaoPosPleito: 'Não eleito',
  		partido: 'Partido da Social Democracia Brasileira',
  		vicesSuplentes: [
  			{
  				id: 432165,
  				nome: 'ALOYSIO NUNES FERREIRA FILHO'
  			}
  		],
      historico: [
        {data: '01/01/2016', tipoEntrega: 'Exemplo', retificadora: 'Sim', numeroControle: 123456789},
        {data: '01/12/2016', tipoEntrega: 'Exemplo', retificadora: 'Não', numeroControle: 456789123},
        {data: '01/11/2016', tipoEntrega: 'Exemplo', retificadora: 'Não', numeroControle: 123852963},
        {data: '01/10/2016', tipoEntrega: 'Exemplo', retificadora: 'Não', numeroControle: 741852963},
        {data: '01/09/2016', tipoEntrega: 'Exemplo', retificadora: 'Não', numeroControle: 789456123},
        {data: '01/08/2016', tipoEntrega: 'Exemplo', retificadora: 'Não', numeroControle: 897654321},
        {data: '01/07/2016', tipoEntrega: 'Exemplo', retificadora: 'Não', numeroControle: 654321654},
        {data: '01/06/2016', tipoEntrega: 'Exemplo', retificadora: 'Não', numeroControle: 951878798},
      ]
  	};

  	$scope.init = function() {
      
  	};

    $scope.irParaPaginaInicial = function() {
      $location.path('/');
    };

    $scope.irParaCandidato = function(id) {
      $location.path('/candidato');
    };

  });
