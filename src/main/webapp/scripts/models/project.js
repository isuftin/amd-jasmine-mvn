define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	var ProjectModel = Backbone.Model.extend({
		defaults : {
			name : 'Harry Potter'
		}
	});
	
	return ProjectModel;
});