
'use strict';

var mcaasServices = angular.module('mcaasServices', ['ngResource']);

mcaasServices.factory('Container', ['$resource',
  function($resource){
    return $resource('dockerapi/containers/json', {}, {
      query: {method:'GET'}
    });
  }]);
