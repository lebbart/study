var todoApp = angular.module('todoApp', [
		'ngAnimate',
		'ngRoute'
]);

todoApp.controller('ToDoCtrl', function($scope){
	$scope.todo = model;

});

var model = {
	user: "Adam",
	items: [
		{action: "Buy Flowers", done: false},
		{action: "Get Shoes", done: false},
		{action: "Collect Ticekts", done: true},
		{action: "Call Joe", done: false}
	]
};