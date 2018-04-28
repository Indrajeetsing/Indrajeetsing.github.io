var myApp = angular.module("Mymodule", []).controller("myController", function ($scope){

    $scope.navbarVisible = false;
    $scope.homeVisible = true;
    $scope.aboutVisible = false;
    $scope.portfolioVisible = false;
    $scope.contactVisible = false;
	$scope.showText = false;

    $scope.homePage = function () {
        $scope.navbarVisible = false;
        $scope.homeVisible =true;
        $scope.aboutVisible = false;
        $scope.portfolioVisible = false;
        $scope.contactVisible = false;
    }

    $scope.aboutPage = function(){
        $scope.navbarVisible = true;
        $scope.aboutVisible = true;
        $scope.homeVisible = false;
        $scope.portfolioVisible = false;
        $scope.contactVisible = false;
    }

    $scope.portfolioPage = function () {
        $scope.navbarVisible = true;
        $scope.homeVisible = false;
        $scope.aboutVisible = false;
        $scope.portfolioVisible = true;
        $scope.contactVisible = false;
    }

    $scope.contactPage = function () {
        $scope.navbarVisible = true;
        $scope.homeVisible = false;
        $scope.aboutVisible = false;
        $scope.portfolioVisible = false;
        $scope.contactVisible = true;
    }
	
	$scope.readMore = function(){
		$scope.showText = true;
	}

});