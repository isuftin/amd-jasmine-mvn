define([
	'backbone'
], function (Backbone) {

	/*
	 * A Plants model should be an array of strings representing available plant names
	 */

	var PlantsModel = Backbone.Model.extend({
		idAttribute: 'name',
		url: "data/plant"
	});

	return PlantsModel;
});