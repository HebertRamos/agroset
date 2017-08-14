/**
 * @author hebert ramos
 */
define(['./module'], function (module) {
    'use strict';

    module.controller('LayoutController', ['$scope', 'loggedUserService', function ($scope, loggedUserService) {


        $scope.loggedUser = loggedUserService.getUser();


    }]);
});