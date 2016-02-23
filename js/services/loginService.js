(
  function(){
    'use strict'
    angular.module('offerApp')
            .factory('LoginService', LoginService);
            LoginService.$inject = ['$http', '$q'];
            function LoginService($http, $q){
              var userType = null;
              var service = {
                validateCreds : validateCreds
              };
              return service;
              function validateCreds(uId, pass){
                var url = 'ref-data/users.json';
                var userList = fetchUsers(url);
                var userType = null;
                return userList.then(function(data){
                    if(data && data[uId] && data[uId] === pass){
                      return data[uId];
                    }
                    else{
                      return 'error';
                    }
                }, function(data){
                  console.log('validation failed');
                  return 'error';
                });
              };
              function fetchUsers(url){
                return $http.get(url)
                  .then(function(data){
                    return data.data;
                  })
                  .catch(function(data){
                    console.log('failed');
                  });
              }
            }
  })();
