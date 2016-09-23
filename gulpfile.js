var gulp = require('gulp');
var del = require('del');
var gulpTypescript = require('gulp-typescript');
var uglify = require('gulp-uglify');

var tsconfig = gulpTypescript.createProject('tsconfig.json');

gulp.task('cleaning' , function(){
    del('public');
});

gulp.task('build-ts', function() {
    return gulp.src('src/typescript/**/*.ts')
        .pipe(gulpTypescript(tsconfig))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('coppingIndex' , function(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('coppingHtmls' , function(){
    return gulp.src('src/html/**/*')
        .pipe(gulp.dest('public/html'));
});


gulp.task('coppingCss' , function(){
    return gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('public/css/'));
});

gulp.task('coppingPic' , function(){
    return gulp.src('src/pictures/**/*')
        .pipe(gulp.dest('public/pictures/'));
});

gulp.task('watching' , function(){
    gulp.watch('src/typescript/**/*' , ['build-ts']);
    gulp.watch('src/css/**/*' , ['coppingCss']);
    gulp.watch('src/index.html' , ['coppingIndex']);
    gulp.watch('src/pictures/**/*' , ['coppingPic']);
    gulp.watch('src/html/**/*' , ['coppingHtmls']);
});