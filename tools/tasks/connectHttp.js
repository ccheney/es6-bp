/* eslint-env node */
'use strict';

module.exports = function(grunt) {
    var shouldOpen = grunt.option('open');
    var path = require('path');
    var mockApi = require('swagger-mock-api');

    grunt.config.merge({
        // Launches http-server
        connect: {
            connectHttp: {
                options: {
                    port: 31415,
                    useAvailablePort: true,
                    protocol: 'http',
                    base: '<%= env.DIR_DEST %>',
                    livereload: true,
                    open: shouldOpen ? true : false, // opens a tab in your default browser e.g. grunt launch --open
                    //middleware: function(connect, options, middlewares) {
                    //    middlewares.push(mockApi({
                    //        swaggerFile: path.join(__dirname, '../testApi.yaml'),
                    //        watch: true
                    //    }));
                    //
                    //    return middlewares;
                    //}
                }
            }
        }
    });

    grunt.registerTask('connectHttp', [
        'connect:connectHttp'
    ]);
};
