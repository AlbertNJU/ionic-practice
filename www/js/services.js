angular.module('starter.services')
.factory('Tasks', function() {
	return {
		all: function() {
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				return angular.fromJson(taskString);
			}
			return [];
		},
		save: function(task) {
			var tasks = [];
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			tasks.push(task);
			window.localStorage['tasks'] = angular.toJson(tasks);
		},
		complete: function(task) {
			var tasks = [];
			var ftasks = [];
			var taskString = window.localStroage['tasks'];
			var ftaskString = window.localStroage['ftasks'];
			if(tasktring) {
				tasks = angular.fromJson(taskString);
			}
			if(ftasktring) {
				ftasks = angular.fromJson(ftaskString);
			}
			ftasks.push(task);
			for(i=0; i<task.length; i++)
				if(tasks[i] == task) task.splice(i, 1);
			window.localStorage['tasks'] = angular.toJson(tasks);
			window.localStorage['ftasks'] = angular.toJson(ftasks);
		}
	}
})
