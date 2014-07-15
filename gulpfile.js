/* global require */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    clean = require('gulp-clean'),
    coffee = require('gulp-coffee'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade'),
    useref = require('gulp-useref'),
    nib = require('nib'),
    reload = browserSync.reload;

(function() {
    'use strict';

    gulp.task('html.dev', function () {
        gulp.src('./templates/*.tpl')
            .pipe(jade({
                pretty: true
            }))
            .pipe(gulp.dest('./dev/templates'))
            .pipe(reload({stream: true, once: true}));
        gulp.src('index.html')
            .pipe(gulp.dest('./dev'))
            .pipe(reload({stream: true, once: true}));
    });
    gulp.task('styles.dev', function () {
        gulp.src('./styles/*.styl')
            .pipe(stylus({
                use: [ nib() ]
            }))
            .pipe(gulp.dest('./dev/styles'))
            .pipe(reload({stream: true}));
        gulp.src('./styles/*.css')
            .pipe(gulp.dest('./dev/styles'))
            .pipe(reload({stream: true}));
    });
    gulp.task('scripts.dev', function() {
        gulp.src(['./src/**/*.coffee'])
            .pipe(coffee())
            .pipe(gulp.dest('./dev/src'))
            .pipe(reload({stream: true, once: true}));
    });
    gulp.task('stories', function() {
        gulp.src(['./stories/**'])
            .pipe(gulp.dest('./dev/stories'))
            .pipe(reload({stream: true, once: true}));
    });

    gulp.task('watch', ['move'], function () {
        gulp.watch(['./templates/*.tpl'], ['html.dev']);
        gulp.watch(['./styles/**/*.styl'], ['styles.dev']);
        gulp.watch(['./src/**/*.coffee'], ['scripts.dev']);
        gulp.watch(['./stories/**'], ['stories']);
    });
    
    gulp.task('browser-sync', function() {
        browserSync({
            server: {
                baseDir: "./dev"
            }
        });
    });

    var filesToMove = [
        './styles/fonts/*.*',
        './stories/**',
        './img/**',
        './libs/**',
        './index.html'
    ];
    gulp.task('move', function() {
        gulp.src(filesToMove, { base: './'})
            .pipe(gulp.dest('./dev/'));
    });

    gulp.task('default', function() {
        gulp.start('scripts.dev', 'styles.dev', 'html.dev', 'move', 'browser-sync', 'watch');
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
                use: [ nib() ],
                set: ['compress']
            }))
            .pipe(gulp.dest('./build/styles'));
        gulp.src('./styles/*.css')
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
        './img/*.*',
        './libs/**'
    ];
    gulp.task('move.build', function() {
        gulp.src(filesToMove, { base: './'})
            .pipe(gulp.dest('./build/'));
    });

    gulp.task('build', ['clean.build'], function() {
        gulp.start('html.build', 'styles.build', 'scripts.build', 'move.build');
    });
}()); // build configuration