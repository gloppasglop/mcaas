'use strict';

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

mcaasControllers.controller('UploadController', ['$scope', '$timeout', 'Upload', 
  function ($scope, $timeout, Upload) {

    $scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: '/upload',
                data: {the_file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });
        }   
    }

}]);


mcaasControllers.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };
    
});


mcaasControllers.controller('TranslateController', function($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    console.log(langKey);
    $translate.use(langKey);
  };
});
