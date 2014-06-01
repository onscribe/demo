var env = {
	// enviromental variables
	localhost: ["localhost", "192.168.0" ],
	production: [""],
	staging: [""],
	server: {

	}
};

var config = {
	version: "4.04.001",
	//
	isDev: ( env.localhost.indexOf( window.location.hostname ) > -1 ),
	isProd: ( env.production.indexOf( window.location.hostname ) > -1 ),
	isStaging: ( env.staging.indexOf( window.location.hostname ) > -1 ),
	// enviromental variables
	api: function(){ return (config.isDev )? "/test/data" : "" },
	// third-party credentials
	creds: {
		facebook: "",
		twitter: ""
	},
	// require config
	js: {
		baseUrl: "/assets/js/",
		paths: {
			common: [
				"/assets/js/libs/common-min"
			],
			json3: [
				"//cdnjs.cloudflare.com/ajax/libs/json3/3.3.0/json3.min"
			],
			jquery: [
				"//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min"
			],
			underscore: [
				"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min"
			],
			handlebars: [
				"//cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.2/handlebars.min"
			],
			backbone: [
				"//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min"
			],
			"backbone.ui.sidenav": [
				"/assets/js/libs/backbone.ui.sidenav"
			],
			"backbone.session": [
				"/assets/js/libs/backbone.session"
			],
			"backbone.ui.modal": [
				"/assets/js/libs/backbone.ui.modal"
			],
			ga: "//www.google-analytics.com/analytics"
		},
		shim: {
			common: {
				deps: [],
				exports: "c"
			},
			jquery: {
				deps: [
					"json3"
				]
			},
			underscore: {
				exports: "_"
			},
			handlebars: {
				exports: "Handlebars"
			},
			backbone: {
				deps: [
					"underscore",
					"jquery"
				],
				exports: "Backbone"
			},
			"backbone.session": {
				deps: [
					"backbone"
				]
			},
			"backbone.ui.sidenav": {
				deps: [
					"backbone"
				]
			},
			"backbone.ui.modal": {
				deps: [
					"backbone",
					"underscore",
					"jquery"
				]
			},
			"libs/backbone.extender": {
				deps: [
					"backbone"
				]
			}
		},
		deps: [
			"common",
			"json3",
			"jquery",
			"underscore",
			"handlebars",
			"backbone",
			"libs/backbone.extender",
			"libs/backbone.analytics"
		],
		callback: function(){
			window.init();
		}
	}
}

// APIs
//STRIPE
//Stripe.setPublishableKey('pk_test_gbAflR6f02Yy7C3q8XOdiijn');

// flags
if(typeof DEBUG == "undefined") DEBUG = config.isDev; // condition is localhost...

