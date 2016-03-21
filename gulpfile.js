var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    concat = require('gulp-concat');

// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('./public/js/*.js')
      .pipe(concat('main-concat.js'))
      .pipe(gulp.dest('./public/js'));
});

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

gulp.task('icons', function () {
    gulp.src('./public//icons/svg/*.svg')
        .pipe(svgSprite(svgConfig))
        .pipe(gulp.dest('./public/icons/sprite/'));
});

gulp.task('default', ['scripts', 'icons']);