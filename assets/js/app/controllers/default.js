define([
	"backbone",
	"app/controllers/common",
	"app/layouts/default"
	], function( Backbone, Common, LayoutDefault ){

	return Common.extend({

		routes: {
			"": "index"
		},

		index: function(){
			_.log("in index");
			this.data.set({
			});

			this.layout = new LayoutDefault({ data: this.data });
		},

		
	});

});