/**
 * @author hebert ramos
 */

define(['./module'], function (app) {

    return app.filter('unidadeMedidaFilter', ['UNIDADES_MEDIDA', function (UNIDADES_MEDIDA) {

        return function (valor) {
            return UNIDADES_MEDIDA[valor];
        };

    }]);
});

