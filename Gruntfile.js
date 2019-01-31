module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt);
  var path = require('path');
  var fs = require('fs');
  const webpack = require('webpack');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({

    clean: ['dist'],

    copy: {
      src_to_dist: {
        cwd: 'src',
        expand: true,
        src: ['**/*', '!**/*.js', '!**/*.scss', '!img/**/*'],
        dest: 'dist'
      },
      libs_to_dist: {
        cwd: 'node_modules',
        expand: true,
        src: ['mxgraph/javascript/dist/**/*'],
        dest: 'dist/libs'
      },
      readme: {
        expand: true,
        src: ['README.md'],
        dest: 'dist',
      },
      img_to_dist: {
        cwd: 'src',
        expand: true,
        src: ['img/**/*'],
        dest: 'dist/'
      },
    },

    watch: {
      rebuild_all: {
        files: ['src/**/*', 'README.md'],
        tasks: ['default'],
        options: {
          spawn: false
        }
      },
    },

    webpack: {
      js: {
        target: 'node',
        context: path.resolve('src'),
        entry: "./module.js",
        output: {
          path: path.resolve('dist'),
          libraryTarget: 'amd'
        },
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/css/flowchart.css': 'src/css/flowchart.scss'
        }
      }
    },

  });

  grunt.registerTask('default', ['clean', 'copy:src_to_dist', 'copy:readme', 'copy:libs_to_dist', 'copy:img_to_dist', 'webpack:js', 'sass']);
};
