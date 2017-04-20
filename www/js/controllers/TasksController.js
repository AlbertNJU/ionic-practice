angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
	$scope.tasks = Tasks.all();
	$scope.completeTask = function(task) {
		Tasks.complete(task);
		$state.go("tasks");
		console.log("into complete tasks function");
	}
});

