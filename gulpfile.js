var path = require('path');
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

var port = $.util.env.port || 1337;
var app = 'app/';
var dist = 'public/';

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [                 
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload());
});

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }))
    .pipe($.connect.reload());
});

gulp.task('styles',function(cb) {

  // convert stylus to css
  return gulp.src(app + 'styles/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: isProduction ? 'compress' : 'expanded'
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: autoprefixerBrowsers})) 
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(dist + 'css/'))
    .pipe($.size({ title : 'css' }))
    .pipe($.connect.reload());

});

gulp.task('media',function(cb) {

  // copy all files from app to dist
  return gulp.src(app + 'media/**/*')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title: 'files' }))
    .pipe($.connect.reload());

});

// add livereload on the given port
gulp.task('serve', function() {
  $.connect.server({
    root: dist,
    port: port,
    livereload: {
      port: 35729
    }
  });
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(app + 'styles/**/*.scss', ['styles']);
  gulp.watch(app + 'index.html', ['html']);
  gulp.watch(app + 'media/**/*', ['media']);
  gulp.watch(app + 'scripts/**/*.js', ['scripts']);
  gulp.watch(app + 'scripts/**/*.jsx', ['scripts']);
});

// remove bundels
gulp.task('clean', function(cb) {
  return del([dist], cb);
});


// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['html','media','scripts', 'styles', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['html','media','scripts','styles']);
});