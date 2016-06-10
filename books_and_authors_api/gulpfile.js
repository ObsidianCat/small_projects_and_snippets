/**
 * Created by Lula on 5/30/2016.
 */
var gulp = require("gulp"),
    nodemon = require("gulp-nodemon"),
    gulpMocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest');

gulp.task("default", function(){
    nodemon({
        script:"app.js",
        ext:"js",
        env:{
            PORT:3000
        },
        ignore:["./node_modules/**"]
    })
    .on('restart', function(){
        console.log('restarting')
    });
});

gulp.task("test", function(){
  env.({vars:{ENV:'Test'}});
  gulp.src('Test/*.js', {read:false})
    .pipe(gulpMocha({reporter:'nyan'}))
});