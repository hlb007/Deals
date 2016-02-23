(
    function(){
        'use strict'
        angular.module('offerApp')
            .controller('YoungAgeController',YoungAgeController);
        YoungAgeController.$inject = ['$scope', 'viewPath', '$state','$http','$rootScope'];
        function YoungAgeController($scope, viewPath, $state,$http,$rootScope){
            var vm = this;
            vm.views = viewPath;
            vm.navigate = function(){
                $state.go('offer');
            };
            getRefData("ref-data/youngAge.json");
            function getRefData(getURL) {
                $http({
                    method: "GET",
                    url: getURL,
                }).then(function(data) {
                    console.log(data);
                    vm.data = data.data;
                });
            };


            $scope.openOffer = function(id){

                $rootScope.offerTitle = vm.data.offers[parseInt(id)].title;
                $rootScope.offerImg = vm.data.offers[parseInt(id)].img;
                $rootScope.offerOfferDesc = vm.data.offers[parseInt(id)].offer;
                $rootScope.pageSource ="teen";
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
