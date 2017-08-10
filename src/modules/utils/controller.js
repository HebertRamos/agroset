/**
 * @author hebert ramos
 */
define(['./module'], function (utils) {
    'use strict';

    utils.service('servicet', [function () {

        var that = this;

        that.teste = function(){

            console.log('teste');
        };


    }]);
});