define(["backbone", "backbone.app"], function( Backbone, APP ){

	var View = Backbone.View.extend({

		options: {

		}
	});

	// save in the global namespace
	APP.Views.Default = View;

	return View;

});
