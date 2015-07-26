define([
	'router',
	'backbone',
	'module'
], function (Router, Backbone, module) {
	var router = new Router();
	Backbone.history.start({root: module.config().contextPath});
	return router;
});