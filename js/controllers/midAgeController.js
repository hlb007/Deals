(
    function(){
        'use strict'
        angular.module('offerApp')
            .controller('MidAgeController', MidAgeController);
        MidAgeController.$inject = ['$scope', 'viewPath', '$state','$http', '$rootScope',];
        function MidAgeController($scope, viewPath, $state, $http, $rootScope){
            var vm = this;
            vm.views = viewPath;

            getRefData("ref-data/midAge.json");

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
            };
        }
    })();
