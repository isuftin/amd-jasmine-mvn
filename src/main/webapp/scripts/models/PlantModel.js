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
		}
	});

	return PlantModel;
});