(function() {
    'use strict';

    angular
        .module('SDTopSpots', ['toastr']);
})();

// // define the top-level app container
// SDTopSpots = angular.module('SDTopSpots', []);

// // add controller, inject $scope, add a property to $scope and assign a value to it.
// SDTopSpots.controller('mainController', ['$scope', '$http', function($scope, $http) {
//     $http({
//         method: 'GET',
//         url: 'topspots.json'

//     }).then(function(result) {
//         $scope.topspots = result.data;




//     });

//     $scope.addRow = function() {
//         $scope.topspots.push({ 'name': $scope.name, 'description': $scope.description, 'location': [$scope.locationLAT, $scope.locationLONG] });
//         $scope.name = '';
//         $scope.description = '';
//         $scope.locationLAT = '';
//         $scope.locationLONG = '';
//     };
// }])
// reviewed by vs and gb
