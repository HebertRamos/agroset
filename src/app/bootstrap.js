/**
 * @author hebert ramos
 */

define([
    'require',
    'angular',
    'angularRoute',
    './app',
    './logged-user'
], function (require, ng, ngRoute, app, loggedUser) {
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
