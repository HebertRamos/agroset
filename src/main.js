require.config({

    // alias libraries paths
    paths: {
        'domReady': 'vendor/requirejs-domready/domReady',
        'angular': 'vendor/angular/angular',
        'angularRoute': 'vendor/angular-ui-router/release/angular-ui-router',
        'text': 'vendor/text/text'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute':{
            exports:'angular',
            deps:['angular']
        }
    },

    // kick start application
    deps: ['./app/bootstrap']
});