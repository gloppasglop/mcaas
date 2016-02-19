
'use strict';

/* The seagull angular application */
var mcaas = angular.module('mcaas', [
  'ngRoute',
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
      });
  }]
);

/* Use angular-translate for i18n and all text should be translated here */
mcaas.config(function ($translateProvider) {
  /* Use cookie to store the perference of i18n language */
  $translateProvider.useCookieStorage();

  /* The default language should be English */
  $translateProvider.preferredLanguage('en-us');

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
    need_help: 'Need Help',
    goversion: 'GoVersion',
    version: 'Version',
    gitcommit: 'GitCommit',
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
    need_help: 'Besoin d\'aide',
    goversion: 'GoVersion',
    version: 'Version',
    gitcommit: 'GitCommit',
  });

});
