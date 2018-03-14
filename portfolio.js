var myApp = angular.module("Mymodule", []).controller("myController", function ($scope){

    $scope.homeVisible = true;
    $scope.aboutVisible = false;

    $scope.homePage = function () {
        $scope.homeVisible =true;
        $scope.aboutVisible = false;
    }

    $scope.aboutPage = function(){
        $scope.aboutVisible = true;
        $scope.homeVisible = false;
    }
});