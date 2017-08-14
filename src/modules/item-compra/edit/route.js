/**
 * @author hebert ramos
 */
define(['../module', 'text!./view.html'], function (app, view) {


    'use strict';

    return app.config(['$stateProvider', function ($stateProvider) {

        var defaultState = {
            controller: 'ItemCompraEditController',
            controllerAs: 'ItemCompraEditCtl',
            template: view,
            resolve: {
                itemCompra: ['ItemCompraService', '$stateParams', function (ItemCompraService, $stateParams) {

                    if ($stateParams.id) {
                        return ItemCompraService.getById($stateParams.id);
                    } else {
                        return {
                            id: null,
                            nome: null,
                            codigo: null,
                            unidadeMedida: null,
                            situacao: 'ATIVO',
                            quantidade: 0,
                            estoqueMinimo: 1
                        };
                    }
                }]
            }
        };

        $stateProvider.state('layout.itemCompraNew', {

            url: '^/item-compra/new',
            controller: defaultState.controller,
            controllerAs: defaultState.controllerAs,
            template: defaultState.template,
            resolve: {
                acao: function () {
                    return 'new'
                },
                itemCompra: defaultState.resolve.itemCompra
            }

        });

        $stateProvider.state('layout.itemCompraView', {

            url: '^/item-compra/:id/view',
            controller: defaultState.controller,
            controllerAs: defaultState.controllerAs,
            template: defaultState.template,
            resolve: {
                acao: function () {
                    return 'view'
                },
                itemCompra: defaultState.resolve.itemCompra
            }

        });


        $stateProvider.state('layout.itemCompraEdit', {

            url: '^/item-compra/:id/edit',
            controller: defaultState.controller,
            controllerAs: defaultState.controllerAs,
            template: defaultState.template,
            resolve: {
                acao: function () {
                    return 'edit'
                },
                itemCompra: defaultState.resolve.itemCompra
            }
        });


    }]);


});