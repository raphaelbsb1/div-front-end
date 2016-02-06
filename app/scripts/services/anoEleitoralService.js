'use strict';

/* Services */

var anoEleitoralServices = angular.module('anoEleitoralServices', ['ngResource']);

anoEleitoralServices.factory('AnosEleitorais', ['$resource',
  function($resource){
    return $resource('dados/:anosEleitoraisId.json', {}, {
      query: {method:'GET', params:{anosEleitoraisId:'anos-eleitorais'}, isArray:true}
    });
  }]);

