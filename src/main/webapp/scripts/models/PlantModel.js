define([
	'backbone'
], function (Backbone) {

	var PlantModel = Backbone.Model.extend({
		idAttribute: 'name',
		url: function() {
			return "data/plant/" + this.id;
		},
		initialize : function (args) {
			this.id = args.id;
		},
		validate : function (attrs, options) {
			if (!attrs.name) {
				return "name is required";
			}
			
			if (typeof attrs.name !== "string") {
				return "attribute 'name' must be a string";
			}
			
			if (!attrs.color) {
				return "color is required";
			}
			
			if (typeof attrs.color !== "string") {
				return "attribute 'color' must be a string";
			}
			
			if (attrs.fruit_bearing === undefined) {
				return "fruit_bearing is required";
			}
			
			if (typeof attrs.fruit_bearing !== "boolean") {
				return "attribute 'fruit_bearing' must be a boolean";
			}
			
		}
	});

	return PlantModel;
});