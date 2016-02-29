/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {
    grunt.config.merge({
        /**
         * Turns any JSON files into JavaScript files.
         */
        json: {
            json2JS: {
                options: {
                    namespace: 'JSON_DATA',
                    includePath: false,
                    processName: function(filename) {
                        return filename.toLowerCase();
                    }
                },
                src: ['<%= env.DIR_SRC %>/assets/data/**/*.json'],
                dest:  '<%= env.DIR_SRC %>/assets/scripts/json.js'
            }
        }
    });

    grunt.registerTask('json2JS', [
        'json:json2JS'
    ]);
};
