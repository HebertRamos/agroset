/**
 * @author hebert ramos
 */
define(['./module', 'text!./view.html'], function (app, view) {


    'use strict';
    return app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('layout.home', {

            url: '^/home',
            template: view
        });

    }]);
});