define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/project/list.html',
	'collections/projects'
], function ($, _, Backbone, projectListTemplate, ProjectsCollection) {
	var ProjectListView = Backbone.View.extend({
		el: $('#container'),
		initialize: function () {
			this.collection = new ProjectsCollection();
			this.collection.add({
				name: "Ginger King"
			});
			var compiledTemplate = _.template(projectListTemplate, this.collection.models);
			this.$el.html(compiledTemplate);
		}
	});

	return ProjectListView;
});