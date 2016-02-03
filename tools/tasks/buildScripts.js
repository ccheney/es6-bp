/* eslint-env node */
'use strict';

module.exports = function(grunt) {
    var shouldMinify = !grunt.option('dev');
    var remapify = require('remapify');
    var paths = require('../../src/assets/scripts/config.json');

    // Help Grunt find the right plugins at runtime
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Clear out any previously generated usemin task configuration
    grunt.config.set('concat', undefined);
    grunt.config.set('uglify', undefined);

    grunt.config.merge({
        browserify: {
            web: {
                options: {
                    browserifyOptions: {
                        debug: grunt.option('prod') ? true : false
                    },
                    preBundleCB: function(bundle) {
                        bundle.plugin(remapify, paths.vendorPaths);
                    },
                    transform: [['babelify', { stage: 0 }]]
                },
                files: {
                    '<%= env.DIR_DEST %>/assets/scripts/main.js': ['<%= env.DIR_SRC %>/assets/scripts/main.js']
                }
            }
        },

        // Copies static files for non-optimized builds
        copy: {
            buildScripts: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>',
                    dest: '<%= env.DIR_DEST %>',
                    src: [
                        'assets/vendor/**/*.js',
                        'assets/data/**/*.json'
                    ]
                }]
            }
        },

        uglify: {
            options: {
                mangle: true
            }
        },

        // Searches for build comment blocks (`<!-- build:js -->`) and generates
        // the appropriate `concat` and `uglify` configuration.
        useminPrepare: {
            options: {
                root: '<%= env.DIR_DEST %>',
                staging: '<%= env.DIR_SRC %>',
                dest: '<%= env.DIR_DEST %>',
                flow: {
                    buildScripts: {
                        // Force js only
                        steps: { js: ['concat', 'uglifyjs'], css: [] },
                        post: {}
                    }
                }
            },
            buildScripts: ['<%= env.DIR_SRC %>/**/*.hbs']
        }
    });

    grunt.registerTask('scrub:buildScripts', function() {
        function scrub(name) {
            var config = JSON
                .stringify(grunt.config.get(name))
                .replace(/\?v=@@version/g, '');

            grunt.config.set(name, JSON.parse(config));
        }

        scrub('concat');
        scrub('uglify');
    });

    grunt.registerTask('buildScripts',
        shouldMinify
            ? [
                'browserify',
                'copy:buildScripts',
                'useminPrepare:buildScripts',
                'scrub:buildScripts',
                'concat:generated',
                'uglify:generated'
            ]
            : [
                'browserify',
                'copy:buildScripts'
            ]
    );
};
