/**
 * @author hebert ramos
 */
define(['../module', 'angular'], function (module, angular) {
    'use strict';

    function armazenarItemCompraNoEscope($scope, itemCompra) {
        $scope.itemCompra = angular.copy(itemCompra);
    }

    function armazenarUnidadeMedidaNoEscopo($scope, UNIDADES_MEDIDA) {
        $scope.unidadesMedida = UNIDADES_MEDIDA;
    }

    function iniciarAbaEntrada($scope, EntradaItemCompraService) {

        var novaEntradaDefault = {quantidade: 1, itemCompra: $scope.itemCompra};

        function setNovaEntrada() {
            $scope.novaEntrada = angular.copy(novaEntradaDefault);
        }

        function buscarEntradas() {
            EntradaItemCompraService.buscarTodos($scope.itemCompra.id)
                .then(function (entradas) {
                    $scope.entradasGridOptions.data = entradas;
                });
        }


        $scope.isNovaEntrada = false;

        $scope.entradasGridOptions = {
            enableSorting: false,
            columnDefs: [
                {name: 'data', type: 'date', cellFilter: 'date:\'dd/MM/yyyy HH:mm\''},
                {name: 'quantidade'},
                {name: 'usuário', field:'usuario.nome'}
            ],
            data: []
        };

        $scope.irParaAbaEntradas = function () {
            buscarEntradas();
        };

        $scope.novaEntrada = function () {
            $scope.isNovaEntrada = true;
            setNovaEntrada();
        };

        $scope.salvarEntrada = function ($event) {

            $event.preventDefault();

            EntradaItemCompraService.salvar($scope.novaEntrada)
                .then(function () {

                    $scope.isNovaEntrada = false;
                    setNovaEntrada();
                    $scope.$root.successNotification();
                    buscarEntradas();

                }).catch(function (err) {
                    $scope.$root.errorNotification(err);
                });
        };

        $scope.cancelarEntrada = function ($event) {
            $event.preventDefault();
            $scope.isNovaEntrada = false;
        };

    }


    function iniciarAbaSaida($scope, SaidaItemCompraService) {

        var novaSaidaDefault = {quantidade: 1, itemCompra: $scope.itemCompra, tipo: 'MANUAL'};

        function setNovaSaida() {
            $scope.novaSaida = angular.copy(novaSaidaDefault);
        }

        function buscarSaidas() {
            SaidaItemCompraService.buscarTodos($scope.itemCompra.id)
                .then(function (saidas) {
                    $scope.saidasGridOptions.data = saidas;
                });
        }

        $scope.isNovaSaida = false;

        $scope.saidasGridOptions = {
            enableSorting: false,
            columnDefs: [
                {name: 'data', type: 'date', cellFilter: 'date:\'dd/MM/yyyy HH:mm\''},
                {name: 'quantidade'},
                {name: 'tipo'},
                {name: 'justificativa'}
            ],
            data: []
        };

        $scope.irParaAbaSaidas = function () {

            buscarSaidas();
        };

        $scope.novaSaida = function () {
            $scope.isNovaSaida = true;
            setNovaSaida();
        };

        $scope.salvarSaida = function ($event) {

            $event.preventDefault();

            SaidaItemCompraService.salvar($scope.novaSaida)
            .then(function () {

                $scope.isNovaSaida = false;
                    setNovaSaida();
                $scope.$root.successNotification();
                buscarSaidas();

            }).catch(function (err) {
                $scope.$root.errorNotification(err);
            });

        };

        $scope.cancelarSaida = function ($event) {
            $event.preventDefault();
            $scope.isNovaSaida = false;
        };

    }

    module.controller('ItemCompraEditController', ['$scope', '$state', 'ItemCompraService', 'itemCompra', 'acao', 'UNIDADES_MEDIDA', 'EntradaItemCompraService','SaidaItemCompraService',
        function ($scope, $state, ItemCompraService, itemCompra, acao, UNIDADES_MEDIDA, EntradaItemCompraService, SaidaItemCompraService) {


            $scope.acao = acao;
            armazenarItemCompraNoEscope($scope, itemCompra);
            armazenarUnidadeMedidaNoEscopo($scope, UNIDADES_MEDIDA);

            iniciarAbaEntrada($scope, EntradaItemCompraService);
            iniciarAbaSaida($scope, SaidaItemCompraService);

            $scope.salvar = function () {

                var isNew = $scope.itemCompra.id === null;

                ItemCompraService.salvar($scope.itemCompra)
                    .then(function (itemCompraSalvo) {

                        if (isNew) {
                            $state.go('layout.itemCompraEdit', {id: itemCompraSalvo.id});
                        }

                        $scope.$root.successNotification();
                    })
                    .catch(function (err) {

                        $scope.$root.errorNotification(err);
                    })
            };

        }]);
});