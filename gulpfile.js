var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    svgSprite = require('gulp-svg-sprite'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var svgConfig = {
    dest: '.',
    shape: {
        dimension: {
            maxWidth: 15,
            maxHeight: 15
        },
        spacing: {
            padding: 1,
        },
    },
    mode: {
        css: {
            dest: '.',
            sprite: 'sprite.svg',
            render: {
                css: true
            },
            example: true,
            prefix: '.icn-'
        }
    }
};

gulp.task('scripts', function() {
    return gulp.src('./public/js/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/js'));
});

// gulp.task('images', function() {
//   	return gulp.src('./public/images/*')
//     	.pipe(cache(imagemin({ optimizationLevel: 1, progressive: true, interlaced: true })))
//     	.pipe(gulp.dest('./public/images/compressed'));
// });

gulp.task('icons', function () {
    gulp.src('./public/icons/svg/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./public/icons/sprite/'));
});

gulp.task('watch', function() {
    // Watch .js files
    gulp.watch('./public/js/*.js', ['scripts']);
    // Watch .css files
    gulp.watch('./public/styles/*.css', ['css']);
    // Watch image files
    gulp.watch('./public/images/*', ['images']);
});

gulp.task('default', ['scripts', 'icons', 'watch']);