/* eslint-env node */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        // Generates JavaScript documentation based on inline comments.
        yuidoc: {
            docsScripts: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: '<%= env.DIR_SRC %>/assets/scripts',
                    outdir: '<%= env.DIR_DOCS %>',
                    themedir: 'tools/cache/yuidoc-friendly-theme',
                    extension: '.js',
                    exclude: '<%= env.DIR_SRC %>/assets/vendor'
                }
            }
        }
    });

    grunt.registerTask('docsScripts', [
        'yuidoc:docsScripts'
    ]);
};
