module.exports = function(grunt) {
    //Gruntの設定
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        exec: {
            start: {
                command: 'http-server . & grunt watch'
            },
			compile_scala_source: {
				cmd: 'cd scalajs-project && sbt fullOptJS'
			}
		},
        watch: {
            scala_source: {
                files: [
                    'scalajs-project/**/*',
                    '!scalajs-project/.idea/**/*', '!scalajs-project/target/**/*', '!scalajs-project/project/target/**/*' //set ignore to avoid error due to watching too many files/folders
                ],
                tasks: [
                    'exec:compile_scala_source'
                ]
            },
            compiled_scalajs: {
                files: [
                    'scalajs-project/target/scala-2.11/**/*'
                ],
                tasks: [
                    'copy:compiled_scalajs_to_electron_project'
                ]
            },
            electron_project: {
                files: [
                    'electron-project/**/*'
                ],
                tasks: [
                    'copy:electron_project_to_app_resources'
                ]
            }
        },
        copy: {
            compiled_scalajs_to_electron_project: {
                files: [
                    {
                        expand: true,
                        cwd: 'scalajs-project/target/scala-2.11/',
                        src: 'scala-js-tutorial-opt.js',
                        dest: 'electron-project/'
                    }
                ]
            },
            electron_project_to_app_resources: {
            	files: [
                    {
                        expand: true,
                        cwd: 'electron-project/',
                        src: '**',
                        dest: 'Electron.app/Contents/Resources/app/'
                    }
                ]
            }
        }
    });

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', 'exec:start');
};
