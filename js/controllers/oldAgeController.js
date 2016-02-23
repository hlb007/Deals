(
    function(){
        'use strict'
        angular.module('offerApp')
            .controller('OldAgeController',OldAgeController);
        OldAgeController.$inject = ['$scope', 'viewPath', '$state', '$rootScope','$http'];
        function OldAgeController($scope, viewPath, $state, $rootScope, $http){
            var vm = this;
            vm.views = viewPath;
            getRefData("ref-data/oldAge.json");
            function getRefData(getURL) {
                $http({
                    method: "GET",
                    url: getURL,
                }).then(function(data) {
                    console.log(data);
                    vm.data = data.data;
                });
            };


            $scope.openOffer = function(title,img,offer){
                $rootScope.offerTitle = title;
                $rootScope.offerImg = img;
                $rootScope.offerOfferDesc = offer;
                $rootScope.pageSource ="mid";
                $state.go('offer');
                //var offerParams = angular.toJson({
                //    "paraOne": title,
                //    "paraTwo":img,
                //    "paraThree": offer
                //});
                //console.log("data",title,"offer",offer,"i",img);
                //$state.go('offer', {
                //    'offerParams': offerParams
                //});
            }
        }
    })();
