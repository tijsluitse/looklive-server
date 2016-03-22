var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    critical = require('critical').stream;

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

gulp.task('critical', function (cb) {
  critical.generate({
    base: '_site/',
    src: 'index.html',
    css: ['./public/dist/styles/style.min.css'],
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    dest: './public/dist/critical/critical.css',
    minify: true,
    extract: false,
    ignore: ['font-face']
  });
});

gulp.task('images', function() {
  	return gulp.src('./public/images/*')
    	.pipe(cache(imagemin({ optimizationLevel: 6, progressive: true, interlaced: true })))
    	.pipe(gulp.dest('./public/images/compressed'));
});

gulp.task('icons', function () {
    gulp.src('./public/icons/svg/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./public/icons/sprite/'));
});

gulp.task('watch', function() {
    gulp.watch('./public/js/*.js', ['scripts']);
    gulp.watch('./public/styles/*.css', ['css']);
    gulp.watch('./public/images/*', ['images']);
});

gulp.task('default', ['watch', 'jsmin', 'critical', 'images', 'cssmin', 'icons']);


