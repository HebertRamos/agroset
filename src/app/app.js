/**
 * @author hebert ramos
 */
define([
    'angular',
    '../modules/layout/main',
    '../modules/login/main',
    '../modules/home/main',
    '../modules/session-user/main'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ui.router',
        'app.layout',
        'app.home',
        'app.login',
        'app.session-user'
    ]).config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

});