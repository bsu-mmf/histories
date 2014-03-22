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
    jade = require('gulp-jade');

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
    gulp.task('css.dev', function () {
        gulp.src('./css/*.css')
            .pipe(connect.reload())
            .pipe(gulp.dest('./dev/css'));
    });
    gulp.task('scripts.dev', function() {
        gulp.src(['./js/**/*.js'])
            .pipe(connect.reload())
            .pipe(gulp.dest('./dev/js'));
    });

    gulp.task('watch', ['move'], function () {
        gulp.watch(['./templates/*.tpl'], ['html.dev']);
        gulp.watch(['./css/**/*.css'], ['css.dev']);
        gulp.watch(['./js/**/*.js'], ['scripts.dev']);
    });

    var filesToMove = [
        './css/**',
        './js/**',
        './stories/**',
        './img/**',
        './index.html'
    ];
    gulp.task('move', function() {
        gulp.src(filesToMove, { base: './'})
            .pipe(gulp.dest('./dev/'));
    });

    gulp.task('default', function() {
        gulp.start('html.dev','move' , 'connect', 'watch');
    });
}()); // dev configuration

(function() {
    'use strict';
    
    gulp.task('html.build', function () {
        gulp.src('./templates/*.tpl')
            .pipe(jade())
            .pipe(gulp.dest('./build/templates'));
    });
    gulp.task('css.build', function () {
        gulp.src('./css/*.css')
            .pipe(minifyCSS())
            .pipe(gulp.dest('./build/css'));
    });
    gulp.task('scripts.build', function() {
        gulp.src('./js/**/*.js')
            .pipe(uglify())
            .pipe(concat('all.min.js'))
            .pipe(gulp.dest('./build/js'));
    });

    gulp.task('clean.build', function(){
        gulp.src(['./build/*'], {read: false})
            .pipe(clean());
    });
    var filesToMove = [
        './stories/*.*',
        './css/fonts/*.*',
        './img/*.*',
        './index.html'
    ];
    gulp.task('move.build', function() {
        gulp.src(filesToMove, { base: './'})
            .pipe(gulp.dest('./build/'));
    });

    gulp.task('build', ['clean.build'], function() {
        gulp.start('html.build', 'css.build', 'scripts.build', 'move.build');
    });
}()); // build configuration