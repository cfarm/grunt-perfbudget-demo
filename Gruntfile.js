module.exports = function(grunt){
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    perfbudget: {
      default: {
        options: {
          url: 'http://cfarman.com',
          key: 'APIKEY'
        }
      }
    }
  });

  grunt.registerTask('default', ['perfbudget']);
};