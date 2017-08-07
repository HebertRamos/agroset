/**
 * @author hebert ramos
 */

define([
    'require',
    'angular',
    'angularRoute',
    './app'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
