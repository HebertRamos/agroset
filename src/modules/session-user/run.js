/**
 * @author hebert ramos
 */
define(['./module'], function(app){


    return app.run(['$rootScope', 'loggedUserService', function($rootScope, loggedUserService) {

        $rootScope.$on('$locationChangeSuccess', function() {

            if(!loggedUserService.getUser()) {
                $rootScope.$broadcast('GO_TO_LOGIN_PAGE');
            }

        });
    }]);

});