(function() {
  'use strict'
  angular.module('offerApp')
      .controller('locationCtrl', locationCtrl);
  locationCtrl.$inject = ['$scope', 'viewPath','$location', '$rootScope', 'geolocation', '$http','$state'];
  var showFlag = true;


  function locationCtrl($scope, viewPath, $location, $rootScope, geolocation, $http, $state) {
    var vm = this;
    vm.views = viewPath;

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


    geolocation.getLocation().then(function(data) {
      console.log(data);
      $scope.longitude = data.coords.longitude;
      $scope.latitude = data.coords.latitude;
      console.log($scope.longitude, $scope.latitude);
      vm.showFlag = false;
      $http({
        method: "GET",
        //url: RESTHelper.getCardApplicationUrl() + 'theme/res/branch.properties',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + $scope.latitude + ',' + $scope.longitude + '&radius=5000&types=city&key=AIzaSyD2ib18iKECClQbRf8kKDiHYxdf1QHksFs'
      }).then(function(data) {
        console.log(data);
        //console.log(data.data.results[0].name);
        console.log("Location Length ",data.data.results.length);
        var name= "SYDNEY"
        if(data!=null && data.data!=null && data.data.results.length > 0 ){
          console.log(data.data.results[1].vicinity);
          var name = data.data.results[1].vicinity +" "+data.data.results[1].name;
        }

        if (name.toUpperCase().indexOf("SYDNEY") > -1) {
          getRefData("ref-data/location_syd.json");
          console.log(vm);
        } else if (name.toUpperCase().indexOf("MELBOURNE") > -1) {
          getRefData("ref-data/location_melbourne.json");
          console.log(vm);
        } else {
          getRefData("ref-data/location_syd.json");
          console.log(vm);
        }
      }, function() {

      });
    });
  }
})();
