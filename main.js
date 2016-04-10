var todoApp = angular.module('todoApp', [
							 'ngAnimate',
							 'mgcrea.ngStrap',
							 'mgcrea.ngStrap.tab',
							 'ui.router',
							 'firebase'
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

});

todoApp.controller('angularConrtoller',['$scope', '$firebaseArray', function($scope, $firebaseArray){
	//$scope.todo = model;

	var ref = new Firebase("https://listtodobogdan.firebaseio.com/");
	$scope.rows = $firebaseArray(ref);

}]);

todoApp.controller('testController', function($scope){

});

todoApp.controller('jsController', function($scope){

});

todoApp.controller('regexpController', function($scope){

});

todoApp.controller('plansController', function($scope){

});

//var model = {
//	user: "Bogdan",
//	items: [
//		{action: "AngularJS PRO - прочитать данную книгу", done: false},
//		{action: "AngularJS 1.5.1 - разобрать что такое новое в нем (компоненты)", done: false},
//		{action: "AngularJS 2.0 - начать учить", done: false},
//		{action: "Закончить приложение с udemy Done", done: true},
//		{action: "Добавить light scroll", done: false},
//		{action: "Добавить Табы и в них чет показывать", done: false},
//		{action: "Добавить несколько языков - реализация", done: false},
//		{action: "Регистрация / Авторизация / Платежные системы", done: false},
//		{action: "Сделать свой сайт на AngularJS", done: false},
//		{action: "Понять как использовать Firebase", done: false},
//		{action: "Приложение учета расхода топлива", done: false},
//		{action: "Приложение to do list (to learn list)", done: false},
//		{action: "Приложение для HR отдела, хранение/поиск/фильтрация данных о кандидатах", done: false},
//		{action: "Сделать нормальное отображение данной страницы для работы в онлайн режиме, добавление, редактирование и тд, написать бэкэнд", done: false}
//	]
//};