const gulp = require('gulp');
// 걸프 의존성 
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
	// ESLint 실행
	gulp.src("src/**/*.js")
	  .pipe(eslint())
	  .pipe(eslint.format());

	// es6 -> es5 트랜스컴파일
	gulp.src("src/**/*.js")
	  .pipe(babel())
	  .pipe(gulp.dest("dist"));
	
});
