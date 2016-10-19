angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  //$scope.data = {links: ....}

  $scope.getLink = function() {
  	Links.getAll().then(function(links) {
  		$scope.data.links = links; 
  	})
  }; 

  $scope.getLink(); 

  
});


