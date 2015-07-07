(function (angular) {
    'use strict';

    angular.module('gm.na.recalls', [])
        .controller('AppController', AppController);

    //////////

    AppController.$inject = ['$scope'];
    /* @ngInject */
    function AppController($scope) {
        var vm = this;

        vm.disableSubmit = true;
        vm.save = save;
        vm.showSubmit = false;
        vm.canSubmit = false;
        vm.state = '';
        vm.tac = '';
        vm.questions = {
            q1: '',
            q2: '',
            q3: '',
            q4: ''
        };
        vm.profile = {
            vin: ''
        };

        activate();





        //////////

        function activate() {
            setWatches();
        }

        function isIneligible() {
            return !!(vm.questions.q1 === 'false' || vm.questions.q2 === 'false');
        }

        function onQuestionChange() {
            if (isIneligible()) {
                vm.state = 'ineligible';
            }
        }

        function onProfileChange() {
            if (vm.profile.vin) {
                vm.showSubmit = true;
            }
        }

        function onTaCChange() {
            vm.disableSubmit = !vm.tac;
        }

        function setWatches() {
            $scope.$watch('vm.questions', onQuestionChange, true);
            $scope.$watch('vm.profile', onProfileChange, true);
            $scope.$watch('vm.tac', onTaCChange);
        }

        function save() {
            vm.state = 'submitted';
        }
    }

})(window.angular);