define([
	'jquery',
	'underscore',
	'backbone',
	'collections/GardenPlantsCollection',
	'text!templates/Garden.html'
], function ($, _, Backbone, GardenPlantsCollection, tpl) {
	var GardenView = Backbone.View.extend({
		el : $('#container'),
		template: _.template(tpl),
		initialize: function () {
			this.collection = new GardenPlantsCollection({ id : this.id });
			this.listenTo(this.collection, "reset", this.render);
		},
		render: function () {
			debugger;
			var plants = this.collection.toJSON();
			var name = this.collection.id;
			var compiledTemplate = this.template({
				name : name,
				plants : plants
			});
			this.$el.html(compiledTemplate);
		}
	});

	return GardenView;
});