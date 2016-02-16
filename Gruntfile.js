/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {

    // -- Plugins --------------------------------------------------------------

    // Uncomment the next line to report the Grunt execution time (for optimization, etc)
    // require('time-grunt')(grunt);

    // Intelligently lazy-loads tasks and plugins as needed at runtime.
    require('jit-grunt')(grunt, { versioncheck: 'grunt-version-check' })({ customTasksDir: 'tools/tasks' });

    // -- Options --------------------------------------------------------------

    // All builds are considered to be development builds, unless they're not.
    grunt.option('dev', !grunt.option('stage') && !grunt.option('prod'));

    // -- Configuration --------------------------------------------------------

    grunt.initConfig({
        // Load `package.json`so we have access to the project metadata such as name and version number.
        pkg: require('./package.json'),

        // Load `build-env.js`so we have access to the project environment configuration and constants.
        env: require('./build-env'),

        // Removes generated files and directories. Useful for rebuilding with fresh copies of everything.
        clean: {
            options: {
                force: '<%= env.UNSAFE_MODE %>'
            },
            dest: ['<%= env.DIR_DEST %>'],
            docs: ['<%= env.DIR_DOCS %>'],
            tmp: ['<%= env.DIR_TMP %>'],
            installed: [
                'tools/node-*',
                '<%= env.DIR_BOWER %>',
                '<%= env.DIR_NPM %>'
            ]
        },

        // Watches files and directories changes and runs associated tasks automatically.
        // For LiveReload, download browser extension at http://go.livereload.com/extensions
        watch: {
            options: {
                livereload: {
                    // Default port for LiveReload
                    // *Will not work if multiple users run using the same port on a shared server*
                    port: 35729
                }
            },
            watchVendor: {
                files: ['<%= env.DIR_BOWER %>/**/*'],
                tasks: ['buildScripts', 'buildStyles']
            },
            watchMarkup: {
                files: ['<%= env.DIR_SRC %>/**/*.hbs', '!**/precompile/**'],
                tasks: ['buildMarkup']
            },
            watchStatic: {
                files: ['<%= env.DIR_SRC %>/assets/media/**'],
                tasks: ['buildStatic']
            },
            watchStyles: {
                files: ['<%= env.DIR_SRC %>/assets/scss/**/*'],
                tasks: ['buildStyles']
            },
            watchScripts: {
                files: ['<%= env.DIR_SRC %>/assets/scripts/**/*'],
                tasks: ['buildScripts']
            },
            watchPrecompileJst: {
                files: ['<%= env.DIR_SRC %>/templates/precompile/**/*'],
                tasks: ['precompileJst']
            }
        },

        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, // maximum number of notifications from jshint output
                title: '<%= pkg.name %>', // defaults to the name in package.json, or will use project directory's name
                success: true, // whether successful grunt executions should be notified automatically
                duration: 3 // the duration of notification in seconds, for `notify-send only
            }
        }

    });

    // -- Tasks ----------------------------------------------------------------

    grunt.registerTask('default', 'Run default tasks for the target environment.',
        // Ran `grunt`
        grunt.option('dev')   ? ['build'] :
            // Ran `grunt --stage`
            grunt.option('stage') ? ['lint', 'build'] :
                // Ran `grunt --prod`
                grunt.option('prod')  ? ['lint', 'build', 'docs'] : []
    );
    grunt.registerTask(
        'build',
        'Compile source code and outputs to destination.',
        ['clean:dest', 'buildStatic', 'buildMarkup', 'precompileJst', 'buildStyles', 'buildScripts', 'clean:tmp']
    );
    grunt.registerTask(
        'docs',
        'Generate documentation.',
        ['clean:docs', 'docsScripts', 'clean:tmp']
    );
    grunt.registerTask(
        'lint',
        'Validate code syntax.',
        ['lintScripts']
    );
    grunt.registerTask(
        'inject',
        'Inject 3rd-party library references from bower.json into source code.',
        ['injectStyles', 'injectScripts']
    );
    grunt.registerTask(
        'launch',
        'Runs build, launches http-server, watches for file changes',
        ['build', 'connectHttp', 'watch']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    // This is required if you use any options.
    grunt.task.run('notify_hooks');
};
