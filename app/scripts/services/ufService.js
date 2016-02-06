/* Services */

var ufServices = angular.module('ufServices', ['ngResource']);

ufServices.factory('Uf', ['$resource',
  function($resource){
    return $resource('dados/:ufId.json',  {
      query: {method:'GET', params:{ufId:'query'}, isArray:true}
    });
  }]);
