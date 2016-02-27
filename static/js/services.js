
'use strict';

var mcaasServices = angular.module('mcaasServices', ['ngResource']);

mcaasServices.factory('Container', ['$resource',
  function($resource){
    return $resource('/dockerapi/containers/:id', {id:'@id'});
  }]);
