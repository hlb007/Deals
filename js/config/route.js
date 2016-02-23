
angular.module('offerApp')
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginController as login'
            })
            // nested list with custom controller
            .state('oldAge', {
                url: '/old',
                templateUrl: 'views/oldAge.html',
                controller: 'OldAgeController as old'
            })

            // nested list with just some random string data
            .state('midAge', {
                url: '/mid',
                templateUrl: 'views/middleAge.html',
                controller: 'MidAgeController as mid'
            })
            .state('youngAge', {
                url: '/young',
                templateUrl: 'views/teenager.html',
                controller: 'YoungAgeController as young'
            })
            .state('applyCard', {
                url: '/applyCard',
                templateUrl: 'views/form.html',
                controller: 'dynamicFormController as vm'
            })
            .state('location', {
                url: '/loc',
                templateUrl: 'views/locationSyd.html',
                controller: 'locationCtrl as loc'
            })
            .state('offer', {
                url: '/offer',
                templateUrl: 'views/offer.html',
                controller: 'offerCtrl as offer'
            })
    });
