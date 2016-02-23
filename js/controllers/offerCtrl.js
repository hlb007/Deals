(function() {
    'use strict'
    angular.module('offerApp')
        .controller('offerCtrl', offerCtrl);
    offerCtrl.$inject = ['$scope', '$rootScope','viewPath', '$http','$state','$stateParams','dynamicFormService'];

    function offerCtrl($scope, $rootScope,viewPath, $http, $state, $stateParams,dynamicFormService) {
        var vm = this;
        vm.views = viewPath;
        function getRefData(getURL) {
            $http({
                method: "GET",
                url: getURL,
            }).then(function(data) {
                console.log(data);
                vm.data = data.data;
                console.log("vm", vm);
            });
        };
        var segment = '';
        vm.formElementsData = [];
        vm.modelElementsList = [];
        vm.updateModelValues = updateModelValues;
        if($rootScope.pageSource == 'old'){
            segment ='old';
        }else if($rootScope.pageSource == 'teen') {
            segment = 'teen';
        }else{
            segment = 'mid';
        }
        init();
        function init(){
            return getFormElements(segment).then(function() {
                console.log('Activated formdata View');
            });
        };
        function getFormElements(input){
            return dynamicFormService.formElements(input)
                .then(function(data) {
                    vm.formElementsData = data["formFields"];
                    angular.forEach(vm.formElementsData, function(value){
                        vm.modelElementsList.push("");
                    });
                    return vm.formElementsData;
                });
        };
        function updateModelValues(){
            vm.modelElementsList[0]= 'TestUser';
            console.log(vm.modelElementsList[0]);
        };
        $scope.navigateToHome = function(){
            $state.go('login');
        };
    }
})();
