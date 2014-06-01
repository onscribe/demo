
define(["backbone", "underscore"], function( Backbone, _ ){

	return Backbone.Collection.extend({

		options: {
			autofetch: false
		},

		initialize: function(models, options){
			options = options || {};
			this.options = _.extend({}, this.options, options);
			// save id
			if( options.id ) this.id = options.id;
			//
			if(this.options.autofetch){
				this.fetch();
			}
		}


	});

});
