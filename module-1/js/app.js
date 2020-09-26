(function() {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchMessage = "";
        $scope.lunchItems = "";
        $scope.lunchColour="";

        $scope.lunchCalculate = function() {
            var message = $scope.lunchMessage;
            var items = $scope.lunchItems;
            var color =$scope.lunchColour;
            var length=items.split(",").length;
            if (items == 0){
                message = "Please enter data first";
                color="#f90000";
              }
            else if (length < 4){
                message = "Enjoy!";
                color="#378551";
              }
            else {
                message = "Too much!";
                color="#378551";
              }
            $scope.lunchMessage = message;
            $scope.lunchColour=color;
        }
    }

})();
