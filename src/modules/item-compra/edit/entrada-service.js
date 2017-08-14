/**
 * @author hebert ramos
 */
define(['../module'], function(module){

    function criarItemCompraResource($resource, idItem) {

        return $resource('/agrosetApi/itensCompra/' + idItem + '/entradas' ,
            {id: '@id'},
            {
                'query': {method: 'GET', isArray: true},
                'create': {method: 'POST'}
            });
    }

    function entradaValida(entradaItemCompra){

        var valido = entradaItemCompra.quantidade != null && parseInt(entradaItemCompra.quantidade) > 0;

        return valido;
    }

    function createPromiseCamposOBrigatorios($q){

        var deferred = $q.defer();
        deferred.reject('Campos obrigatórios não preenchidos.');

        return deferred.promise;
    }

    return module.service('EntradaItemCompraService', ['$resource', '$q', function ($resource, $q) {

        var that = this;

        var resources = {};

       function getEntradaResource(idItem){

           if(!resources[idItem]){
               resources[idItem] = criarItemCompraResource($resource, idItem);
           }

           return resources[idItem];
       }

        that.buscarTodos = function(idItem){

            var resource = getEntradaResource(idItem);
            return resource.query().$promise;

        };

        that.salvar = function(entradaItemCompra){

            if(entradaValida(entradaItemCompra)) {
                var resource = getEntradaResource(entradaItemCompra.itemCompra.id);
                return resource.create(entradaItemCompra).$promise;
            }else{
                return createPromiseCamposOBrigatorios($q);
            }
        };


    }]);


});