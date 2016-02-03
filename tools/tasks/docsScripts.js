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
                    themedir: './node_modules/yuidoc-friendly-theme'
                }
            }
        }
    });

    grunt.registerTask('docsScripts', [
        'yuidoc:docsScripts'
    ]);
};
