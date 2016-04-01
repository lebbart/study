var todoApp = angular.module('todoApp', [
		'ngAnimate',
		'ngRoute',
		'mgcrea.ngStrap',
		'mgcrea.ngStrap.tab'
]);

todoApp.controller('ToDoCtrl', function($scope){
	$scope.todo = model;

});

todoApp.controller('tabSectionController', function($scope) {

	$scope.tabs = [
		{
			"title": "Home",
			"content": "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."
		},
		{
			"title": "Profile",
			"content": "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
		},
		{
			"title": "About",
			"content": "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.",
			"disabled": false
		},
		{
			"title": "Contact",
			"content": "Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
		},
		{
			"title": "Contact",
			"content": "Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
		},
		{
			"title": "Contact",
			"content": "Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
		},
		{
			"title": "Contact",
			"content": "Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid."
		}
	];
	$scope.tabs.activeTab = "Profile";

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