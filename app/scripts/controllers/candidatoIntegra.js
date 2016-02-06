'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('CandidatoIntegraCtrl', function ($scope, $routeParams, $location) {

    $scope.title = '';
    $scope.type = '';

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
  		integra: [
        {id: 1, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'},
	  		{id: 2, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'},
	  		{id: 3, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'},
	  		{id: 4, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'},
	  		{id: 5, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'},
	  		{id: 6, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'},
	  		{id: 7, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'},
	  		{id: 8, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'},
	  		{id: 9, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'},
	  		{id: 10, nome: 'Carlos Eduardo Almeida', cpf: '001.002.003-04', nomeOriginario: 'Wander Gomes Pereira', cpjOriginario: '987.654.321-00', reciboEleitoral: '00123456789000', numeroDocumento: 444566678, data: '01/01/2014', valor: 10000000, tipoEspecie: 'Transferência Eletrônica'}
  		]
  	};

  	$scope.init = function() {
      $scope.type = $routeParams.type;
      
      if ($routeParams.type === 'receitas') {
        $scope.title = 'Receitas';
      }

      if ($routeParams.type === 'despesas') {
        $scope.title = 'Despesas';
      }
  	};

    $scope.irParaPaginaInicial = function() {
      $location.path('/');
    };

    $scope.irParaCandidato = function(id) {
      $location.path('/candidato');
    };

  });