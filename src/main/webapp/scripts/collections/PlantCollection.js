define([
	'backbone',
	'models/PlantsModel'
], function (Backbone, PlantsModel) {
	var GardenCollection = Backbone.Collection.extend({
		url: 'data/plant',
		model : PlantsModel
	});
	
	return GardenCollection;
});