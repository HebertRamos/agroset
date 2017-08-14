/**
 * @author hebert ramos
 */
define(['../module', 'text!./acoes-view.html'], function (module, acoesView) {
    'use strict';

    module.controller('ItemCompraListController', ['$scope', 'itensCompra', function ($scope, itensCompra) {


        $scope.irParaEdicao = function (idItem) {


            alert(idItem);
        };

        var myAwesomeSortFn = function(a, b, rowA, rowB, direction){
            return a.localeCompare(b);
        };

        $scope.gridOptions = {
            enableSorting: false,
            columnDefs: [
                {name: 'nome'},
                {name: 'codigo'},
                {name: 'estoque'},
                {name: 'estoqueReservado'},
                {name: 'unidadeMedida', cellFilter: 'unidadeMedidaFilter'},
                {name: 'situacao', field: 'situacao'},
                {name: 'ações', cellTemplate: acoesView, width:'20%'}
            ],
            data: itensCompra
        };





    }]);
});