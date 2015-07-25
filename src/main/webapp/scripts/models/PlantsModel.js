define([
	'backbone'
], function (Backbone) {

	/*
	 * A Plants model should be an array of strings representing available plant names
	 */

	var PlantsModel = Backbone.Model.extend({
		idAttribute: 'name',
		url: "data/plant",
		validate : function (attrs, options) {
			if (!attrs.name) {
				return "name is required";
			}
			
			if (typeof attrs.name !== "string") {
				return "attribute 'name' must be a string";
			}
		}
	});

	return PlantsModel;
});