const gulp = require('gulp');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const order = require('gulp-order');
const jsImport = require('gulp-js-import');
const sourcemaps = require('gulp-sourcemaps');
const htmlPartial = require('gulp-html-partial');
const clean = require('gulp-clean');
const wrapCommonjs = require('gulp-wrap-commonjs');
const axios = require('axios');
const isProd = process.env.NODE_ENV === 'prod';

const htmlFile = ['src/*.html'];

function html() {
	return gulp
		.src(htmlFile)
		.pipe(
			htmlPartial({
				basePath: 'src/partials/',
			})
		)
		.pipe(
			gulpIf(
				isProd,
				htmlmin({
					collapseWhitespace: true,
				})
			)
		)
		.pipe(gulp.dest('docs'));
}

function css() {
	return gulp
		.src('src/sass/style.scss')
		.pipe(gulpIf(!isProd, sourcemaps.init()))
		.pipe(
			sass({
				includePaths: ['node_modules'],
			}).on('error', sass.logError)
		)
		.pipe(gulpIf(!isProd, sourcemaps.write()))
		.pipe(gulpIf(isProd, cssmin()))
		.pipe(gulp.dest('docs/css/'));
}

gulp.task('commonjs', function () {
	gulp.src(['src/**/*.js']).pipe(wrapCommonjs()).pipe(gulp.dest('docs'));
});

function js() {
	return gulp
		.src('src/js/*.js')
		.pipe(
			jsImport({
				hideConsole: true,
			})
		)
		.pipe(concat('all.js'))
		.pipe(gulpIf(isProd, uglify()))
		.pipe(gulp.dest('docs/js'));
}

function img() {
	return gulp
		.src('src/img/*')
		.pipe(gulpIf(isProd, imagemin()))
		.pipe(gulp.dest('docs/img/'));
}

function fonts() {
	return gulp
		.src('src/fonts/*')
		.pipe(gulpIf(isProd, imagemin()))
		.pipe(gulp.dest('docs/fonts/'));
}

function serve() {
	browserSync.init({
		open: true,
		server: './docs',
	});
}

function browserSyncReload(done) {
	browserSync.reload();
	done();
}

function watchFiles() {
	gulp.watch('src/**/*.html', gulp.series(html, browserSyncReload));
	gulp.watch('src/**/*.scss', gulp.series(css, browserSyncReload));
	gulp.watch('src/**/*.js', gulp.series(js, browserSyncReload));
	gulp.watch('src/img/**/*.*', gulp.series(img));
	gulp.watch('src/fonts/**/*.*', gulp.series(fonts));

	return;
}

function del() {
	return gulp.src('docs/*', { read: false }).pipe(clean());
}

exports.css = css;
exports.html = html;
exports.js = js;
exports.del = del;
exports.serve = gulp.parallel(html, css, js, img, fonts, watchFiles, serve);
exports.default = gulp.series(del, html, css, js, img, fonts);
