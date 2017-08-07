/**
 * @author hebert ramos
 */
define([
    'angular',
    '../modules/layout/main',
    '../modules/login/main',
    '../modules/home/main'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ui.router',
        'app.login',
        'app.layout',
        'app.home'
    ]).config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

});