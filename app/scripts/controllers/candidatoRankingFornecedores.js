'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('CandidatoRankingFornecedoresCtrl', function ($scope, $location) {

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
      doadores: [
        {nome: 'Cyrela Brazil Realty', percentual: '53%', cnpj: '01.002.003/0001-04', valor: '120000000'},
        {nome: 'Gol Transportes Aéreos', percentual: '23%', cnpj: '01.002.003/0001-04', valor: '69000000'},
        {nome: 'Lojas Americanas', percentual: '9%', cnpj: '01.002.003/0001-04', valor: '53000000'},
        {nome: 'MRV Engenharia', percentual: '7%', cnpj: '01.002.003/0001-04', valor: '51000000'},
        {nome: 'Andrade Gutierrez', percentual: '5%', cnpj: '01.002.003/0001-04', valor: '37000000'},
        {nome: 'Montana Express', percentual: '3%', cnpj: '01.002.003/0001-04', valor: '32000000'},
        {nome: 'DELL Computadores', percentual: '1%', cnpj: '01.002.003/0001-04', valor: '2900000'},
        {nome: 'AOC Monitores', percentual: '1%', cnpj: '01.002.003/0001-04', valor: '2500000'}
      ],
      totalGasto: 50000000000
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
