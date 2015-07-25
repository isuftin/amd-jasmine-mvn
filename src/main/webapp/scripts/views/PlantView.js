define([
	'jquery',
	'underscore',
	'backbone',
	'models/PlantModel',
	'text!templates/Plant.html'
], function ($, _, Backbone, PlantModel, tpl) {
	var PlantView = Backbone.View.extend({
		el: $('#container'),
		template: _.template(tpl),
		initialize: function () {
			this.model = new PlantModel({id: this.id});
			this.listenTo(this.model, "change", this.render);
		},
		render: function () {
			var compiledTemplate = this.template(this.model.attributes);
			this.$el.html(compiledTemplate);
			return this;
		}
	});

	return PlantView;
});