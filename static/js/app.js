
'use strict';

/* The seagull angular application */
var mcaas = angular.module('mcaas', [
  'ngSanitize',
  'mcaasControllers',
  'mcaasServices',
  'ngAnimate',
  'ngCookies', // To save perference of i18n language
  'ui.router',
  'ngResource',
  'ngFileUpload',
  'pascalprecht.translate'
]);

/* Configurate application like router and others*/
mcaas.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/static/html/main.html'
        })

        .state('dashboard.home', {
            url: '/dashboard',
            templateUrl: '/static/html/home.html'
        })

        .state('dashboard.containers', {
            url: '/containers',
            templateUrl: '/static/html/containers.html',
            controller: 'ContainersController'
        })

        .state('dashboard.blank',{
            templateUrl:'static/html/blank.html',
            url:'/blank'
        })

        .state('dashboard.worlds',{
            templateUrl:'static/html/upload.html',
            url:'/upload',
            controller: 'UploadController'
        })

        // route to show our basic form (/form)
        .state('dashboard.form', {
            url: '/form',
            templateUrl: 'static/html/partial-form-container.html',
            controller: 'formController'
        })

        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('dashboard.form.profile', {
            url: '/profile',
            templateUrl: 'static/html/form-profile.html'
        })
        
        // url will be /form/interests
        .state('dashboard.form.interests', {
            url: '/interests',
            templateUrl: 'static/html/form-interests.html'
        })
        
        // url will be /form/payment
        .state('dashboard.form.payment', {
            url: '/payment',
            templateUrl: 'static/html/form-payment.html'
        });
        
});

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
