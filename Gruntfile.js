 module.exports = function(grunt) {

         // Project configuration.
         grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

	         // WATCH
	         watch: {
	         	// compass
	            css: {
					files: ['**/*.{scss,sass}'],
	                tasks: ['compass']
	               },

	            // jade
	            jade: {
	               	files:['*.jade'],
	               	tasks: ['jade']
	               },

	            // jshint
	            js: {
	                files: [
	                	'js/*.js',
	                	'Gruntfile.js'
	                ],
	                tasks: ['jshint']
	               }
	             },

	         // COMPASS
	         compass: {
	            dist: {
	             	options: {
	             		// config: 'config.rb',
	             		//require: 'susy',
	             		httpPath: '/',
	                imagesDir: 'images',
	                javascriptsDir: 'js',
	                fontsDir: 'fonts',
	                relativeAssets: false,
		     	        sassDir: 'sass',
		     	        cssDir: 'css',
		     	        outputStyle: 'compressed'
	             	}
	             }
	           },

 	         // STYLE INJECTS
 	         browserSync: {
 	         	files: {
 	            	src : [
 	            		'css/*.css',
 		            	'img/*',
 	               		'js/*.js',
 	               		'*.html'
 	             	],
 	           },
            		options: {
              		watchTask: true
            		}
 	         },

	         // JSHINT
	         jshint: {
	               options: {
	                 jshintrc: '.jshintrc'
	               },
	               all: ['Gruntfile.js', 'js/*.js']
	             },

	         // JADE
	         jade: {
	         	compile: {
	         		options: {
	         			data: {
	         				debug: false
	         			}
	         		},
		         	files : {
		         		'index.html' : ['index.jade']
		         	}
	          	}	
	         }
         });

         // Load Grunt plugins
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.loadNpmTasks('grunt-contrib-compass');
         grunt.loadNpmTasks('grunt-contrib-jade');
         grunt.loadNpmTasks('grunt-contrib-jshint');
         grunt.loadNpmTasks('grunt-browser-sync');
         
         // Default task(s).
         grunt.registerTask('default', ['browserSync', 'watch']);

 };