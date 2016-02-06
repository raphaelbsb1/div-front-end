'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('CandidatoRankingDoadoresCtrl', function ($scope, $location) {

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
        {nome: 'Paulo Aurelio Lemos', percentual: '53%', cpf: '001.002.003-04', valor: '120000000'},
        {nome: 'Maria Cecilia Santana', percentual: '23%', cpf: '001.002.003-04', valor: '69000000'},
        {nome: 'Carlos Eduardo Sobral', percentual: '9%', cpf: '001.002.003-04', valor: '53000000'},
        {nome: 'Wander Gomes Oliveira', percentual: '7%', cpf: '001.002.003-04', valor: '51000000'},
        {nome: 'Leonardo Aparicio Mendes', percentual: '5%', cpf: '001.002.003-04', valor: '37000000'},
        {nome: 'Ivan Gondin Ribeiro', percentual: '3%', cpf: '001.002.003-04', valor: '32000000'},
        {nome: 'Cacilda Morais da Silva', percentual: '1%', cpf: '001.002.003-04', valor: '2900000'},
        {nome: 'Cristiano Arruda Azevedo', percentual: '1%', cpf: '001.002.003-04', valor: '2500000'},
        {nome: 'Cleber Mario Jesus', percentual: '1%', cpf: '001.002.003-04', valor: '1900000'},
        {nome: 'Diego Souza Santos', percentual: '1%', cpf: '001.002.003-04', valor: '1000000'},
        {nome: 'Wander Gomes Oliveira', percentual: '1%', cpf: '001.002.003-04', valor: '900000'},
        {nome: 'Leoando Carvalho Xuxa', percentual: '1%', cpf: '001.002.003-04', valor: '800000'},
        {nome: 'Luiz Alberto Mendes', percentual: '1%', cpf: '001.002.003-04', valor: '700000'},
        {nome: 'Eduardo Homes Silva', percentual: '1%', cpf: '001.002.003-04', valor: '600000'},
        {nome: 'Bart Simpson Candido', percentual: '1%', cpf: '001.002.003-04', valor: '500000'},
        {nome: 'Wolverine Abelardo', percentual: '1%', cpf: '001.002.003-04', valor: '400000'},
        {nome: 'Marco Antonio Cubaiá', percentual: '1%', cpf: '001.002.003-04', valor: '300000'}
      ],
      totalArrecadado: 5000000000
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
