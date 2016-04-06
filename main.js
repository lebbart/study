var todoApp = angular.module('todoApp', [
		'ngAnimate',
		'mgcrea.ngStrap',
		'mgcrea.ngStrap.tab',
		'ui.router'
]);

todoApp.controller('ToDoCtrl', function($scope){

	$scope.todo = model;

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