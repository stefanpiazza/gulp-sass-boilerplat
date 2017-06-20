var gulp = require('gulp')
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync').create();


gulp.task('styles', function() {
	gulp.src('./src/scss/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['> 1%', 'IE 7'],
            cascade: false
        }))
		.pipe(gulp.dest('./dest/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './',
		},
		port: 3005,
	});

	gulp.watch('./src/scss/**/*.scss', ['styles']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);