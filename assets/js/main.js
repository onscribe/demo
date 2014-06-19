var app;

require.config( config.js );

function init(){
	// require might execute init before the document is ready...
	//$(document).ready(function(){
	require(["backbone.app"], function(APP){

		APP(config.app, function( Controller ){
			app = new Controller();
			// update Backbone options
			Backbone.history.start({ pushState: config.app.pushState });
		});

	});
	//});
}