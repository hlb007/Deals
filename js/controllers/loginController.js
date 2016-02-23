(
    function(){
        'use strict'
        angular.module('offerApp')
            .controller('LoginController',LoginController);
        LoginController.$inject = ['$scope', 'viewPath', 'LoginService', '$state','geolocation','$rootScope', '$window'];
        function LoginController($scope, viewPath, LoginService, $state, geolocation, $rootScope, $window){
            var vm = this;
            vm.views = viewPath;
            vm.errorClass = false;
            vm.loginpage = true;
            vm.showLocationMessage = true;
            vm.locationMessage = 'We ask you to enable the location tracking to provide you better offers based on you current location.';
            vm.sigIn = function(){
                var loginPromise = LoginService.validateCreds(vm.username, vm.pass);
                loginPromise.then(function(data){
                    if(data && data !== 'error'){
                        console.log(">>>",data);
                        $state.go(data);
                    }
                    else{
                        vm.errorClass = true;
                    }
                },function(data){
                    vm.errorClass = true;
                });
            };
            geolocation.getLocation().then(function(data){
                console.log('here'+data);
                vm.showLocationMessage = false
                vm.locationMessage = 'You have enabled the locaion tracking on this website. We will use this to customize your offers';
                if($state.current.name !== 'login')
                    $window.location.reload();
            },function(data){
                console.log('there'+data);
                vm.locationMessage = data;
            });
        }
    })();
