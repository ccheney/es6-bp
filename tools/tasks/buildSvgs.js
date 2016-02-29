/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        svgstore: {
            buildSvgs: {
                options: {
                    prefix : 'icon-inner-',
                    svg: {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                        class: 'u-isVisuallyHidden'
                    },
                    includedemo: false,
                    cleanup: ['fill', 'enable-background', 'style'],
                    cleanupdefs: true,
                    includeTitleElement: false,
                    preserveDescElement: false
                },
                files: {
                    '<%= env.DIR_SRC %>/templates/_svgs.hbs': ['<%= env.DIR_SRC %>/assets/media/images/icons/*.svg']
                }
            }
        }
    });

    grunt.registerTask('buildSvgs', [
        'svgstore:buildSvgs'
    ]);
};
