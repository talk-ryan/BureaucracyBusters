/*!***************************************************************************
 *****************************************************************************
 **
 ** Filename    : Gulpfile.js for GlobalHack V
 **
 *****************************************************************************
 ****************************************************************************/

/**
 ** JSLint overrides 
 **/
/*global document, window, alert, console, require, notify*/
/*jslint nomen: true */
/*jshint -W117 */

/*****************************************************************************
 **
 ** Hierarchy of Gulp processes 
 **
 **
 ** build
 **     gulp
 **         paths.gulp
 **     json
 **         paths.json
 **     dev
 **         html
 **             paths.dev_html
 **             html:lint
 **                 paths.dev_html
 **         dev_js
 **             paths.dev_js
 **             dev:js:lint
 **                 paths.dev_js
 **         dev_css
 **             paths.dev_css
 **             dev:less
 **                 paths.dev_less
 **     vendor
 **         vendor:js
 **             paths.vendor_js        
 **         vendor:css
 **             paths.vendor_css        
 **         vendor:map
 **             paths.vendor_map       
 **         
 ** clean
 **     clean:build
 **     clean:dist
 **
 ** default
 **     watch
 **     build
 **
 ** dist
 **     build
 **     vendor:js:dist
 **     dev:js:dist
 **     vendor:css:dist
 **     dev:css:dist
 **     dev:html:dist        
 **         dev:html    
 **             dev:html:lint
 ** 
 ** images
 **     paths.images
 **     jpgs
 **         paths.jpgs
 **     gifs
 **         paths.gifs
 **     videos
 **         paths.vid
 **
 ** server
 **
 ** todos
 ** 
 ** watch
 **     watch path.gulp
 **     watch path.json
 **     watch path.dev_less
 **     watch path.dev_css
 **     watch path.dev_html
 **     watch path.dev_js
 **     watch path.images
 **     watch path.vendor_css
 **     watch path.vendor_map
 **     watch path.vendor_js
 **
 ****************************************************************************/

(function () {
    // this function is strict...
    'use strict';


    //////////////////////////////////////////////////////////////////////////////
    //
    // Gulp functions/libraries
    //
    //////////////////////////////////////////////////////////////////////////////

    
    var gulp            = require('gulp'),
        changed         = require('gulp-changed'),
        csslint         = require('gulp-csslint'),
        gulpif          = require('gulp-if'),
        jscs            = require('gulp-jscs'),
        jshint          = require('gulp-jshint'),
        gulpLoadPlugins = require('gulp-load-plugins'),
        ngAnnotate      = require('gulp-ng-annotate'),
        rename          = require('gulp-rename'),
        webserver       = require('gulp-server-livereload'),
        taskListing     = require('gulp-task-listing'),
        uglify          = require('gulp-uglify'),
        gutil           = require('gulp-util'),
        eventstream     = require('event-stream'),
        browserSync     = require('browser-sync').create(),
        del             = require('del'),
        read            = require('fs').readFileSyn,
        http            = require('http'),
        leasot          = require('leasot'),
        runSequence     = require('run-sequence'),
        st              = require('st'),
        reload          = browserSync.reload,        
        plugins         = gulpLoadPlugins(),
        customReporter  = function(file) {
            gutil.log(gutil.colors.cyan(file.csslint.errorCount) +
                      ' errors in ' + gutil.colors.magenta(file.path));
            file.csslint.results.forEach(function(result) {
                gutil.log(result.error.message+' on line '+result.error.line);
            });
        },


    //////////////////////////////////////////////////////////////////////////////
    //
    // Pathnames to src files
    //
    //////////////////////////////////////////////////////////////////////////////

        
        paths = {
            gulp: [
                'Gulpfile.js'
            ],
            pkg: [
                'package.json',
                'bower.json',
                '.jshintrc',
                '.csslintrc'
            ],
            dev_less: [
                'src/less/*.less',
                '!src/less/variables.less',
                '!src/less/mixins.less'
            ],
            dev_css: [
                'src/css/*.css',
                '!src/css/vendor.css',
                '!src/css/vendor.min.css',
                '!src/css/allcss.css',
                '!src/css/allcss.min.css',
                '!src/css/**/*.map'
            ],
            dev_js: [
                'src/js/**/*.js',
                'src/js/ng-app.js',
                '!src/js/prototype.js',
                '!src/js/vendor.js',
                '!src/js/vendor.min.js',
                '!src/js/alljs.js',
                '!src/js/alljs.min.js'
            ],
            dev_html: [
                'src/**/*.html',
                '!src/proto.html',
                '!src/pulledText.html',
                '!src/sectionText.html'
            ],
            images: [
                'src/favicon.ico',
                'src/apple-touch-icon.png',
                '!src/images/**/Thumbs.db',
                '!src/images/**/*.ini'
            ],
            jpg: [
                'src/images/**/*.jpg'
            ],
            gif: [
                'src/images/**/*.gif'
            ],
            png: [
                'src/images/**/*.png'
            ],
            vid: [
                'src/images/**/*.wmv',
                'src/images/**/*.mov'
            ],
            json: [
                'src/json/**/*.json'
            ],
            font_awesome: [
                'src/font-awesome/**/*'
            ],    
            vendor_css: [
                'bower_components/angular-ui/build/angular-ui.css',
                'bower_components/angular-ui-bootstrap/src/carousel/carousel.css',
                'bower_components/bootstrap/dist/css/bootstrap.css',
                'bower_components/font-awesome/css/font-awesome.css'
            ],
            vendor_map: [
                'bower_components/angularjs/angular.min.js.map',
                'bower_components/bootstrap/dist/css/bootstrap.css.map',
                'bower_components/bootstrap/dist/css/bootstrap-theme.css.map',
                'bower_components/font-awesome/css/font-awesome.css.map',
                'bower_components/jquery/dist/jquery.min.map'
            ],
            vendor_js: [
                /*
                "https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js",
                "https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js",
                "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.js",
                "//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js",
                "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.js",
                "//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js",
                "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.js",
                "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.js",
                "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-touch.js",
                "http://cdnjs.cloudflare.com/ajax/libs/angular-ui-utils/0.1.1/angular-ui-utils.min.js",
                "http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.14/angular-ui-router.js",
                "http://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.1/ui-bootstrap-tpls.js",
                "http://cdnjs.cloudflare.com/ajax/libs/angular-ui-sortable/0.13.3/sortable.js",
                "http://cdnjs.cloudflare.com/ajax/libs/angular-carousel/0.3.10/angular-carousel.js",
                'bower_components/html5shiv/dist/html5shiv.js', // Called out separately in index.html
                'bower_components/respond/src/respond.js',      // Called out separately in index.html
                */
                'bower_components/modernizr/modernizr.js',
                'bower_components/jquery/dist/jquery.js',
                'bower_components/jquery-ui/jquery-ui.js',
                'bower_components/bootstrap/dist/js/bootstrap.js',
                'bower_components/angularjs/angular.js',
                'bower_components/angular-animate/angular-animate.js',
                'bower_components/angular-touch/angular-touch.js',
                'bower_components/angular-ui/build/angular-ui.js',
                'bower_components/angular-ui/common/module.js',
                'bower_components/angular-ui/build/angular-ui-ieshiv.js',
                'bower_components/angular-ui-bootstrap/src/carousel/carousel.js',
                'bower_components/angular-carousel/src/directives/shifty.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/angular-ui-sortable/sortable.js',
                '!bower_components/bootstrap/dist/js/npm.js',
                '!src/js/vendor.js',
                '!src/js/vendor.min.js'
            ]
        };

    //////////////////////////////////////////////////////////////////////////////
    //
    // GULP custom functions
    //
    //////////////////////////////////////////////////////////////////////////////

    function errorAlert(error){
        plugins.notify.onError({title: "Error", message: " : <%= error.message %>", sound: "Sosumi"})(error); //Error Notification
        console.log(error.toString());//Prints Error to Console
        this.emit("end"); //End function
    };
    
    gulp.task("error", function () {
        return gulp.src("./")
            .pipe(through.obj(function (file, enc, callback) {
                this.emit("error", new Error("Something happend: Error message!"));
                callback();
            }))
            .on("error", notify.onError({
                message: 'Error: <%= error.message %>',
                sound: false // deactivate sound?
            }))
            .on("error", function (err) {
                console.log("Error:", err);
            })
    });
    
    //////////////////////////////////////////////////////////////////////////////
    //
    // GULP supporting files
    //
    //////////////////////////////////////////////////////////////////////////////

    // RUN: gulp gulp
    //
    // Check to see if Gulpfile.js was changed
    gulp.task("gulp", function () {
        return gulp.src("gulpfile.js")
            // Only get the files that changed since the last time it was run 
            .pipe(plugins.changed("./"))
            .pipe(plugins.ngAnnotate())
            .on("error", plugins.notify.onError({message: 'Error annotating <%= file.relative %> : <%= error.message %>'}))
            .pipe(plugins.notify({ message: "Gulp file <%= file.relative %> changed"}));
    });

    // RUN: gulp pkg
    //
    // Check to see if .jshintrc was changed
    gulp.task("pkg", function () {
        return gulp.src(paths.pkg)
            // Only get the files that changed since the last time it was run 
            .pipe(plugins.changed('./'))
            .pipe(plugins.ngAnnotate())
            .on("error", plugins.notify.onError({message: 'Error annotating <%= file.relative %> : <%= error.message %>'}))
            .pipe(plugins.notify({ message: "<%= file.relative %> changed"}));
    });
    

    // RUN: gulp :jshint
    //
    // Check to see if .jshintrc was changed
    gulp.task(":jshint", function () {
        return gulp.src(".jshintrc")
            // Only get the files that changed since the last time it was run 
            .pipe(plugins.changed('./'))
            .pipe(plugins.ngAnnotate())
            .on("error", plugins.notify.onError({message: 'Error annotating <%= file.relative %> : <%= error.message %>'}))
            .pipe(plugins.notify({ message: "<%= file.relative %> changed"}));
    });
    

    //////////////////////////////////////////////////////////////////////////////
    //
    // CLEAN - Remove target files and prepare for a new compile
    //
    //////////////////////////////////////////////////////////////////////////////

    gulp.task('clean', ['clean:build', 'clean:dist'], function (callback) {
        console.log('All cleaning completed!');
    });

    // Delete everything in the build directory.
    gulp.task('clean:build', function (callback) {
       return gulp.src(['build/js', 'build/css', 'build/partials', 'build/font-awesome'], { read: false })
            .pipe(plugins.rimraf({ force: true }));
    });

    // Delete everything in the build directory.
    gulp.task('clean:dbuild', function (callback) {
        del(['build/js', 'build/css', 'build/partials', 'build/font-awesome'], function (err, deletedFiles) {
            console.log('Build files deleted:', deletedFiles.join(', '));
        });
    });

    gulp.task('clean:dist', function () {
        return gulp.src(['dist/*'], { read: false })
            .pipe(plugins.rimraf({ force: true }));
    });

    // Delete everything in the dist directory.
    gulp.task('clean:ddist', function (callback) {
        del(['dist/*'], function (err, deletedFiles) {
            console.log('Dist files deleted:', deletedFiles.join(', '));
        });
    });

    //////////////////////////////////////////////////////////////////////////////
    //
    // TODOS - Read file todo remarks and create an associated Todo.md file
    //
    //////////////////////////////////////////////////////////////////////////////

    // get filenames relative to project root (where your Gulpfile is) 
    gulp.task('todos', function (callback) {
        runSequence(
            "todo:dev:less",
            "todo:dev:js",
            callback
        );
    });
    
    gulp.task('todo:dev:js', function () {
        gulp.src(paths.dev_js)
            .pipe(plugins.todo({absolute: true}))
            .pipe(gulp.dest('./'))
            .on("error", plugins.notify.onError({message: 'Error creating TODO_js.md : <%= error.message %>'}))
            // -> Will output a TODO_js.md with your todos 
            .pipe(plugins.todo.reporter('json', {fileName: 'TODO_js.md'}))
            .pipe(gulp.dest('./'))
            .on("error", plugins.notify.onError({message: 'Error creating TODO_js.md : <%= error.message %>'}));
            //.pipe(plugins.notify({ message: "Creating TODO_js.md in root directory"}));
    });
        
    gulp.task('todo:dev:less', function () {
        gulp.src(paths.dev_less)
            .pipe(plugins.todo({absolute: true}))
            .pipe(gulp.dest('./'))
            // -> Will output a TODO_less.md with your todos 
            .pipe(plugins.todo.reporter('json', {fileName: 'TODO_less.md'}))
            .pipe(gulp.dest('./'));
            //.pipe(plugins.notify({ message: "Creating TODO_less.md in root directory"}));
    });



    //////////////////////////////////////////////////////////////////////////////
    //
    // LESS files
    //
    //////////////////////////////////////////////////////////////////////////////

    // RUN: gulp dev:less
    //
    // Compile each custom less file into their respective css file
    gulp.task("dev:less", function () {
        return gulp.src(paths.dev_less)
            .pipe(plugins.changed('./'))
            .pipe(plugins.notify({ message: "Converting less file <%= file.relative %> to css"}))
            .pipe(plugins.less())
            .on('error', console.error.bind(console))
            .pipe(plugins.lessSourcemap())
            .pipe(gulp.dest("src/css"));
    });


    //////////////////////////////////////////////////////////////////////////////
    //
    // CSS files
    //
    //////////////////////////////////////////////////////////////////////////////

    // RUN: gulp dev:css:lint
    //
    // Run each custom css file through the lint syntax checker
    gulp.task('dev:css:lint', ["dev:less"], function () {
        return gulp.src(paths.dev_css)
            .pipe(plugins.changed('./'))
            .pipe(plugins.notify({ message: "Linting css file <%= file.relative %>"}))
            .pipe(csslint())
            .pipe(plugins.csslint.reporter(customReporter));
    });

    // RUN: gulp create_allcss
    //
    // Identify the custom css files that have changed. C
    gulp.task("dev:css", ["dev:css:lint"], function () {
        return gulp.src(paths.dev_css)
            .pipe(plugins.changed('./'));
            //.pipe(plugins.notify({ message: "<%= file.relative %> changed!"}));
    });

    // RUN: gulp create_all_css
    //
    // Concatenate all custom css files into a single allcss.css file,
    // minify it, and store it in the src and build css directories.
    gulp.task("create_all_css", ["dev:css"], function () {
        return gulp.src(paths.dev_css)
            .pipe(plugins.notify({ message: "Concatenating <%= file.relative %> into allcss.css!"}))
            .pipe(plugins.concat("allcss.css"))
            .pipe(gulp.dest("src/css/"))
        
            // Create a minified version of the all inclusive CSS file
            .pipe(plugins.notify({ message: "Minifying <%= file.relative %>!"}))
            .pipe(plugins.rename("allcss.min.css"))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.minifyCss())
            .pipe(plugins.sourcemaps.write())

            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the src directory"}))
            .pipe(gulp.dest("src/css/"))
            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the build directory"}))
            .pipe(gulp.dest("build/css/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the build directory : <%= error.message %>'}))
            .pipe(browserSync.stream());
    });

    // RUN: gulp dev:css:dist
    //
    // Copy the alljs.min.css file to the dist css directory
    gulp.task("dev:css:dist",  ['create_all_css'], function () {
        return gulp.src(["build/css/allcss.min.css"])
            .pipe(plugins.notify({ message: "Copying allcss.min.css file to dist>"}))
            .pipe(gulp.dest("dist/css/"))
            .pipe(browserSync.stream());
    });

    // RUN: gulp font-awesome
    //
    // Copy all font-awesome files in the src directory into the build directory.
    gulp.task("font-awesome", function () {
        return gulp.src(paths.font_awesome)
            .pipe(plugins.changed("./"))
            .pipe(gulp.dest("build/font-awesome/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the build directory : <%= error.message %>'}));
    });

    // RUN: gulp font-awesome:dist
    //
    // Copy all font-awesome files in the src directory into the dist directory.
    gulp.task("font-awesome:dist", ["font-awesome"], function () {
        return gulp.src(paths.font_awesome)
            .pipe(plugins.changed("./"))
            .pipe(gulp.dest("dist/font-awesome/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the dist directory : <%= error.message %>'}));
    });


    // RUN: gulp vendor:css
    //
    // Identify the vendor css files that have changed.
    gulp.task("vendor:css", function () {
        return gulp.src(paths.vendor_css)
            .pipe(plugins.changed("./"));
            //.pipe(plugins.notify({ message: "<%= file.relative %> changed!"}));
    });

    // RUN: gulp create_vendor_css
    //
    // Concatenate all vendor css files into a single vendor.css file,
    // minify it, and store it in the src and build css directories.
    gulp.task('create_vendor_css', ["vendor:css"], function () {
        return gulp.src(paths.vendor_css)
            .pipe(plugins.notify({ message: "Concatenating <%= file.relative %> into vendor.css!"}))
            .pipe(plugins.concat("vendor.css"))
            .pipe(gulp.dest("src/css/"))

            .pipe(plugins.notify({ message: "Minifying <%= file.relative %>!"}))
            .pipe(plugins.rename("vendor.min.css"))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.minifyCss())
            .pipe(plugins.sourcemaps.write())

            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the src directory"}))
            .pipe(gulp.dest("src/css/"))
            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the build directory>"}))
            .pipe(gulp.dest("build/css/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the build directory : <%= error.message %>'}))
            .pipe(browserSync.stream());
    });

    // RUN: gulp vendor:css:dist
    //
    // Copy the vendor.min.css file to the dist css directory
    gulp.task("vendor:css:dist", ["create_vendor_css"], function () {
        return gulp.src(["build/css/vendor.min.css"])
            .pipe(plugins.notify({ message: "Copying vendor.min.css file to dist"}))
            .pipe(gulp.dest("dist/css"))
            .pipe(browserSync.stream());
    });


    // RUN: gulp vendor:map
    //
    gulp.task("vendor:map", ["vendor:css"], function () {
        return gulp.src(paths.vendor_map)
            .pipe(plugins.notify({ message: "Copying vendor map file <%= file.relative %> to src and build css dirs!"}))
            .pipe(gulp.dest("build/css/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the build directory : <%= error.message %>'}))
            .pipe(gulp.dest("dist/css/"))
            .pipe(browserSync.stream());
    });


    //////////////////////////////////////////////////////////////////////////////
    //
    // HTML files
    //
    //////////////////////////////////////////////////////////////////////////////

    // RUN: gulp dev:html:lint
    //
    // Run each custom html file through the lint syntax checker
    gulp.task('dev:html:lint', function () {
        return gulp.src(paths.dev_html)
            //.pipe(plugins.notify({ message: "Linting HTML file <%= file.relative %>"}))
            // if flag is not defined default value is 'auto'
            .pipe(plugins.jshint.extract('auto|always|never'))
            .pipe(plugins.jshint.extract('auto'))
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('jshint-stylish', { verbose: true }))
            .pipe(plugins.jshint.reporter("fail"));
    });

    // RUN: gulp dev:html
    //
    // Copy each custom html file to the build directory structure
    gulp.task("dev:html", ['dev:html:lint'], function () {
        return gulp.src(paths.dev_html)
            // Only get the files that changed since the last time it was run 
            .pipe(plugins.changed("./"))
            //.pipe(plugins.notify({ message: "Copying HTML file <%= file.relative %> to build"}))
            .pipe(gulp.dest("build/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the build directory : <%= error.message %>'}))
            .pipe(browserSync.stream());

    });

    // RUN: gulp dev:html:dist
    //
    // Copy each custom html file to the dist directory structure
    gulp.task("dev:html:dist", ["dev:html"], function () {
        return gulp.src(paths.dev_html)
            // Only get the files that changed since the last time it was run 
            .pipe(plugins.changed("./"))
            .pipe(plugins.notify({ message: "Copying HTML file <%= file.relative %> to dist"}))
            .pipe(gulp.dest("dist/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the dist directory : <%= error.message %>'}))
            .pipe(browserSync.stream());
    });

    

    //////////////////////////////////////////////////////////////////////////////
    //
    // JS files
    //
    //////////////////////////////////////////////////////////////////////////////

    // RUN: gulp dev:js:lint
    //
    // Run each custom js file through the lint syntax checker
    gulp.task('dev:js:lint', function () {
        return gulp.src(paths.dev_js)
            .pipe(plugins.changed("./"))
            .pipe(plugins.ngAnnotate())
            //.pipe(plugins.notify({ message: "Linting js file <%= file.relative %>"}))
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('jshint-stylish', { verbose: true }))
            .pipe(plugins.jshint.reporter("fail"));
    });

    // RUN: gulp dev:js
    //
    // Identify the custom js files that have changed.
    gulp.task("dev:js", ['dev:js:lint'], function () {
        return gulp.src(paths.dev_js)
            .pipe(plugins.changed("./"));
            //.pipe(plugins.notify({ message: "<%= file.relative %> changed!"}));
    });

    // RUN: gulp create_all_js
    //
    // Concatenate all custom js files into a single alljs.js file,
    // uglify it, and store it in the src and build js directories.
    gulp.task("create_all_js", ['dev:js'], function () {
        return gulp.src(paths.dev_js)
            .pipe(plugins.notify({ message: "Concatenating <%= file.relative %> into alljs.js!"}))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat("alljs.js"))
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest("src/js/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the src directory : <%= error.message %>'}))
            // Create a minified version of the all inclusive JS file
            .pipe(plugins.rename("alljs.min.js"))
            .pipe(plugins.notify({ message: "Uglifying alljs.js into alljs.min.js!"}))
            .pipe(plugins.uglify({
                preserveComments: "all"
            }).on("error", function (e) {
                plugins.notify().write("uglify: " + e.message);
                return this.end();
            }))
            // Remove Debug Code
            .pipe(plugins.notify({ message: "Removing debug code from <%= file.relative %>"}))
            .pipe(plugins.stripDebug())
            .on("error", plugins.notify.onError({message: 'Error removing debug code : <%= error.message %>'}))
            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the src directory"}))
            .pipe(gulp.dest("src/js/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the src directory : <%= error.message %>'}))
            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the build directory"}))
            .pipe(gulp.dest("build/js/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the build directory : <%= error.message %>'}))
            .pipe(plugins.notify({ message: "dev:js completed."}));
    });

    // RUN: gulp dev:js:dist
    //
    // Remove any debug code from alljs.min.js file and copy it to the dist js directory
    gulp.task("dev:js:dist", ['create_all_js'], function () {
        return gulp.src(["build/js/alljs.min.js"])
            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the dist directory"}))
            .pipe(gulp.dest("dist/js/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the dist directory : <%= error.message %>'}))
            .pipe(browserSync.stream())
            .on("error", plugins.notify.onError({message: 'Error restarting the browser stream : <%= error.message %>'}));
    });

    // RUN: gulp prod-js // Sample of using a production environment for deployment
    //
    gulp.task('prod-js', function() {
        gulp.src('path.dev_js')
            .pipe(plugins.concat('prod.js'))
            .pipe(plugins.gulpif(argv.production, uglify()))
            .pipe(plugins.gulpif(argv.production, rename({suffix: '.min'})))
            .pipe(gulp.dest('dist/js/'))
            .on("error", plugins.notify.onError({message: 'Error copying to the dist directory : <%= error.message %>'}));
    });

    // RUN: gulp vendor:js
    //
    // Identify the vendor js files that have changed.
    gulp.task("vendor:js", function () {
        return gulp.src(paths.vendor_js)
            .pipe(plugins.changed("./"));
            //.pipe(plugins.notify({ message: "<%= file.relative %> changed!"}));
    });
    
    // RUN: gulp create_vendor_js
    //
    // Concatenate all vendor js files into a single vendor.js file,
    // uglify it, and store it in the src and build js directories.
    gulp.task('create_vendor_js', ["vendor:js"], function () {
        return gulp.src(paths.vendor_js)
            .pipe(plugins.notify({ message: "Concatenating <%= file.relative %> into vendor.js!"}))
            .pipe(plugins.concat("vendor.js"))
            .pipe(gulp.dest("src/js/"))
            // Create a minified version of the all inclusive JS file
            .pipe(plugins.rename("vendor.min.js"))
            .pipe(plugins.notify({ message: "Uglifying vendor.js into vendor.min.js!"}))
            .pipe(plugins.uglify({
                preserveComments: 'some'
            }).on('error', function (e) {
                plugins.notify().write('uglify: ' + e.message);
                return this.end();
            }))
            // Remove Debug Code
            .pipe(plugins.notify({ message: "Removing debug code from <%= file.relative %>"}))
            .pipe(plugins.stripDebug())
            .on("error", plugins.notify.onError({message: 'Error in removing debug code : <%= error.message %>'}))
        
            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the src directory"}))
            .pipe(gulp.dest("src/js/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the src directory : <%= error.message %>'}))
            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the build directory"}))
            .pipe(gulp.dest("build/js/"))
            .on("error", plugins.notify.onError({message: 'Error copying to the build directory : <%= error.message %>'}))
            .pipe(browserSync.stream())
            .on("error", plugins.notify.onError({message: 'Error restarting the browser stream : <%= error.message %>'}));
    });

    // RUN: gulp vendor:js:dist
    //
    // Remove any debug code from vendor.min.js file and copy it to the dist js directory
    gulp.task("vendor:js:dist", ['create_vendor_js'], function () {
        return gulp.src(["build/js/vendor.min.js"])
            .pipe(plugins.notify({ message: "Copying <%= file.relative %> to the dist directory"}))
            .pipe(gulp.dest("dist/js/"))
        	.on("error", errorAlert)
            .pipe(browserSync.stream())
        	.on("error", errorAlert);
    });


    //////////////////////////////////////////////////////////////////////////////
    //
    // MISCELLANEOUS - Other files
    //
    //////////////////////////////////////////////////////////////////////////////

    // RUN: gulp json
    //
    // Check to see if new modules were loaded in packages.json or bower.json
    gulp.task("json", function () {
        return gulp.src(paths.json)
            .pipe(plugins.changed("./"))
            .pipe(plugins.notify({ message: "JSON file <%= file.relative %> changed"}))
            // Only get the files that changed since the last time it was run 
            .pipe(plugins.ngAnnotate())
            .pipe(browserSync.stream());
    });


    //////////////////////////////////////////////////////////////////////////////
    //
    // Optimize the images
    //
    //////////////////////////////////////////////////////////////////////////////

    // RUN: gulp jpgs
    //
    // Optimize the jpg images
    gulp.task("jpgs", function () {
        return gulp.src(paths.jpg)
            // Only get the files that changed since the last time it was run 
            .pipe(plugins.changed('./'))
            //.pipe(plugins.notify({ message: "Optimizing <%= file.relative %>"}))
            .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
            .on("error", plugins.notify.onError({message: 'Error optimizing image : <%= error.message %>'}))
            .pipe(gulp.dest("build/images/"));
    });

    // RUN: gulp gifs
    //
    // Optimize the gif images
    gulp.task("gifs", function () {
        return gulp.src(paths.gif)
            // Only get the files that changed since the last time it was run 
            .pipe(plugins.changed('./'))
            .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
            .on("error", plugins.notify.onError({message: 'Error optimizing image : <%= error.message %>'}))
            .pipe(gulp.dest("build/images/"));
    });

    // RUN: gulp pngs
    //
    // Optimize the png images
    gulp.task("pngs", function () {
        return gulp.src(paths.png)
            // Only get the files that changed since the last time it was run 
            .pipe(plugins.changed('./'))
            .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
            .on("error", plugins.notify.onError({message: 'Error optimizing image : <%= error.message %>'}))
            .pipe(gulp.dest("build/images/"));
    });

    // RUN: gulp videos
    //
    // Optimize the videos
    gulp.task("videos", function () {
        return gulp.src(paths.vid)
            .pipe(plugins.changed('./'))
            .pipe(gulp.dest("build/images/"));
    });
    
    // RUN: gulp images
    //
    // Copy all static images to the build directory
    gulp.task("images", ['pngs', 'videos', 'gifs', 'jpgs'], function () {
        return gulp.src(paths.images)
            .pipe(plugins.changed("./"))
            .pipe(plugins.cache(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
            .on("error", plugins.notify.onError({message: 'Error optimizing image : <%= error.message %>'}))
            .pipe(gulp.dest("build/images/"));
    });

    // RUN: gulp images:dist
    //
    // Copy all static images to the build directory
    gulp.task("images:dist", ['images'], function () {
        return gulp.src([
            'build/images/**/*',
            'build/favicon.ico',
            'build/apple-touch-icon.png'
        ])
            //.pipe(plugins.notify({ message: "Copying image <%= file.relative %> to dist directory"}))
            .pipe(gulp.dest("dist/images/"))
            .pipe(browserSync.stream());
    });

    // RUN: gulp dev
    //
    // Build all custom development components
    gulp.task("dev", ['dev:html', 'create_all_css', 'create_all_js'], function () {
        return gulp.src(['./'])
            .pipe(plugins.notify({ message: "Custom development components built."}));
    });

    // RUN: gulp vendor
    //
    // Build all custom development components
    gulp.task("vendor", ['font-awesome', 'create_vendor_css', 'create_vendor_js'], function () {
        return gulp.src(['./'])
            .pipe(plugins.notify({ message: "Vendor components built."}));
    });


    //////////////////////////////////////////////////////////////////////////////
    //
    // Run command sequences
    //
    //////////////////////////////////////////////////////////////////////////////

    // RUN: gulp build
    //
    gulp.task("build", [
    ], function (callback) {
        runSequence(
            "clean:build",
            //"images",
            "json",
            "dev",
            "vendor",
            "todos",
            callback
        );
    });

    // RUN: gulp dist
    //
    gulp.task("dist", ["build"], function (callback) {
        console.log('Starting the Dist build!');
        runSequence(
            "clean:dist",
            "font-awesome:dist",
            "vendor:css:dist",
            "vendor:js:dist",
            "dev:css:dist",
            "dev:html:dist",
            "dev:js:dist",
            callback
        );
    });

    // RUN: gulp watch:css
    //
    // Rerun the task when a file changes
    gulp.task("watch:css", function () {
        gulp.watch(paths.dev_less,                  ["dev:less"])
            .on('change', browserSync.reload);
        gulp.watch(paths.dev_css,                   ["create_all_css"])
            .on('change', browserSync.reload);
        gulp.watch(paths.dev_html,                  ["dev:html"])
            .on('change', browserSync.reload);
        gulp.watch(paths.vendor_css,                ["create_vendor_css"])
            .on('change', browserSync.reload);
    });

    // RUN: gulp watch:nonjs
    //
    // Rerun the task when a file changes
    gulp.task("watch:other", function () {
        gulp.watch(paths.json,                      ["json"])
            .on('change', browserSync.reload);
        gulp.watch(paths.jpg,                       ["jpg"])
            .on('change', browserSync.reload);
        gulp.watch(paths.gif,                       ["gif"])
            .on('change', browserSync.reload);
        gulp.watch(paths.vid,                       ["videos"])
            .on('change', browserSync.reload);
        gulp.watch(paths.images,                    ["images"])
            .on('change', browserSync.reload);
        gulp.watch(paths.pkg,                       ["pkg"])
            .on('change', browserSync.reload);
        gulp.watch(paths.gulp,                      ["gulp"])
            .on('change', browserSync.reload);
    });

    // RUN: gulp watch:js
    //
    // Rerun the task when a file changes
    gulp.task("watch:js", function () {
        gulp.watch(paths.dev_js, ["create_all_js"], function (event) {
                console.log('\n gulp watch:dev_js : Event type: ' 
                    + event.type); // added, changed, or deleted
                console.log('Event path: ' 
                    + event.path); // The path of the modified file
        })
            .on('change', browserSync.reload);
        gulp.watch(paths.vendor_js, ["create_vendor_js"], function (event) {
                console.log('\n gulp watch:vendor_js : Event type: ' 
                    + event.type); // added, changed, or deleted
                console.log('Event path: ' 
                    + event.path); // The path of the modified file
        })
            .on('change', browserSync.reload);
    });
    
    // RUN: gulp watch
    //
    // Rerun the task when a file changes
    gulp.task("watch", [
        "watch:css",
        "watch:other",
        "watch:js"
    ]);

    // RUN: gulp server
    //
    // watch files for changes and reload
    gulp.task('server', function() {
        browserSync.init({
            server: {
                baseDir: "./"
            }
        });

        gulp.watch([
            paths.gulp,
            paths.pkg,
            paths.dev_html,
            paths.dev_less,
            paths.dev_css,
            paths.dev_js,
            paths.json,
            paths.images,
            paths.jpg,
            paths.gif,
            paths.png,
            paths.vid,
            paths.vendor_css,
            paths.vendor_js
        ], 
           {cwd: './'}, 
            function (callback) {
                runSequence(
                    "build",
                    callback
                );
                browserSync.reload;
            }
        );                       
    });
    
    // RUN: gulp help
    //
    gulp.task('help', plugins.taskListing);
    
    gulp.task("old_default", function (callback) {
        runSequence(
            "watch",
            "build",
            callback
        );
    });    
    
    // RUN: gulp
    //
    // The default task 
    gulp.task("default", ['server'], function () {
        gulp.watch([
            paths.gulp,
            paths.pkg,
            paths.dev_less,
            paths.dev_css,
            paths.dev_js,
            paths.dev_html,
            paths.json,
            paths.jpg,
            paths.gif,
            paths.vid,
            paths.png,
            paths.images,
            paths.vendor_css,
            paths.vendor_js
        ], function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });

/*        
        
        
        gulp.watch(paths.gulp, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.pkg, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.dev_less, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.dev_css, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.dev_js, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.dev_html, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.json, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.jpg, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.gif, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.vid, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.png, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.images, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.vendor_css, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
        gulp.watch(paths.vendor_js, function (file) {
            if (file.type === "changed") {
                browserSync.reload(file.path);
            }
        });
*/        
    });

}());

