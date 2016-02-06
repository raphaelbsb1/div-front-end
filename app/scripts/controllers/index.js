'use strict';

/**
 * @ngdoc function
 * @name divulgaApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the divulgaApp
 */

var indexControllers = angular.module('indexControllers', []);

indexControllers.controller('IndexCtrl', ['$scope', '$http', 
	'AnosEleitorais', 'Template', 'Uf', 
  	 function($scope, $http, AnosEleitorais, 
  	 	Template, Uf) {

	$scope.Template = Template; 
		 	

	AnosEleitorais.query(function(data) {
		$scope.anos = data;
		var i = data.length;
		var anoMaior = new AnosEleitorais();
		anoMaior.ano=0;
	    while(i--){
	    	if(anoMaior.ano<data[i].ano)
	    		anoMaior=data[i];
	    }
	    Template.anoEleitoral=anoMaior;

	});

	$scope.carregaAnoAbrangencia = function(obj) {
		Template.anoEleitoral  = new AnosEleitorais(obj);
		$scope.carregaUfsPorAbragencia();
	};


	$scope.carregaUfsPorAbragencia = function(){
	    $http({
	    	method: "GET",
	    	url: 'dados/'
	    		.concat(Template.anoEleitoral.abrangencia)
	    		.concat('.json')
	    }).then(function(response) {
	        Template.ufs = response.data;
	    });
	};


  	}]);




