'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('PartidoCtrl', function ($scope, $location) {

  	$scope.init = function() {
  		var id1 = 'canvas-graph-1';
  		var id2 = 'canvas-graph-2';
  		var id3 = 'canvas-graph-3';

  		// var id4 = 'canvas-grafico-1';
  		// var id5 = 'canvas-grafico-2';
  		// var id6 = 'canvas-grafico-3';

  		$scope.desenharGauge(id1, 100, '%', '#26ADE4', 'Esperado');
  		$scope.desenharGauge(id2, 80, '%', '#26ADE4', 'Entregue');
  		$scope.desenharGauge(id3, 55, '%', '#26ADE4', 'Pendente');

  		// $scope.desenharGauge(id4, 100, '%', '#7F77DE', 'Esperado', 'R$ 100.000.000,00');
  		// $scope.desenharGauge(id5, 85, '%', '#7F77DE', 'Entregue', 'R$ 70.000.000,00');
  		// $scope.desenharGauge(id6, 14, '%', '#7F77DE', 'Pendente', 'R$ 30.000.000,00');
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

  	$scope.desenharGauge = function(id, percent, unidade, fontColor, label) {
  		var canvasID = id;
  		var canvas = document.getElementById(canvasID);
  		var ctx = canvas.getContext('2d');
  		var W = canvas.width;
  		var H = canvas.height;
  		var radians = Math.PI/180;
  		var degrees = (360/(100/percent));
  		var text;
  		var unit = unidade;
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

  		text = Math.floor(degrees / 360 * 100) + unit;
  		ctx.fillStyle = color;
  		ctx.font = '16px arial';
  		ctx.fillText(text, W/2 - ctx.measureText(text).width/2, H/2 + 6);
  	};
  });
