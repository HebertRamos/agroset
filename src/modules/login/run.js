/**
 * @author hebert ramos
 */
define(['./module'], function(app){


    return app.run(function($rootScope, $state) {

        $rootScope.$on('GO_TO_LOGIN_PAGE', function() {
            $state.go('login');
        });
    });
});