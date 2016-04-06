var todoApp = angular.module('todoApp', [
							 'ngAnimate',
							 'mgcrea.ngStrap',
							 'mgcrea.ngStrap.tab',
							 'ui.router'
]);

todoApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
			.state('start',{
				url : '',
				views : {
					main : {
						templateUrl : 'templates/main.html',
						controller : 'ToDoCtrl'
					}
				}
			})
			.state('angular',{
				url : 'angularjs',
				views : {
					'main' : {
						templateUrl: '/templates/angularjs.html',
						controller: 'angularConrtoller'
					}
				}
			})
			.state('javascript',{
				url : 'js',
				views : {
					main : {
						templateUrl: 'templates/js.html',
						controller: 'jsController'
					}
				}
			})
			.state('testing',{
				url : 'testing',
				views : {
					'main' : {
						templateUrl: 'templates/testing.html',
						controller: 'testController'
					}
				}
			})
			.state('regexp',{
				url : 'regexp',
				views : {
					main : {
						templateUrl: 'templates/regexp.html',
						controller: 'regexpController'
					}
				}
			})
			.state('plans',{
				url : 'plans',
				views : {
					main : {
						templateUrl: 'templates/plans.html',
						controller: 'plansController'
					}
				}
			});
	$urlRouterProvider.otherwise('/');
});

todoApp.controller('ToDoCtrl', function($scope){
	$scope.todo = model;
});

todoApp.controller('angularConrtoller', function($scope){
	console.log('I\'m here - angular.');
});

todoApp.controller('testController', function($scope){
	console.log('I\'m here - tests.');
});

todoApp.controller('jsController', function($scope){
	console.log('I\'m here - js.');
});

todoApp.controller('regexpController', function($scope){
	console.log('I\'m here - regexp.');
});

todoApp.controller('plansController', function($scope){
	console.log('I\'m here - plans.');
});

var model = {
	user: "Bogdan",
	items: [
		{action: "Buy Flowers", done: false},
		{action: "Get Shoes", done: false},
		{action: "Collect Ticekts", done: true},
		{action: "Call Joe", done: false}
	]
};