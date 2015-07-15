define([
	'jquery',
	'underscore',
	'backbone',
	'views/project/list',
	'views/users/list'
], function ($, _, Backbone, ProjectListView, UserListView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'projects': 'showProjects',
			'users': 'showUsers',
			'*actions': 'defaultAction'
		}
	});

	var initialize = function () {
		var app_router = new AppRouter();
		app_router.on('route:showProjects', function () {
			var projectListView = new ProjectListView();
			projectListView.render();
		});

		app_router.on('route:showUsers', function () {
			var userListView = new UserListView();
			userListView.render();
		});

		app_router.on('route:defaultAction', function (actions) {
			console.log('No Route', actions);
		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});