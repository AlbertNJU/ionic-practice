angular.module('starter.controllers')
.controller('TasksController', function ($state, $rootScope, $scope, Tasks) {
	$scope.tasks = Tasks.all();
    $scope.ctasks = Tasks.call();
	$scope.completeTask = function(task) {
		console.log("into complete tasks function");
		Tasks.complete(task);
		$state.go("tasks");
	}
});

