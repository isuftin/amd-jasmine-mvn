define([
	'backbone',
	'views/GardenView',
	'views/GardensView',
	'views/PlantsView',
	'views/PlantView',
	'views/DefaultView'
], function (Backbone, GardenView, GardensView, PlantsView, PlantView, DefaultView) {
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": 'showDefault',
			"gardens": 'showGardens',
			"garden/:name": "showGarden",
			"plants": 'showPlants',
			"plant/:name": "showPlant"
		},
		initialize: function () {
			this.on("route:showDefault", function () {
				var defaultView = new DefaultView();
				defaultView.render();
			});

			this.on("route:showGardens", function () {
				var gardenView = new GardensView();
				gardenView.collection.fetch({reset: true});
			});

			this.on("route:showGarden", function (name) {
				var gardenView = new GardenView({id: name});
				gardenView.collection.fetch({reset: true});
			});

			this.on("route:showPlants", function () {
				var plantView = new PlantsView();
				plantView.collection.fetch({reset: true});
			});

			this.on("route:showPlant", function (name) {
				var plantView = new PlantView({id: name});
				plantView.model.fetch({reset: true});
			});

			return this;
		}
	});


	return ApplicationRouter;
});