/* eslint-env node */
'use strict';

module.exports = function(grunt) {
    var remapify = require('remapify');
    var shouldMinify = !grunt.option('dev');
    var paths = require('../../src/assets/scripts/config.json');

    // Help Grunt find the right plugins at runtime
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // Clear out any previously generated usemin task configuration
    grunt.config.set('concat', undefined);
    grunt.config.set('uglify', undefined);

    grunt.config.merge({

        /**
         * Takes our CommonJS files and compiles them together.
         */
        browserify: {
            buildScripts: {
                options: {
                    browserifyOptions: {
                        debug: shouldMinify
                    },
                    preBundleCB: function(bundle) {
                        bundle.plugin(remapify, paths.vendorPaths);
                    },
                    transform: [['babelify', { 'stage': 0 }]]
                },
                files: {
                    '<%= env.DIR_TMP %>/assets/scripts/main.js': ['<%= env.DIR_SRC %>/assets/scripts/main.js']
                }
            }
        },

        // Searches for build comment blocks (`<!-- build:js -->`) and generates
        // the appropriate `concat` and `uglify` configuration.
        useminPrepare: {
            options: {
                root: '<%= env.DIR_TMP %>',
                staging: '<%= env.DIR_TMP %>',
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
        },

        concat: {
            options: {
                separator: ';'
            }
        },

        uglify: {
            options: {
                warnings: false,
                mangle: true
            }
        },

        // Copies static files for non-optimized builds
        copy: {
            buildScriptsDev: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= env.DIR_SRC %>',
                        dest: '<%= env.DIR_DEST %>',
                        src: ['assets/vendor/**/*.{map,js}']
                    },
                    {
                        expand: true,
                        cwd: '<%= env.DIR_TMP %>',
                        dest: '<%= env.DIR_DEST %>',
                        src: ['assets/scripts/main.js']
                    }
                ]
            },
            buildScriptsProd: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= env.DIR_SRC %>',
                        dest: '<%= env.DIR_TMP %>',
                        src: ['assets/vendor/**/*.{map,js}']
                    }
                ]
            }
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
            'browserify:buildScripts',
            'copy:buildScriptsProd',
            'useminPrepare:buildScripts',
            'scrub:buildScripts',
            'concat:generated',
            'uglify:generated'
        ]
            : [
            'browserify:buildScripts',
            'copy:buildScriptsDev'
        ]
    );

};
