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
        call: function() {
            var ctaskString = window.localStorage['ctasks'];
            if(ctaskString){
                return angular.fromJson(ctaskString);
            }
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
            //console.log(task);
            var tasks = [];
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
            var ctasks = [];
            var ctaskString = window.localStorage['ctasks'];
                if(ctaskString) {
            ctasks = angular.fromJson(ctaskString);
            }
			for(var i = 0; i < tasks.length; i++){
                //console.log(tasks.length);
                if(tasks[i].title == task.title){
                    //console.log(task.title);
                    tasks.splice(i, 1);
                    //console.log(tasks.length);
                ctasks.push(task);
                }
			}
            window.localStorage['tasks'] = angular.toJson(tasks);
            window.localStorage['ctasks'] = angular.toJson(ctasks);
            window.location.reload();
		}
	}
})
