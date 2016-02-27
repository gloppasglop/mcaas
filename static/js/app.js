
'use strict';

/* The seagull angular application */
var mcaas = angular.module('mcaas', [
  'ngRoute',
  'ngSanitize',
  'mcaasControllers',
  'mcaasServices',
  'ngCookies', // To save perference of i18n language
  'pascalprecht.translate'
]);

/* Configurate application like router and others*/
mcaas.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    /* Remove the # in url from Angular */
    $locationProvider.html5Mode(true);

    /* Set router, all in /js/controllers.js */
    $routeProvider.
/*      when('/', {
        templateUrl: '/static/html/home.html',
        controller: 'HomeController'
      }). */
      when('/containers', {
        templateUrl: '/static/html/containers.html',
        controller: 'ContainersController'
      }).
      when('/containers/:id', {
         templateUrl: '/static/html/container.html',
          controller: 'ContainerController'
     });
  }]
);

mcaas.filter('normalizeContainerName',function() {
    return function(input) {
        if ( angular.isString(input) ) {
            return input.replace(/\//g,'')
        } else {
            return input
        }
    }
});

/* Use angular-translate for i18n and all text should be translated here */
mcaas.config(function ($translateProvider) {
  /* Use cookie to store the perference of i18n language */
  $translateProvider.useCookieStorage();

  /* The default language should be English */
  $translateProvider.preferredLanguage('en-us');
  $translateProvider.useSanitizeValueStrategy('escaped');

  /* Translate into English */
  $translateProvider.translations('en-us', {
    // Index html
    mcaas: 'McaaS',
    containers: 'Containers',
    images: 'Images',
    configuration: 'Configuration',
    more: 'More',
    en_us: 'English',
    fr_fr: 'Français',
    worlds: 'Worlds',
    mods: 'Mods',
    language: 'Language'
  });

  /* Translate into French */
  $translateProvider.translations('fr-fr', {
    // Index html
    mcaas: 'McaaS',
    containers: 'Conteneurs',
    images: 'Images',
    configuration: 'Configuration',
    dockerhub: 'DockerHub',
    more: 'Plus',
    en_us: 'English',
    fr_fr: 'Français',
    worlds: "Mondes",
    mods: 'Mods',
    language: 'Langue'
  });

});
