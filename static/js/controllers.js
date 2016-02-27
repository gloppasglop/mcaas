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

mcaasControllers.controller('ContainersController', ['$scope', 'Container', 
  function($scope, Container) {

  /* Get all containers objects */
  $scope.containers = Container.query();

}]);

mcaasControllers.controller('ContainerController', ['$scope', '$routeParams', 'Container', 
  function($scope, $routeParams, Container) {

   $scope.container = Container.get( { id:$routeParams.id});
//  console.log($scope.container)


}]);


mcaasControllers.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    console.log(langKey);
    $translate.use(langKey);
  };
});
