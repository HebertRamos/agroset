/**
 * @author hebert ramos
 */

define([
    'require',
    'angular',
    'angularRoute',
    'angularUiGrid',
    'angularResource',
    './app',
    './logged-user',
    'bootstrap'
], function (require, ng, ngRoute, ngUiGrid, angularResource, app, loggedUser) {
    'use strict';

    function bootstrapApp(document, loggedUser_){
        app.constant('loggedUser', loggedUser_);
        ng.bootstrap(document, ['app']);
    }

    require(['domReady!'], function (document) {

        loggedUser
            .then(function(loggedUserData){
                bootstrapApp(document, loggedUserData.data);
            })
            .catch(function(){
                bootstrapApp(document, null);
            });

    });
});
