'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('CandidatoNfesCtrl', function ($scope, $location) {

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
        {id: 1, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '1234567489123456789123456789123456789', link: ''},
        {id: 2, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '', link: 'http://www.globo.com'},
        {id: 3, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '1234567489123456789123456789123456789', link: ''},
        {id: 4, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '', link: 'http://www.globo.com'},
        {id: 5, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '1234567489123456789123456789123456789', link: ''},
        {id: 6, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '', link: 'http://www.globo.com'},
        {id: 7, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '1234567489123456789123456789123456789', link: ''},
        {id: 8, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '1234567489123456789123456789123456789', link: ''},
        {id: 9, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '', link: 'http://www.globo.com'},
        {id: 10, cnpjEmitente: '01002003000104', naturezaOperacao: 'SERV', modelo: '55', dataEmissao: '01/01/2016', numeroNF: '8812', numeroSerie: '001', valor: '60.000,00', UE: 'DF', unidadeArrecadadora: 'SEFAZ DF', eu: 'Distrito Federal', chave: '1234567489123456789123456789123456789', link: ''}
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
