define([
	'router',
	'backbone'
], function (Router, Backbone) {
	var initialize = function () {
		new Router();
		Backbone.history.start({root: '/amd-jasmine-mvn/ui/'});
	};

	return {
		initialize: initialize
	};
});