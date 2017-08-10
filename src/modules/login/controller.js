/**
 * @author hebert ramos
 */
define(['./module'], function (module) {
    'use strict';

    module.controller('LoginController', ['$scope', '$stateParams', 'loggedUserService', function ($scope, $stateParams, loggedUserService) {

        if(loggedUserService.getUser()){

            $scope.$root.$broadcast('GO_TO_HOME_PAGE');
            return;
        }

        $scope.hasError = $stateParams.error;
    }]);
});