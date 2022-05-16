module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['**/*.scss'],
            tasks: ['sass', 'uglify', 'cssmin']
        },
        sass: {
            dist: {
                files: {
                    'public/main.css': ['scss/style.scss']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/script.min.js': ['js/script.js']
                }
            }
        },
        htmlhint: {
            html1: {
                options: {
                    'tag-pair': true
                },
                src: ['index.html']
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'public/index.html': 'index.html'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/main.min.css': 'public/main.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'htmlhint', 'htmlmin']);
};