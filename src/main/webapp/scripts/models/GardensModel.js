define([
	'backbone'
], function (Backbone) {

	/*
	 * A Gardens model should be an array of strings representing available garden names
	 */

	var GardensModel = Backbone.Model.extend({
		url: "data/garden",
		idAttribute: 'name',
		validate: function (attrs, options) {
			if (!attrs.name) {
				return "name is required";
			}

			if (typeof attrs.name !== "string") {
				return "attribute 'name' must be a string";
			}
		}
	});

	return GardensModel;
});