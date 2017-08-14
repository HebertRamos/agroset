require.config({

    // alias libraries paths
    paths: {
        jquery: 'vendor/jquery/dist/jquery',
        bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
        'domReady': 'vendor/requirejs-domready/domReady',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'Noty': 'vendor/noty/lib/noty',
        'angular': 'vendor/angular/angular',
        'angularRoute': 'vendor/angular-ui-router/release/angular-ui-router',
        'angularResource': "vendor/angular-resource/angular-resource",
        'angularUiGrid': 'vendor/angular-ui-grid/ui-grid',
        'text': 'vendor/text/text'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery']
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularRoute': {
            exports: 'angular',
            deps: ['angular']
        },
        'angularUiGrid': {
            exports: 'angular',
            deps: ['angular']
        },
        'angularResource': {
            exports: 'angular',
            deps: ['angular']
        }
    },

    // kick start application
    deps: ['./app/bootstrap']
});