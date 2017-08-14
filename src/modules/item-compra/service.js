/**
 * @author hebert ramos
 */
define(['./module', 'jquery'], function (module, $) {

    function criarItemCompraResource($resource) {

        return $resource('/agrosetApi/itensCompra/:id',
            {id: '@id'},
            {
                'getById': {method: 'GET'},
                'query': {method: 'GET', isArray: true},
                'create': {method: 'POST'},
                'update': {method: 'PUT'}
            });
    }

    function itemCompraValido(itemCompra){

        var valido = true;
        var fielsToSkip = ['id', 'quantidade'];

        $.each(itemCompra, function(key, value){
            if(fielsToSkip.indexOf(key) === -1 && !value){

                valido = false;
                return;
            }
        });

        return valido;
    }

    function createPromiseCamposOBrigatorios($q){

        var deferred = $q.defer();
        deferred.reject('Campos obrigatórios não preenchidos.');

        return deferred.promise;
    }

    return module.service('ItemCompraService', ['$resource', '$q', function ($resource, $q) {

        var that = this;

        that.itemCompraResource = criarItemCompraResource($resource);


        that.getById = function(itemCompraId){
            return that.itemCompraResource.getById({id: itemCompraId}).$promise;
        };

        that.buscarTodos = function(){

            return that.itemCompraResource.query().$promise;

        };

        that.salvar = function(itemCompra){

            if(itemCompraValido(itemCompra)) {

                if(!itemCompra.id){
                    return that.itemCompraResource.create(itemCompra).$promise;
                }else {
                    return that.itemCompraResource.update(itemCompra).$promise;
                }
            }else{
                return createPromiseCamposOBrigatorios($q);
            }
        };


    }]);

});