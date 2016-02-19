'use strict';

/* Use JQuery.gritter to popup success message */
function alert_success(message) {
  $.gritter.add({
    title: 'Success!',
    text: message,
    image: 'static/img/seagull-logo.png',
    time: 3000
  });
}

/* Use JQuery.gritter to popup error message */
function alert_error(message) {
  $.gritter.add({
    title: 'Error!',
    text: message,
    image: 'static/img/seagull-logo.png',
    time: 3000
  });
}

var mcaasControllers = angular.module('mcaasControllers', []);

mcaas.controller('ContainersController', ['$scope', 'Container', 
  function($scope, Container) {

  /* Get all containers objects */
  $scope.containers = Container.query();

}]);
