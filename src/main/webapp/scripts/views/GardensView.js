define([
	'jquery',
	'backbone',
	'underscore', 
	'text!templates/Gardens.html',
	'collections/GardenCollection'
], function ($, Backbone, _, tpl, GardenCollection) {
	var GardensView = Backbone.View.extend({
		el: $('#container'),
		template: _.template(tpl),
		initialize : function () {
			this.collection = new GardenCollection();
			this.listenTo(this.collection, "reset", this.render);
		},
		render: function () {
			var compiledTemplate = this.template({'gardens': this.collection.toJSON()});
			this.$el.html(compiledTemplate);
			return this;
		}
	});
	
	return GardensView;
});