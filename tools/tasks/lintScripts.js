/* eslint-env node */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        // Verifies that script files conform to set standards.
        eslint: {
            lintScripts: {
                options: {
                    configFile: '.eslintrc'
                },
                src: ['<%= env.DIR_SRC %>/assets/scripts/**/*.js']
            }
        }
    });

    grunt.registerTask('lintScripts', [
        'force:on',
        'eslint:lintScripts',
        'force:reset'
    ]);
};
