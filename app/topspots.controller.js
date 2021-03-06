(function() {
    'use strict';

    angular
        .module('SDTopSpots')
        .controller('TopSpotsController', TopSpotsController);

    TopSpotsController.$inject = ['TopSpotsFactory', 'toastr'];

    /* @ngInject */
    function TopSpotsController(TopSpotsFactory, toastr) {
        var vm = this;
        vm.title = 'TopSpotsController';

        activate();

        ////////////////

        function activate() {
            getTopSpots();
        }

        function getTopSpots() {
            TopSpotsFactory.getTopSpots().then(
                function(response) {

                    vm.topspots = response.data;
                    toastr.success('We have topspots!');
                },
                function(error) {
                    if (error.data) {
                        toastr.error('There was a problem: ' + error.data);
                    } else {
                        toastr.info('no data found')
                    }
                }
            )
        }
        vm.addRow = function() {
            vm.topspots.push({ 'name': vm.name, 'description': vm.description, 'location': [vm.locationLAT, vm.locationLONG] });
            vm.name = '';
            vm.description = '';
            vm.locationLAT = '';
            vm.locationLONG = '';
        };
    }

})();
// reviewed by vs and gb
