var gulp            = require('gulp'),
    svgSprite       = require('gulp-svg-sprite'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglify'),
    rename          = require('gulp-rename'),
    cssmin          = require('gulp-cssmin');
    browserSync     = require('browser-sync').create(),
    reload          = browserSync.reload;

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

gulp.task('jsmin', function() {
    return gulp.src('./public/js/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/js'));
});

gulp.task('cssmin', function () {
    gulp.src('./public/styles/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/dist/styles'));
});

gulp.task('imgopt', function() {
    gulp.src('./public/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./public/images/compressed/'));
});

gulp.task('iconsprite', function () {
    gulp.src('./public/icons/svg/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./public/icons/sprite/'));
});

gulp.task('watch', function() {
    gulp.watch('./public/js/*.js', ['jsmin', reload]);
    gulp.watch('./public/styles/*.css', ['cssmin', reload]);
});

gulp.task('default', ['jsmin', 'cssmin', 'imgopt', 'iconsprite', 'watch']);
