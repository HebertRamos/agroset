/**
 * @author hebert ramos
 */
define(['./module', 'Noty'], function (app, Noty) {


    function createNewNoty(type, mensagem){
        new Noty({text: mensagem, layout: 'topRight', type: type, timeout: 2000}).show();
    }

    return app.run(['$rootScope', function ($rootScope) {

        $rootScope.successNotification = function (mensagem) {

            mensagem = mensagem ? mensagem : 'Operação realizada com sucesso.';
            createNewNoty('success', mensagem);
        };
        $rootScope.warningNotification = function (mensagem) {
            createNewNoty('warning', mensagem);
        };
        $rootScope.errorNotification = function (mensagem) {
            createNewNoty('error', mensagem);
        };

    }]);
});