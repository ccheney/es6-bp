/* eslint-env node */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        copy: {
            buildStatic: {
                files: [{
                    expand: true,
                    cwd: '<%= env.DIR_SRC %>',
                    src: [
                        'assets/media/**',
                        'assets/media/**/**',
                        '!assets/vendor/**'
                    ],
                    dest: '<%= env.DIR_DEST %>'
                }]
            }
        }
    });

    grunt.registerTask('buildStatic', [
        'copy:buildStatic'
    ]);
};
