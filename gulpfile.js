'use strict';
/**
 * 引入包
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');//sass的编译
var cleanCss = require('gulp-clean-css');//压缩css
var autoprefixer = require('gulp-autoprefixer');//自动添加css前缀
var concat = require('gulp-concat');//合并js文件
var uglify = require('gulp-uglify');//压缩js代码
var rename = require('gulp-rename');//重命名
var notify = require('gulp-notify');//更改提醒
var cssSprite = require('gulp-css-spritesmith');//css 代码中的切片合并成雪碧图的工具
var gulpIf = require('gulp-if');//gulp if
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


/*
 * default
 * */
gulp.task('default', ['styles-wujinshenyu', 'styles-qijiwangzuo', 'styles-cosplay', 'styles-disney', 'styles-dongrinuanbei'],function(){

});

// 实时刷新浏览器
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: ["./zt/wujinshenyu", "./zt", ".zt/disney", "./zt/dongrinuanbei"]
        }
    });

});


/*
 * 监听
 * */
gulp.task("watch",['server'], function(){
    gulp.watch('./zt/wujinshenyu/scss/*.scss', ['styles-wujinshenyu']);
    gulp.watch('./zt/qijiwangzuo/scss/*.scss', ['styles-qijiwangzuo']);
    gulp.watch('./zt/cosplay/scss/*.scss', ['styles-cosplay']);
    gulp.watch('./zt/kfilm/scss/*.scss', ['styles-kfilm']);
    gulp.watch('./zt/disney/scss/*.scss', ['styles-disney']);
    gulp.watch('./zt/dongrinuanbei/scss/*.scss', ['styles-disney']);

    gulp.watch('./zt/wujinshenyu/css/*.css').on('change', reload);
    gulp.watch('./zt/qijiwangzuo/css/*.css').on('change', reload);
    gulp.watch('./zt/cosplay/css/*.css').on('change', reload);
    gulp.watch('./zt/kfilm/css/*.css').on('change', reload);
    gulp.watch('./zt/disney/css/*.css').on('change', reload);
    gulp.watch('./zt/dongrinuanbei/css/*.css').on('change', reload);

    gulp.watch("./html/*.html").on('change', reload);
    gulp.watch("./zt/wujinshenyu/*.html").on('change', reload);
    gulp.watch("./zt/qijiwangzuo/*.html").on('change', reload);
    gulp.watch("./zt/cosplay/*.html").on('change', reload);
    gulp.watch("./zt/kfilm/*.html").on('change', reload);
    gulp.watch("./zt/disney/*.html").on('change', reload);
    gulp.watch("./zt/dongrinuanbei/*.html").on('change', reload);

});


// 无尽神域专题任务
gulp.task('styles-wujinshenyu', function() {
    //编译sass
    return sass('./zt/wujinshenyu/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/wujinshenyu/css/'))
});



// 奇迹王座专题任务
gulp.task('styles-qijiwangzuo', function() {
    //编译sass
    return sass('./zt/qijiwangzuo/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/qijiwangzuo/css/'))
});

// cosplay专题任务
gulp.task('styles-cosplay', function() {
    //编译sass
    return sass('./zt/cosplay/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/cosplay/css/'))
});

// 韩国电影专题任务
gulp.task('styles-kfilm', function() {
    //编译sass
    return sass('./zt/kfilm/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/kfilm/css/'))
});

gulp.task('styles-disney', function(){
    //编译sass
    return sass('./zt/disney/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/disney/css/'))

})

gulp.task('styles-dongrinuanbei', function(){
    //编译sass
    return sass('./zt/dongrinuanbei/scss/*.scss')

    //保存编译之后的css文件到指定的目录
        .pipe(gulp.dest('./zt/dongrinuanbei/css/'))

})

