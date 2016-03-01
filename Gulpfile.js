var gulp = require('gulp');
var slurpy = require('gulp-concat');
var please = require('gulp-uglify');
var tinyStyles = require('gulp-minify-css');


//need to define tasks for gulp to run

//runs when 'gulp' is run in the command line
gulp.task('default', function(){

	console.log('GULP!')
})

gulp.task('miniCSS', function(){
	console.log('CSS Gulpin')
	// grabs all css files even in nested vs * - just css in root
	//chaingin methods in gulp - pipe
	gulp.src('./css/src/**/*.css')
	.pipe(slurpy('mini.css'))
	.pipe(tinyStyles())
	.pipe( gulp.dest('./css/dist') )
})

gulp.task('miniJS', function(){
	console.log('mini dat js')
	gulp.src('./css/src/**/*.js')
	.pipe(slurpy('mini.js'))
	.pipe(please())
	.pipe( gulp.dest('./js/dist') )
})

gulp.task('default', function(){
	console.log('GULP!')
	gulp.watch('./css/src/**/*.css', ['miniCSS'])
	gulp.watch('./js/src/**/*.js', ['miniJS'])
})