define([
	'backbone',
	'models/GardensModel'
], function (Backbone, GardensModel) {
	var GardenCollection = Backbone.Collection.extend({
		url: 'data/garden',
		model : GardensModel
	});
	
	return GardenCollection;
});