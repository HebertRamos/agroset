/**
 * @author hebert ramos
 */
define(['./module'], function (module) {

    function criarFornecedorResource($resource) {

        return $resource('/agrosetApi/fornecedores/:id',
            {id: '@id'},
            {
                'getById': {method: 'GET'},
                'query': {method: 'GET', isArray: true},
                'create': {method: 'POST'},
                'update': {method: 'PUT'}
            });
    }

    return module.service('FornecedorService', ['$resource', function ($resource) {

        var that = this;

        that.fornecedorResource = criarFornecedorResource($resource);

        that.buscarTodos = function(){
            return that.fornecedorResource.query().$promise;
        };

    }]);

});