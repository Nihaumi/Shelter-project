const { series } = require('gulp')

var scsslint = require('gulp-scss-lint')

var gulp = require('gulp')

var sass = require('gulp-sass')

var cleanCSS = require('gulp-clean-css')

var rename = require('gulp-rename')

var base64 = require('gulp-base64')

var autoprefixer = require('gulp-autoprefixer')

function lintScss () {
  return gulp.src('../web/typo3conf/ext/shelter/Resources/Private/Scss/**/*.scss')
    .pipe(scsslint({
      'config': 'scss-lint.yml'
    }))
    .pipe(scsslint.failReporter())
}

function sassToCss () {
  sass.compiler = require('node-sass')

  return gulp.src('../web/typo3conf/ext/shelter/Resources/Private/Scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('../web/typo3conf/ext/shelter/Resources/Public/Css'))
}

function cssAutoPrefixer () {
  return gulp.src('../web/typo3conf/ext/shelter/Resources/Public/Css/*.css')
    .pipe(autoprefixer({
      overrideBrowserslist: ['IE 10, IE 11, last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('../web/typo3conf/ext/shelter/Resources/Public/Css'))
}

function cssMinify () {
  return gulp.src('../web/typo3conf/ext/shelter/Resources/Public/Css/*.css')
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('../web/typo3conf/ext/shelter/Resources/Public/Css/Minify'))
}

function cssImgBase64 () {
  return gulp.src('../web/typo3conf/ext/shelter/Resources/Public/Css/Minify/*.css')
    .pipe(base64({
      extensions: ['svg', 'png', 'jpg', 'jpeg', 'gif']
    }))
    .pipe(gulp.dest('../web/typo3conf/ext/shelter/Resources/Public/Css/Minify'))
}

gulp.task('watch', function () {
  gulp.watch('../web/typo3conf/ext/shelter/Resources/Private/Scss/**/*.scss', gulp.series('default'))
})

exports.default = series(
  lintScss,
  sassToCss,
  cssAutoPrefixer,
  cssMinify,
  cssImgBase64
)
