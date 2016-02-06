'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the divulgaApp
 */
angular.module('divulgaApp')
  .controller('ResultadoBuscaCtrl', function ($scope, $location) {

  	$scope.formData = {
  		searchText: 'Exemplo'
  	};

 	$scope.resultVisible = [];

 	$scope.resultData = [
 		{
 			nome: 'Candidatura',
	 		resultado: [
	 			{type:'candidato', nome: 'DILMA', siglaPartido:'PT', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000083.jpg?x=1415620600000280000000083'},
				{type:'candidato', nome: 'AÉCIO NEVES', siglaPartido:'PSDB', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000085.jpg?x=1415304600000280000000085'},
				{type:'candidato', nome: 'EDUARDO CAMPOS', siglaPartido:'PSB', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000063.jpg?x=1409866177000280000000063'},
				{type:'candidato', nome: 'PASTOR EVERALDO', siglaPartido:'PSC', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000065.jpg?x=1414180049000280000000065'},
				{type:'candidato', nome: 'EYMAEL', siglaPartido:'PSDC', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000067.jpg?x=1414180049000280000000067'},
				{type:'candidato', nome: 'LEVY FIDELIX', siglaPartido:'PRTB', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000021.jpg?x=1414180049000280000000021'},
				{type:'candidato', nome: 'LUCIANA GENRO', siglaPartido:'PSOL', foto:'http://divulgacand2014.tse.jus.br/divulga-cand-2014/eleicao/2014/UF/BR/foto/280000000043.jpg?x=1414180049000280000000043'}
	 		]
	 	},
	 	{
	 		nome: 'Legenda Partidaria',
 			resultado: [
	 			{type:'partido', nome: 'Democratas', sigla:'DEM', numero: '25'},
				{type:'partido', nome: 'Partido Comunista Brasileiro', sigla:'PCB', numero: '21'},
				{type:'partido', nome: 'Partido Comunista do Brasil', sigla:'PCdoB', numero: '65'},
				{type:'partido', nome: 'Partido da Causa Operária', sigla:'PCO', numero: '29'},
				{type:'partido', nome: 'Partido Democrático Trabalhista', sigla:'PDT', numero: '12'},
				{type:'partido', nome: 'Partido Ecológico Nacional', sigla:'PEN', numero: '51'},
				{type:'partido', nome: 'Partido Humanista da Solidariedade', sigla:'PHS', numero: '31'},
				{type:'partido', nome: 'Partido do Movimento Democrático Brasileiro', sigla:'PMDB', numero: '15'},
				{type:'partido', nome: 'Partido da Mulher Brasileira', sigla:'PMB', numero: '35'},
				{type:'partido', nome: 'Partido da Mobilização Nacional', sigla:'PMN', numero: '33'},
				{type:'partido', nome: 'Partido Novo', sigla:'NOVO', numero: '30'},
				{type:'partido', nome: 'Partido Progressista', sigla:'PP', numero: '11'},
				{type:'partido', nome: 'Partido Pátria Livre', sigla:'PPL', numero: '54'},
				{type:'partido', nome: 'Partido Popular Socialista', sigla:'PPS', numero: '23'},
				{type:'partido', nome: 'Partido da República', sigla:'PR', numero: '22'},
				{type:'partido', nome: 'Partido Republicano Brasileiro', sigla:'PRB', numero: '10'},
				{type:'partido', nome: 'Partido Republicano da Ordem Social', sigla:'PROS', numero: '90'},
				{type:'partido', nome: 'Partido Republicano Progressista', sigla:'PRP', numero: '44'},
				{type:'partido', nome: 'Partido Renovador Trabalhista Brasileiro', sigla:'PRTB', numero: '28'},
				{type:'partido', nome: 'Partido Socialista Brasileiro', sigla:'PSB', numero: '40'},
				{type:'partido', nome: 'Partido Social Cristão', sigla:'PSC', numero: '20'},
				{type:'partido', nome: 'Partido Social Democrático', sigla:'PSD', numero: '55'},
				{type:'partido', nome: 'Partido da Social Democracia Brasileira', sigla:'PSDB', numero: '45'},
				{type:'partido', nome: 'Partido Social Democrata Cristão', sigla:'PSDC', numero: '27'},
				{type:'partido', nome: 'Partido Social Liberal', sigla:'PSL', numero: '17'},
				{type:'partido', nome: 'Partido Socialismo e Liberdade', sigla:'PSOL', numero: '50'},
				{type:'partido', nome: 'Partido Socialista dos Trabalhadores Unificado', sigla:'PSTU', numero: '16'},
				{type:'partido', nome: 'Partido dos Trabalhadores', sigla:'PT', numero: '13'},
				{type:'partido', nome: 'Partido Trabalhista Brasileiro', sigla:'PTB', numero: '14'},
				{type:'partido', nome: 'Partido Trabalhista Cristão', sigla:'PTC', numero: '36'},
				{type:'partido', nome: 'Partido Trabalhista do Brasil', sigla:'PTdoB', numero: '70'},
				{type:'partido', nome: 'Partido Trabalhista Nacional', sigla:'PTN', numero: '19'},
				{type:'partido', nome: 'Partido Verde', sigla:'PV', numero: '43'},
				{type:'partido', nome: 'Rede Sustentabilidade', sigla:'REDE', numero: '18'},
				{type:'partido', nome: 'Solidariedade', sigla:'SD', numero: '77'}
	 		]
	 	}
 	];

 	$scope.init = function() {
 		angular.forEach($scope.resultData, function(value, key) {
 			angular.forEach(value.resultado, function(item, key) {
				$scope.resultVisible.push(item);
			});
		});
 	};

 	$scope.irParaPaginaInicial = function() {
      $location.path('/');
    };

 	$scope.setVisible = function(array) {
 		$scope.resultVisible = array;
 	};

 	$scope.setLocation = function(obj) {
 		if (obj.type === 'candidato') {
 			$location.path('/candidato');
 		}

		if (obj.type === 'partido') {
			$location.path('/partido');
 		} 		
 	};
  });
