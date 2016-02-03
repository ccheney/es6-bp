/* eslint-env node */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        // Compiles Handlebars hbs templates into JavaScript (JST)
        handlebars: {
            precompileJst: {
                options: {
                    //amd: ['handlebars'],
                    namespace: 'JST',
                    // Registers all files that start with '_' as a partial.
                    partialRegex: /^_/,
                    // Shortens the file path for the templates.
                    processName: function(filePath) { // input:  src/templates/_header.hbs
                        return filePath.slice(filePath.indexOf('template'), filePath.lastIndexOf('.')); // output: templates/_header
                    },
                    // Shortens the file path for the partials.
                    processPartialName: function(filePath) { // input:  src/templates/_header.hbs
                        return filePath.slice(filePath.indexOf('template'), filePath.lastIndexOf('.')); // output: templates/_header
                    }
                },
                files: {
                    '<%= env.DIR_SRC %>/assets/scripts/precompiledJst.js': '<%= env.DIR_SRC %>/templates/precompile/**/*.hbs'
                }
            }
        },

        copy: {
            precompileJst: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>',
                    dest: '<%= env.DIR_DEST %>',
                    src: [
                        'assets/scripts/precompiledJst.js'
                    ]
                }]
            }
        }

    });

    grunt.registerTask('precompileJst', [
        'handlebars:precompileJst',
        'copy:precompileJst'
    ]);
};
