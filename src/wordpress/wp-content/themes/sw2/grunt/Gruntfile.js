/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    interval: 200,
    jshint: {
      src: ['Gruntfile.js', '../js/*.js'],
      options: {
        jquery: true
      }
    },
    less: {
      normal: {
        options: {
          yuicompress: true
        },
        files: {
          '../style.css': '../less/main.less'
        }
      },
      ie: {
        options: {
          yuicompress: true
        },
        files: {
          '../dist/ie.css': '../less/ie.less'
        }
      }
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          '../js/main.js'
        ],
        dest: '../dist/scripts.js'
      }
    },
    uglify: {
      dist: {
        files: {
          '../dist/scripts.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    watch: {
      files: ['<%= jshint.src %>', '../less/**/*.less'],
      tasks: ['default']
    }
  });

  // npm tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', ['jshint', 'less', 'concat', 'uglify']);
};
