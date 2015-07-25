define([
	'backbone',
	'models/PlantsModel'
], function (Backbone, PlantsModel) {
	var GardenCollection = Backbone.Collection.extend({
		url: function () {
			return 'data/garden/' + this.id;
		},
		initialize: function (args) {
			this.id = args.id;
		},
		model : PlantsModel
	});
	
	return GardenCollection;
});