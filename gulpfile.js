var gulp = require('gulp');
var amdOptimize = require('gulp-amd-optimizer');
var concat = require('gulp-concat');

var requireConfig = {
    baseUrl: __dirname,
    paths:{
        'domReady': 'vendor/requirejs-domready/domReady',
        'angular': 'vendor/angular/angular',
        'angularRoute': 'vendor/angular-route/angular-route',
        'text': 'vendor/text/text'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute':{
            exports:'angular',
            deps:['angular']
        }
    }
};
var options = {
    umd: false
};

gulp.task('default', function () {
    return gulp.src('src/*.js', {base: requireConfig.baseUrl})
        .pipe(amdOptimize(requireConfig, options))
        .pipe(concat('modules.js'))
        .pipe(gulp.dest('dist'));
});