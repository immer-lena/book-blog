module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['**/*.scss'],
            tasks: ['sass']
        },
        sass: {
            dist: {
                files: {
                    'public/styles/main.css': ['scss/style.scss']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'public/js/script.min.js': ['js/*.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/styles/main.min.css': 'public/styles/main.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);

};