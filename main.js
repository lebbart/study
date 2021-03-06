var todoApp = angular.module('todoApp', [
    'ngAnimate',
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.tab',
    'ui.router',
    'firebase',
    'toaster',
    'angular-ladda'
]);

todoApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('start', {
            url: 'main',
            views: {
                main: {
                    templateUrl: 'templates/main.html',
                    controller: 'ToDoCtrl'
                }
            }
        })
        .state('angular', {
            //url: 'angularjs',
            url: '/',
            views: {
                'main': {
                    templateUrl: 'templates/angularjs.html',
                    controller: 'angularConrtoller'
                }
            }
        })
        .state('javascript', {
            url: 'js',
            views: {
                main: {
                    templateUrl: 'templates/js.html',
                    controller: 'jsController'
                }
            }
        })
        .state('testing', {
            url: 'testing',
            views: {
                'main': {
                    templateUrl: 'templates/testing.html',
                    controller: 'testController'
                }
            }
        })
        .state('regexp', {
            url: 'regexp',
            views: {
                main: {
                    templateUrl: 'templates/regexp.html',
                    controller: 'regexpController'
                }
            }
        })
        .state('plans', {
            url: 'plans',
            views: {
                main: {
                    templateUrl: 'templates/plans.html',
                    controller: 'plansController'
                }
            }
        });
    //$urlRouterProvider.otherwise('/');
});

todoApp.controller('ToDoCtrl', function ($scope) {

});

todoApp.config(function (laddaProvider) {
    laddaProvider.setOption({
        style: 'expand-right',
        spinnerSize: 20
    });
});

todoApp.controller('angularConrtoller', ['$scope', '$window', '$firebaseArray', 'toaster', '$modal',
    function ($scope, $window, $firebaseArray, toaster, $modal) {

        $scope.newTask = false;

        var ref = new Firebase("https://listtodobogdan.firebaseio.com/");
        $scope.rows = $firebaseArray(ref);

        $scope.idSelectedRow = null;
        $scope.setSelectedRow = function(idSelectedItem) {
            $scope.idSelectedRow = idSelectedItem;
        };

        //$window.onclick = function() {
        //    $scope.idSelectedRow = null;
        //};

        $scope.addTaskEnter = function(e) {
        	if (e.keyCode === 13 && $scope.task) {
        		var action = $scope.task || "Not added any task";
        		$scope.rows.$add({action: action, done: false});
        		toaster.pop('success', "Task", "was added successfully");
        		$scope.task = "";
        	}
        };

        $scope.addTaskBtn = function () {
            $scope.taskAddLoading = true;
            var action = $scope.task || "Not added any task";
            $scope.rows.$add({action: action, done: false}).then(function (ref) {
                $scope.taskAddLoading = false;
                var id = ref.key();
                var index = $scope.rows.$indexFor(id);
                toaster.pop('success', "Task id - " + index, "was added successfully");
            });
            $scope.task = "";
        };

        $scope.removeTask = function ($id) {
            $scope.isRemoving = true;
            var item = $scope.rows[$id];
            $scope.rows.$remove(item).then(function(ref) {
                ref.key() === item.$id; // true
                $scope.isRemoving = false;
                toaster.pop('success', "Task id - " + $id, "was removed successfully");
            });
        };

        //$scope.showEditModal = function($taskId) {
        //    $scope.updateModal = $modal({
        //        scope: $scope,
        //        templateUrl: 'templates/modal-edit-task.html',
        //        show: true
        //    });
        //};

        $scope.editTask = function($taskId) {
            $scope.isSaving = true;

            $scope.rows[$taskId].foo = "bar";
            $scope.rows.$save($taskId).then(function(ref) {

                $scope.isSaving = false;
                ref.key() === list[$taskId].$id; // true

            });

        };

    }]);

todoApp.controller('testController', function ($scope) {

});

todoApp.controller('jsController', function ($scope) {

});

todoApp.controller('regexpController', function ($scope) {

});

todoApp.controller('plansController', function ($scope) {

});