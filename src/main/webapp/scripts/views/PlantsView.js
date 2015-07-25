define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/Plants.html',
	'collections/PlantCollection'
], function ($, _, Backbone, tpl, PlantCollection) {
	var PlantsView = Backbone.View.extend({
		el: $('#container'),
		template: _.template(tpl),
		initialize: function () {
			this.collection = new PlantCollection();
			this.listenTo(this.collection, "reset", this.render);
		},
		render: function () {
			var compiledTemplate = this.template({'plants': this.collection.toJSON()});
			this.$el.html(compiledTemplate);
			return this;
		}
	});

	return PlantsView;
});