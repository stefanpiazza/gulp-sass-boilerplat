var gulp = require('gulp')
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

gulp.task('styles', function() {
	gulp.src('./src/scss/styles.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('./dest/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./src/scss/*.scss', ['styles']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);