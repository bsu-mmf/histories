var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean');

(function() {
    gulp.task('connect', connect.server({
        root: ['dev'],
        port: 1337,
        livereload: true,
        open: {
            browser: 'chrome'
        }
    }));

    gulp.task('html.dev', function () {
        gulp.src('./dev/templates/*.tpl')
            .pipe(connect.reload())
            .pipe(gulp.dest('./dev/templates'));
    });
    gulp.task('css.dev', function () {
        gulp.src('./dev/css/**/*.css')
            .pipe(connect.reload())
            .pipe(gulp.dest('./dev/css'));
    });
    gulp.task('scripts.dev', function() {
        gulp.src(['./dev/js/**/*.js'])
            .pipe(connect.reload())
            .pipe(gulp.dest('./dev/js'));
    });

    gulp.task('watch', ['move'], function () {
        gulp.watch(['./dev/templates/*.tpl'], ['html']);
        gulp.watch(['./dev/css/*.css'], ['css']);
    });
    
    gulp.task('clean', function(){
      return gulp.src(['./dev/*'], {read:false})
        .pipe(clean());
    });
    var filesToMove = [
        './css/**',
        './js/**',
        './stories/**',
        './img/**',
        './templates/**',
        './index.html'
    ]
    gulp.task('move', ['clean'], function() {
        gulp.src(filesToMove, { base: './'})
            .pipe(gulp.dest('./dev/'));
    });


    gulp.task('default', ['move', 'connect', 'watch']);
}());

(function() {
    gulp.task('html.build', function () {
        gulp.src('./dev/templates/*.tpl')
            .pipe(minifyHTML())
            .pipe(gulp.dest('./build/templates'));
    });
    gulp.task('css.build', function () {
        gulp.src('./dev/css/*.css')
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
      return gulp.src(['./build/*'], {read:false})
        .pipe(clean());
    });
    var filesToMove = [
        './stories/*.*',
        './css/fonts/*.*',
        './img/*.*',
        './index.html'
    ]
    gulp.task('move.build', ['clean.build'], function() {
        gulp.src(filesToMove, { base: './'})
            .pipe(gulp.dest('./build/'));
    });

    gulp.task('build', ['html.build', 'css.build', 'scripts.build', 'move.build']);
}());