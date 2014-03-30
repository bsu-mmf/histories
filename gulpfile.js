/* global require */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    coffee = require('gulp-coffee'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade'),
    useref = require('gulp-useref');

(function() {
    'use strict';
    
    gulp.task('connect', connect.server({
        root: ['dev'],
        port: 1337,
        livereload: true,
        open: {
            browser: 'chrome'
        }
    }));

    gulp.task('html.dev', function () {
        gulp.src('./templates/*.tpl')
            .pipe(jade({
                pretty: true
            }))
            .pipe(connect.reload())
            .pipe(gulp.dest('./dev/templates'));
    });
    gulp.task('styles.dev', function () {
        gulp.src('./styles/*.styl')
            .pipe(stylus({
                use: ['nib']
            }))
            .pipe(connect.reload())
            .pipe(gulp.dest('./dev/styles'));
    });
    gulp.task('scripts.dev', function() {
        gulp.src(['./src/**/*.coffee'])
            .pipe(coffee())
            .pipe(connect.reload())
            .pipe(gulp.dest('./dev/src'));
    });
    gulp.task('stories', function() {
        gulp.src(['./stories/**'])
            .pipe(connect.reload())
            .pipe(gulp.dest('./dev/stories'));
    });

    gulp.task('watch', ['move'], function () {
        gulp.watch(['./templates/*.tpl'], ['html.dev']);
        gulp.watch(['./styles/**/*.styl'], ['styles.dev']);
        gulp.watch(['./src/**/*.coffee'], ['scripts.dev']);
        gulp.watch(['./stories/**'], ['stories']);
    });

    var filesToMove = [
        './styles/style.css',
        './styles/fonts/*.*',
        './stories/**',
        './img/**',
        './index.html'
    ];
    gulp.task('move', function() {
        gulp.src(filesToMove, { base: './'})
            .pipe(gulp.dest('./dev/'));
    });

    gulp.task('default', function() {
        gulp.start('scripts.dev', 'styles.dev', 'html.dev', 'move', 'connect', 'watch');
    });
}()); // dev configuration

(function() {
    'use strict';
    
    gulp.task('html.build', function () {
        gulp.src('./templates/*.tpl')
            .pipe(jade())
            .pipe(gulp.dest('./build/templates'));
        gulp.src('./index.html')
            .pipe(useref())
            .pipe(minifyHTML())
            .pipe(gulp.dest('./build'));
    });
    gulp.task('styles.build', function () {
        gulp.src('./styles/*.styl')
            .pipe(stylus({
                use: ['nib'],
                set: ['compress']
            }))
            .pipe(gulp.dest('./build/styles'));
        gulp.src('./styles/style.css')
            .pipe(minifyCSS())
            .pipe(gulp.dest('./build/styles'));
    });
    gulp.task('scripts.build', function() {
        gulp.src('./src/**/*.coffee')
            .pipe(coffee())
            .pipe(uglify())
            .pipe(concat('all.min.js'))
            .pipe(gulp.dest('./build/src'));
    });

    gulp.task('clean.build', function(){
        gulp.src(['./build/*'], {read: false})
            .pipe(clean());
    });
    var filesToMove = [
        './stories/*.*',
        './styles/fonts/*.*',
        './img/*.*'
    ];
    gulp.task('move.build', function() {
        gulp.src(filesToMove, { base: './'})
            .pipe(gulp.dest('./build/'));
    });

    gulp.task('build', ['clean.build'], function() {
        gulp.start('html.build', 'styles.build', 'scripts.build', 'move.build');
    });
}()); // build configuration