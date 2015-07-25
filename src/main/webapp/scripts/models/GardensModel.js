define([
	'backbone'
], function (Backbone) {

	/*
	 * A Gardens model should be an array of strings representing available garden names
	 */

	var GardensModel = Backbone.Model.extend({
		url: "data/garden",
		idAttribute: 'name'
	});

	return GardensModel;
});