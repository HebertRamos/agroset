/**
 * @author hebert ramos
 */
define([
    'angular',
    '../modules/layout/main',
    '../modules/login/main',
    '../modules/home/main',
    '../modules/session-user/main',
    '../modules/item-compra/main'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ui.router', 'ui.grid', 'ui.grid.edit', 'ui.grid.autoResize', 'ngResource',
        'app.layout',
        'app.home',
        'app.login',
        'app.session-user',
        'app.item-compra'
    ]).config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

});