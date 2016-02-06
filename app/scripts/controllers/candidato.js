'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('CandidatoCtrl', function ($scope, $location) {

  	$scope.init = function() {
  		var id1 = 'canvas-graph-qnt-1';
  		var id2 = 'canvas-graph-qnt-2';
  		var id3 = 'canvas-graph-qnt-3';

  		$scope.desenharGauge(id1, 100, '#26ADE4', 'Contratado');
  		$scope.desenharGauge(id2, 80, '#26ADE4', 'Pago com FP');
  		$scope.desenharGauge(id3, 55, '#26ADE4', 'Pago com OR');
  	};

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
  		]
  	};

  	$scope.irParaPaginaInicial = function() {
      $location.path('/');
    };

    $scope.irParaIntegraCandidato = function(id) {
      $location.path('/candidato/integra/' + id);
    };

    $scope.irParaExtratosBancariosCandidato = function(id) {
      $location.path('/candidato/extratos');
    };

    $scope.irParaNfesCandidato = function(id) {
      $location.path('/candidato/nfes');
    };

    $scope.irParaHistoricoEntregasCandidato = function(id) {
      $location.path('/candidato/historico');
    };

    $scope.irParaConcentracaoGastosCandidato = function(id) {
      $location.path('/candidato/ranking/gastos');
    };

    $scope.irParaRankingDoadoresCandidato = function(id) {
      $location.path('/candidato/ranking/doadores');
    };

    $scope.irParaRankingFornecedoresCandidato = function(id) {
      $location.path('/candidato/ranking/fornecedores');
    };

  	$scope.desenharGauge = function(id, percent, fontColor, label) {
		var canvasID = id;
		var canvas = document.getElementById(canvasID);
		var ctx = canvas.getContext('2d');
		var W = canvas.width;
		var H = canvas.height;
		var radians = Math.PI/180;
		var degrees = (360/(100/percent));
		var text;
		var color = fontColor;
		var bgcolor = '#CCC';

		ctx.clearRect(0, 0, W, H);
		ctx.beginPath();
		ctx.strokeStyle = bgcolor;
		ctx.lineWidth = 10;
		ctx.arc(W/2, H/2, 40, 0-90, (360-90)*radians, false);
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 10;
		ctx.arc(W/2, H/2, 40, 0-90*radians, (degrees-90)*radians, false);
		ctx.stroke();

		text = Math.floor(degrees / 360 * 100) + '%';
		ctx.fillStyle = color;
		ctx.font = '16px arial';
		ctx.fillText(text, W/2 - ctx.measureText(text).width/2, H/2 + 6);
	};

  });
