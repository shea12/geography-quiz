module.exports = grunt => {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: 'inline',
        presets: ['es2015', 'react'],
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/client',
          src: ['**/*.jsx', '**/*.js'],
          dest: 'src/compiled/',
          ext :'.js'
        }]
      }
    },
    browserify: {
      main: {
        src: 'src/compiled/**/*.js',
        dest: 'src/deploy/bundle.js'
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true
        },
        files: {
          'src/deploy/index.html': 'src/client/index.html',
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'src/deploy/bundle.min.js': 'src/deploy/bundle.js'
        }
      }
    },
    watch: {
      babel: {
        tasks: ['babel']
      },
      browserify: {
        tasks: ['browserify']
      },
      htmlmin: {
        tasks: ['htmlmin']
      },
      uglify: {
        tasks: ['uglify']
      }
    },
  })
  // for deployment will add uglify to grunt tasks , 'uglify'
  grunt.registerTask('build', ['babel', 'browserify', 'htmlmin', 'uglify' ])
}