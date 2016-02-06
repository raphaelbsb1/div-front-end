'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('CandidatoConcentracaoGastosCtrl', function ($scope, $location) {

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
      gastos: [
        {nome: 'Eventos', percentual: '60%', quantidade: 48, valor: '8300000000'},
        {nome: 'Material de Campanha', percentual: '27%', quantidade: 262, valor: '1900000000'},
        {nome: 'Colaboradores', percentual: '11%', quantidade: 12, valor: '120000000'},
        {nome: 'Viagens', percentual: '8%', quantidade: 123, valor: '800000000'},
        {nome: 'Brindes', percentual: '3%', quantidade: 4856, valor: '400000000'},
        {nome: 'Doações', percentual: '1%', quantidade: 6, valor: '80000000'},
        {nome: 'Faixas', percentual: '1%', quantidade: 57, valor: '4500000'},
        {nome: 'Transporte', percentual: '1%', quantidade: 668, valor: '400000'},
        {nome: 'Taxi', percentual: '1%', quantidade: 29, valor: '350000'},
        {nome: 'Hospedagem', percentual: '1%', quantidade: 16, valor: '290000'},
        {nome: 'Pipoca', percentual: '1%', quantidade: 9, valor: '200000'}
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
