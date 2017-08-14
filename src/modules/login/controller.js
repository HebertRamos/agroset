/**
 * @author hebert ramos
 */
define(['./module', 'angular'], function (module, angular) {
    'use strict';

    module.controller('LoginController', ['$scope', '$stateParams', 'loggedUserService', function ($scope, $stateParams, loggedUserService) {

        if(loggedUserService.getUser()){

            $scope.$root.$broadcast('GO_TO_HOME_PAGE');
            return;
        }

        $scope.hasError = $stateParams.error;

        var element = angular.element('#username');
        element.focus();

    }]);
});