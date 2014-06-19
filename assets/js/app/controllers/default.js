define([
	"backbone",
	"backbone.app",
	"app/controllers/common",
	"app/layouts/default"
	], function( Backbone, APP, Common, LayoutDefault ){

	var Router = Common.extend({

		routes: {
			"": "index"
		},

		index: function(){
			_.log("in index");
			this.data.set({
			});

			this.layout = new LayoutDefault({ data: this.data });
		}

	});

	// save in the global namespace
	APP.Routers.Default = Router;

	return Router;

});