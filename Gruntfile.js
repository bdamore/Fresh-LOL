module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    //watch:
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true,
          open: true,
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Default task(s).
  grunt.registerTask('default', ['connect']);

};
