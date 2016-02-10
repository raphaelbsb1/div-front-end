'use strict';
/**
 * @ngdoc overview
 * @name divulgaApp
 * @description
 * # divulgaApp
 *
 * Main module of the application.
 */
angular
  .module('divulgaApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mainControllers',
    'indexControllers',
    'modalControllers',
    'serviceTemplate',
    'anoEleitoralServices',
    'ufServices',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/candidatos', {
        templateUrl: 'views/candidatos.html',
        controller: 'EstadosCtrl',
        controllerAs: 'estados'
      })
      .when('/busca', {
        templateUrl: 'views/resultado-busca.html',
        controller: 'ResultadoBuscaCtrl',
        controllerAs: 'resultadoBusca'
      })
      .when('/candidato', {
        templateUrl: 'views/candidato.html',
        controller: 'CandidatoCtrl',
        controllerAs: 'candidato'
      })
      .when('/candidato/integra/:type', {
        templateUrl: 'views/candidato-integra.html',
        controller: 'CandidatoIntegraCtrl',
        controllerAs: 'candidatoIntegra'
      })
      .when('/candidato/extratos', {
        templateUrl: 'views/candidato-extratos.html',
        controller: 'CandidatoExtratosCtrl',
        controllerAs: 'candidatoExtratos'
      })
      .when('/candidato/nfes', {
        templateUrl: 'views/candidato-nfes.html',
        controller: 'CandidatoNfesCtrl',
        controllerAs: 'candidatoNfes'
      })
      .when('/candidato/historico', {
        templateUrl: 'views/candidato-historico-entregas.html',
        controller: 'CandidatoHistoricoEntregasCtrl',
        controllerAs: 'candidatoHistoricoEntregas'
      })
      .when('/candidato/ranking/gastos', {
        templateUrl: 'views/candidato-concentracao-gastos.html',
        controller: 'CandidatoConcentracaoGastosCtrl',
        controllerAs: 'candidatoConcentracaoGastos'
      })
      .when('/candidato/ranking/doadores', {
        templateUrl: 'views/candidato-ranking-doadores.html',
        controller: 'CandidatoRankingDoadoresCtrl',
        controllerAs: 'candidatoRankingDoadores'
      })
      .when('/candidato/ranking/fornecedores', {
        templateUrl: 'views/candidato-ranking-fornecedores.html',
        controller: 'CandidatoRankingFornecedoresCtrl',
        controllerAs: 'candidatoRankingFornecedores'
      })
      .when('/partido', {
        templateUrl: 'views/partido.html',
        controller: 'PartidoCtrl',
        controllerAs: 'partido'
      })
      .otherwise({
        redirectTo: '/'
      });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
  })
  .filter('cnpj', function() {
    return function(input) {
      var output = input.substring(0,2) + '.' + input.substring(2,5) + '.' + input.substring(5,8) + '/' + input.substring(8,12) + '-' + input.substring(12,14);

      return output;
    };
  });