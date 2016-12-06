module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    open : {
      dev: {
        path: 'http://localhost:1919'
      }
    },

    connect: {
      server: {
        options: {
          port: 1919,
          base: 'docs/build',
          livereload: true
        }
      }
    },

    copy: {
      // css: {
      //   files: [
      //     {
      //       expand: true,
      //       flatten: true,
      //       src: [
      //         'bower_components/pygments/css/*'
      //       ],
      //       dest: 'src/sphinx_md_theme/templates/material_design/static/css/pygments/',
      //       filter: 'isFile'
      //     }
      //   ]
      // },
      fonts: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/material-design-icons/iconfont/*'
            ],
            dest: 'src/sphinx_md_theme/templates/material_design/static/fonts/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/lato-googlefont/Lato-Bold.ttf',
                  'bower_components/lato-googlefont/Lato-Regular.ttf'],
            dest: 'src/sphinx_md_theme/templates/material_design/static/fonts/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/robotoslab-googlefont/RobotoSlab-Bold.ttf',
                  'bower_components/robotoslab-googlefont/RobotoSlab-Regular.ttf'],
            dest: 'src/sphinx_md_theme/templates/material_design/static/fonts/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/roboto-fontface/fonts/Roboto/*'],
            dest: 'src/sphinx_md_theme/templates/material_design/static/fonts/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['bower_components/easyfont-roboto-mono/fonts/*'],
            dest: 'src/sphinx_md_theme/templates/material_design/static/fonts/',
            filter: 'isFile'
          }
        ]
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: [
            'bower_components/material-design-lite/src',
            'bower_components/roboto-fontface/css/roboto/sass',
            'bower_components/easyfont-roboto-mono/scss'
          ]
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'src/sphinx_md_theme/templates/material_design/static/css',
          ext: '.css'
        }]
      },
      build: {
        options: {
          style: 'compressed',
          loadPath: [
            'bower_components/material-design-lite/src',
            'bower_components/roboto-fontface/css/roboto/sass',
            'bower_components/easyfont-roboto-mono/scss'
          ]
        },
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'src/sphinx_md_theme/templates/material_design/static/css',
          ext: '.css'
        }]
      }
    },

    browserify: {
      dev: {
        options: {
          external: ['jquery']
        },
        src: ['js/*.js', 'bower_components/material-design-lite/material.js'],
        dest: 'src/sphinx_md_theme/templates/material_design/static/js/theme.js'
      },
      build: {
        options: {
          external: ['jquery']
        },
        src: ['js/*.js', 'bower_components/material-design-lite/material.js'],
        dest: 'src/sphinx_md_theme/templates/material_design/static/js/theme.js'
      }
    },

    exec: {
      bower_update: {
        cmd: 'bower update'
      },
      build_sphinx: {
        cmd: 'sphinx-build docs/source docs/build'
      }
    },
    clean: {
      build: ["docs/build"],
      fonts: ["src/sphinx_md_theme/templates/material_design/static/fonts"]
    },

    watch: {
      sass: {
        files: ['scss/*.scss', 'bower_components/**/*.sass', 'bower_components/**/*.scss'],
        tasks: ['sass:dev']
      },
      sphinx: {
        files: ['src/sphinx_md_theme/**/*', 'docs/**/*.rst', 'docs/**/*.py'],
        tasks: ['clean:build','exec:build_sphinx']
      },
      browserify: {
        files: ['js/*.js'],
        tasks: ['browserify:dev']
      },
      livereload: {
        files: ['docs/build/**/*'],
        options: { livereload: true }
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('fonts', [
    'clean:fonts',
    'copy:fonts'
  ]);
  grunt.registerTask('default', [
    'exec:bower_update',
    'clean:build',
    'sass:dev',
    'browserify:dev',
    'exec:build_sphinx',
    'connect',
    'open',
    'watch'
  ]);
  grunt.registerTask('build', [
    'exec:bower_update',
    'clean:build',
    'sass:build',
    'browserify:build',
    'exec:build_sphinx'
  ]);
}

