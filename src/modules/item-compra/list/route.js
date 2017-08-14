/**
 * @author hebert ramos
 */
define(['../module', 'text!./view.html'], function (app, view) {


    'use strict';

    return app.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('layout.itemCompraList', {

            url: '^/item-compra/list',
            template: view,
            controller: 'ItemCompraListController',
            resolve:{
                itensCompra:['ItemCompraService', function(ItemCompraService){
                    return ItemCompraService.buscarTodos();
                }]
            }
        });


    }]);
});