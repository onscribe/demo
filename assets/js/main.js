var app;

require.config( config.js );

function init(){
	// require might execute init before the document is ready...
	//$(document).ready(function(){
	require(["app/controllers/default"], function(Router){

		app = new Router();
		Backbone.history.start({ pushState: true });

	});
	//});
}