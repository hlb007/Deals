(
  function(){
    'use strict'
    angular.module('dynamic.form.module')
            .controller('dynamicFormController',dynamicFormController);
            dynamicFormController.$inject = ['dynamicFormService','$scope','viewPath'];
             function dynamicFormController(dynamicFormService, $scope,viewPath){
              var vm = this;
              var segment = '';
              vm.views = viewPath;
              vm.formElementsData = [];
              vm.modelElementsList = [];
              vm.updateModelValues = updateModelValues;
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
              vm.modelElementsList[0]= 'Arun';
              console.log(vm.modelElementsList[0]);
             };
          };
  })();
