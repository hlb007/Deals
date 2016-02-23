(
    function(){
      'use strict'
      angular.module('dynamic.form.module')
          .factory('dynamicFormService', dynamicFormService);
      dynamicFormService.$inject = ['$http', '$q', '$state'];
      function dynamicFormService($http, $q, $state){
        var service = {
          formElements : formElements
        };
        return service;

        function formElements(whichForm) {
          var url = 'ref-data/default.json';
          if(whichForm === 'old'){
            url = 'ref-data/defaultOld.json';
          }else if (whichForm === 'teen') {
            url = 'ref-data/defaultTeen.json';
          }else {
            url = 'ref-data/default.json';
          }
          return $http.get(url)
              .then(getFormElementsComplete)
              .catch(getFormElementsFailed);

          function getFormElementsComplete(data){
            return data.data;
          }
          function getFormElementsFailed(error){
            console.log("error occurred");
          }
        };
      };
    })();
