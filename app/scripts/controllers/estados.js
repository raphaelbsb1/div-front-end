'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('EstadosCtrl', function ($scope) {

  	$scope.init = function() {
		// angular.forEach($scope.quantitativoCandidatura, function(value, key) {
		// 	$scope.desenharGauge(key);
		// });
  	};

  	$scope.municipios = [
		{nome: 'Abaíra'},
		{nome: 'Abaré'},
		{nome: 'Acajutiba'},
		{nome: 'Adustina'},
		{nome: 'Água Fria'},
		{nome: 'Aiquara'},
		{nome: 'Alagoinhas'},
		{nome: 'Alcobaça'},
		{nome: 'Amélia Rodrigues'},
		{nome: 'Almadina'},
		{nome: 'Amargosa'},
		{nome: 'América Dourada'},
		{nome: 'Anagé'},
		{nome: 'Andaraí'},
		{nome: 'Andorinha'},
		{nome: 'Angical'},
		{nome: 'Anguera'},
		{nome: 'Antas'},
		{nome: 'Antônio Cardoso'},
		{nome: 'Antônio Gonçalves'},
		{nome: 'Aporá'},
		{nome: 'Apuarema'},
		{nome: 'Araçás'},
		{nome: 'Aracatu'},
		{nome: 'Araci'},
		{nome: 'Aramari'},
		{nome: 'Arataca'},
		{nome: 'Aratuípe'},
		{nome: 'Aurelino Leal'},
		{nome: 'Barreiras'},
		{nome: 'Bom Jesus da Lapa'},
		{nome: 'Brumado'},
		{nome: 'Baianópolis'},
		{nome: 'Baixa Grande'},
		{nome: 'Banzaê'},
		{nome: 'Barra'},
		{nome: 'Barra da Estiva'},
		{nome: 'Barra do Choça'},
		{nome: 'Barra do Mendes'},
		{nome: 'Barra do Rocha'},
		{nome: 'Barro Alto'},
		{nome: 'Barro Preto'},
		{nome: 'Barrocas'},
		{nome: 'Belmonte'},
		{nome: 'Belo Campo'},
		{nome: 'Biritinga'},
		{nome: 'Boa Nova'},
		{nome: 'Boa Vista do Tupim'},
		{nome: 'Bom Jesus da Serra'},
		{nome: 'Boninal'},
		{nome: 'Bonito'},
		{nome: 'Boquira'},
		{nome: 'Botuporã'},
		{nome: 'Brejões'},
		{nome: 'Brejolândia'},
		{nome: 'Brotas de Macaúbas'},
		{nome: 'Buerarema'},
		{nome: 'Buritirama'},
		{nome: 'Caculé'},
		{nome: 'Camaçari'},
		{nome: 'Cruz das Almas'},
		{nome: 'Candeias'},
		{nome: 'Casa Nova'},
		{nome: 'Caatiba'},
		{nome: 'Cabaceiras do Paraguaçu'},
		{nome: 'Cachoeira'},
		{nome: 'Caém'},
		{nome: 'Caetanos'},
		{nome: 'Caetité'},
		{nome: 'Cafarnaum'},
		{nome: 'Cairu'},
		{nome: 'Caldeirão Grande'},
		{nome: 'Camacan'},
		{nome: 'Camamu'},
		{nome: 'Campo Formoso'},
		{nome: 'Campo Alegre de Lourdes'},
		{nome: 'Canápolis'},
		{nome: 'Canarana'},
		{nome: 'Canavieiras'},
		{nome: 'Candeal'},
		{nome: 'Candiba'},
		{nome: 'Cândido Sales'},
		{nome: 'Cansanção'},
		{nome: 'Canudos'},
		{nome: 'Capela do Alto Alegre'},
		{nome: 'Capim Grosso'},
		{nome: 'Caraíbas'},
		{nome: 'Caravelas'},
		{nome: 'Cardeal da Silva'},
		{nome: 'Carinhanha'},
		{nome: 'Castro Alves'},
		{nome: 'Catolândia'},
		{nome: 'Catu'},
		{nome: 'Caturama'},
		{nome: 'Central'},
		{nome: 'Chorrochó'},
		{nome: 'Cícero Dantas'},
		{nome: 'Cipó'},
		{nome: 'Coaraci'},
		{nome: 'Cocos'},
		{nome: 'Conceição da Feira'},
		{nome: 'Conceição do Almeida'},
		{nome: 'Conceição do Coité'},
		{nome: 'Conceição do Jacuípe'},
		{nome: 'Conde'},
		{nome: 'Condeúba'},
		{nome: 'Contendas do Sincorá'},
		{nome: 'Coração de Maria'},
		{nome: 'Cordeiros'},
		{nome: 'Coribe'},
		{nome: 'Coronel João Sá'},
		{nome: 'Correntina'},
		{nome: 'Cotegipe'},
		{nome: 'Cravolândia'},
		{nome: 'Crisópolis'},
		{nome: 'Cristópolis'},
		{nome: 'Cruz das Almas'},
		{nome: 'Curaçá'},
		{nome: 'Dário Meira'},
		{nome: 'Dom Basílio'},
		{nome: 'Dom Macedo Costa'}
	];

	$scope.partidos = [
		{nome: 'Democratas', sigla:'DEM', numero: '25', esperado:'500000000', entregue:'450000000', pendente:'5000000'},
		{nome: 'Partido Comunista Brasileiro', sigla:'PCB', numero: '21', esperado:'500000000', entregue:'400000000', pendente:'5000000'},
		{nome: 'Partido Comunista do Brasil', sigla:'PCdoB', numero: '65', esperado:'500000000', entregue:'350000000', pendente:'5000000'},
		{nome: 'Partido da Causa Operária', sigla:'PCO', numero: '29', esperado:'500000000', entregue:'300000000', pendente:'5000000'},
		{nome: 'Partido Democrático Trabalhista', sigla:'PDT', numero: '12', esperado:'500000000', entregue:'280000000', pendente:'5000000'},
		{nome: 'Partido Ecológico Nacional', sigla:'PEN', numero: '51', esperado:'500000000', entregue:'250000000', pendente:'5000000'},
		{nome: 'Partido Humanista da Solidariedade', sigla:'PHS', numero: '31', esperado:'500000000', entregue:'230000000', pendente:'5000000'},
		{nome: 'Partido do Movimento Democrático Brasileiro', sigla:'PMDB', numero: '15', esperado:'500000000', entregue:'200000000', pendente:'5000000'},
		{nome: 'Partido da Mulher Brasileira', sigla:'PMB', numero: '35', esperado:'500000000', entregue:'180000000', pendente:'5000000'},
		{nome: 'Partido da Mobilização Nacional', sigla:'PMN', numero: '33', esperado:'500000000', entregue:'160000000', pendente:'5000000'},
		{nome: 'Partido Novo', sigla:'NOVO', numero: '30', esperado:'500000000', entregue:'160000000', pendente:'5000000'},
		{nome: 'Partido Progressista', sigla:'PP', numero: '11', esperado:'500000000', entregue:'150000000', pendente:'5000000'},
		{nome: 'Partido Pátria Livre', sigla:'PPL', numero: '54', esperado:'500000000', entregue:'130000000', pendente:'5000000'},
		{nome: 'Partido Popular Socialista', sigla:'PPS', numero: '23', esperado:'500000000', entregue:'110000000', pendente:'5000000'},
		{nome: 'Partido da República', sigla:'PR', numero: '22', esperado:'500000000', entregue:'90000000', pendente:'5000000'},
		{nome: 'Partido Republicano Brasileiro', sigla:'PRB', numero: '10', esperado:'500000000', entregue:'80000000', pendente:'5000000'},
		{nome: 'Partido Republicano da Ordem Social', sigla:'PROS', numero: '90', esperado:'500000000', entregue:'70000000', pendente:'5000000'},
		{nome: 'Partido Republicano Progressista', sigla:'PRP', numero: '44', esperado:'500000000', entregue:'60000000', pendente:'5000000'},
		{nome: 'Partido Renovador Trabalhista Brasileiro', sigla:'PRTB', numero: '28', esperado:'500000000', entregue:'60000000', pendente:'5000000'},
		{nome: 'Partido Socialista Brasileiro', sigla:'PSB', numero: '40', esperado:'500000000', entregue:'50000000', pendente:'5000000'},
		{nome: 'Partido Social Cristão', sigla:'PSC', numero: '20', esperado:'500000000', entregue:'40000000', pendente:'5000000'},
		{nome: 'Partido Social Democrático', sigla:'PSD', numero: '55', esperado:'500000000', entregue:'30000000', pendente:'5000000'},
		{nome: 'Partido da Social Democracia Brasileira', sigla:'PSDB', numero: '45', esperado:'500000000', entregue:'20000000', pendente:'5000000'},
		{nome: 'Partido Social Democrata Cristão', sigla:'PSDC', numero: '27', esperado:'500000000', entregue:'10000000', pendente:'5000000'},
		{nome: 'Partido Social Liberal', sigla:'PSL', numero: '17', esperado:'500000000', entregue:'9000000', pendente:'5000000'},
		{nome: 'Partido Socialismo e Liberdade', sigla:'PSOL', numero: '50', esperado:'500000000', entregue:'8000000', pendente:'5000000'},
		{nome: 'Partido Socialista dos Trabalhadores Unificado', sigla:'PSTU', numero: '16', esperado:'500000000', entregue:'7000000', pendente:'5000000'},
		{nome: 'Partido dos Trabalhadores', sigla:'PT', numero: '13', esperado:'500000000', entregue:'6000000', pendente:'5000000'},
		{nome: 'Partido Trabalhista Brasileiro', sigla:'PTB', numero: '14', esperado:'500000000', entregue:'5000000', pendente:'5000000'},
		{nome: 'Partido Trabalhista Cristão', sigla:'PTC', numero: '36', esperado:'500000000', entregue:'4000000', pendente:'5000000'},
		{nome: 'Partido Trabalhista do Brasil', sigla:'PTdoB', numero: '70', esperado:'500000000', entregue:'3000000', pendente:'5000000'},
		{nome: 'Partido Trabalhista Nacional', sigla:'PTN', numero: '19', esperado:'500000000', entregue:'2000000', pendente:'5000000'},
		{nome: 'Partido Verde', sigla:'PV', numero: '43', esperado:'500000000', entregue:'1000000', pendente:'5000000'},
		{nome: 'Rede Sustentabilidade', sigla:'REDE', numero: '18', esperado:'500000000', entregue:'900000', pendente:'5000000'},
		{nome: 'Solidariedade', sigla:'SD', numero: '77', esperado:'500000000', entregue:'800000', pendente:'5000000'}
	];

	$scope.quantitativoCandidatura = [
		{nome: 'DILMA', siglaPartido:'PT', esperado: '383000000', entregue: '350000000', pendente: '33000000', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000083.jpg?x=1415620600000280000000083'},
		{nome: 'AÉCIO NEVES', siglaPartido:'PT', esperado: '290000000', entregue: '250000000', pendente: '40000000', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000085.jpg?x=1415304600000280000000085'},
		{nome: 'EDUARDO CAMPOS', siglaPartido:'PT', esperado: '150000000', entregue: '90000000', pendente: '60000000', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000063.jpg?x=1409866177000280000000063'},
		{nome: 'PASTOR EVERALDO', siglaPartido:'PT', esperado: '50000000', entregue: '33000000', pendente: '17000000', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000065.jpg?x=1414180049000280000000065'},
		{nome: 'EYMAEL', siglaPartido:'PT', esperado: '25000000', entregue: '17000000', pendente: '8000000', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000067.jpg?x=1414180049000280000000067'},
		{nome: 'LEVY FIDELIX', siglaPartido:'PT', esperado: '12000000', entregue: '10000000', pendente: '2000000', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000021.jpg?x=1414180049000280000000021'},
		{nome: 'LUCIANA GENRO', siglaPartido:'PT', esperado: '900000', entregue: '650000', pendente: '250000', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000043.jpg?x=1414180049000280000000043'}
	];

	$scope.$on('ngRepeatFinishedQuantitativoCandidatura', function(ngRepeatFinishedEvent) {
	    angular.forEach($scope.quantitativoCandidatura, function(value, key) {
			var calc = ((Number(value.entregue) * 100)) / Number(value.esperado);
			var result = Math.floor(calc);
			var id = 'canvas-graph-candidato-' + key;
			$scope.desenharGauge(id, result, '#88C425');
		});
	});

	$scope.$on('ngRepeatFinishedQuantitativoPartidario', function(ngRepeatFinishedEvent) {
	    angular.forEach($scope.partidos, function(value, key) {
			var calc = ((Number(value.entregue) * 100)) / Number(value.esperado);
			var result = Math.floor(calc);
			var id = 'canvas-graph-partido-' + key;
			$scope.desenharGauge(id, result, '#26ADE4');
		});
	});

	$scope.desenharGauge = function(id, percent, fontColor) {
		var canvasID = id;
		var canvas = document.getElementById(canvasID);
		var ctx = canvas.getContext('2d');
		var W = canvas.width;
		var H = canvas.height;
		var radians = Math.PI/180;
		var degrees = (360/(100/percent));
		var text;
		var credit = 'Entregue';
		var color = fontColor;
		var bgcolor = '#CCC';

		ctx.clearRect(0, 0, W, H);
		ctx.beginPath();
		ctx.strokeStyle = bgcolor;
		ctx.lineWidth = 10;
		ctx.arc(W/2, H/2 - 5, 20, 0-90, (360-90)*radians, false);
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = 10;
		ctx.arc(W/2, H/2 - 5, 20, 0-90*radians, (degrees-90)*radians, false);
		ctx.stroke();

		text = Math.floor(degrees / 360 * 100) + '%';
		ctx.fillStyle = color;
		ctx.font = '12px arial';
		ctx.fillText(text, W/2 - ctx.measureText(text).width/2, H/2);

		ctx.fillStyle = color;
		ctx.font = '12px arial';
		ctx.fillText(credit, W/2 - ctx.measureText(credit).width/2, H - 2);
	};
  })
.directive('onFinishRenderCandidatura', function ($timeout) {
	return {
	    restrict: 'A',
	    link: function (scope, element, attr) {
	        if (scope.$last === true) {
	            $timeout(function () {
	                scope.$emit('ngRepeatFinishedQuantitativoCandidatura');
	            });
	        }
	    }
	};
})
.directive('onFinishRenderPartidario', function ($timeout) {
	return {
	    restrict: 'A',
	    link: function (scope, element, attr) {
	        if (scope.$last === true) {
	            $timeout(function () {
	                scope.$emit('ngRepeatFinishedQuantitativoPartidario');
	            });
	        }
	    }
	};
});
