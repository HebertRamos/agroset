/**
 * @author hebert ramos
 */
define(['../module'], function(module){

    function criarItemCompraResource($resource, idItem) {

        return $resource('/agrosetApi/itensCompra/' + idItem + '/saidas' ,
            {id: '@id'},
            {
                'query': {method: 'GET', isArray: true},
                'create': {method: 'POST'}
            });
    }

    function saidaValida(saidaItemCompra){

        var valido = saidaItemCompra.quantidade != null && parseInt(saidaItemCompra.quantidade) > 0;

        return valido;
    }

    function createPromiseCamposOBrigatorios($q){

        var deferred = $q.defer();
        deferred.reject('Campos obrigatórios não preenchidos.');

        return deferred.promise;
    }

    return module.service('SaidaItemCompraService', ['$resource', '$q', function ($resource, $q) {

        var that = this;

        var resources = {};

       function getSaidaResource(idItem){

           if(!resources[idItem]){
               resources[idItem] = criarItemCompraResource($resource, idItem);
           }

           return resources[idItem];
       }

        that.buscarTodos = function(idItem){

            var resource = getSaidaResource(idItem);
            return resource.query().$promise;

        };

        that.salvar = function(saidaItemCompra){

            if(saidaValida(saidaItemCompra)) {
                var resource = getSaidaResource(saidaItemCompra.itemCompra.id);
                return resource.create(saidaItemCompra).$promise;
            }else{
                return createPromiseCamposOBrigatorios($q);
            }
        };


    }]);


});