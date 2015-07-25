define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/Default.html'
], function ($, _, Backbone, tpl) {
	var DefaultView = Backbone.View.extend({
		el: $('#container'),
		render: function () {
			var compiledTemplate = _.template(tpl);
			this.$el.append(compiledTemplate);
		}
	});
	
	return DefaultView;
});