'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('CandidatoExtratosCtrl', function ($scope, $location) {

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
      extratos: [
        {id: 1, data: '01/01/2016', historico: 'DEPOSITO ONLINE', numeroDocumento: '012345678912345', operacao: 'DEPÓSITOS', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'C', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'},
        {id: 2, data: '01/01/2016', historico: 'CHEQUE COMPENSADO', numeroDocumento: '012345678912345', operacao: 'CHEQUES', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'D', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'},
        {id: 3, data: '01/01/2016', historico: 'TARIFA DE EXTRATO', numeroDocumento: '012345678912345', operacao: 'TARIFAS', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'D', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'},
        {id: 4, data: '01/01/2016', historico: 'DEPOSITO ONLINE', numeroDocumento: '012345678912345', operacao: 'DEPÓSITOS', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'C', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'},
        {id: 5, data: '01/01/2016', historico: 'DEPOSITO ONLINE', numeroDocumento: '012345678912345', operacao: 'DEPÓSITOS', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'C', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'},
        {id: 6, data: '01/01/2016', historico: 'SAQUE COM CARTÃO', numeroDocumento: '012345678912345', operacao: 'SAQUE ELETRÔNICO', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'D', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'},
        {id: 7, data: '01/01/2016', historico: 'DEPOSITO ONLINE', numeroDocumento: '012345678912345', operacao: 'DEPÓSITOS', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'C', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'},
        {id: 8, data: '01/01/2016', historico: 'CHEQUE PAGO EM OUTRA AGÊNCIA', numeroDocumento: '012345678912345', operacao: 'SAQUE ELETRÔNICO', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'D', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'},
        {id: 9, data: '01/01/2016', historico: 'DEPOSITO ONLINE', numeroDocumento: '012345678912345', operacao: 'DEPÓSITOS', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'C', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'},
        {id: 10, data: '01/01/2016', historico: 'CHEQUE COMPENSADO', numeroDocumento: '012345678912345', operacao: 'CHEQUES', cpfCnpjContraparte: '00100200304', valor: 1500000, creditoDebito: 'D', nBanco: '001', nomeBanco: 'Banco do Brasil', agencia: '1236', conta: '12345678'}
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
