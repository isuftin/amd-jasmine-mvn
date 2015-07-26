define([
	"views/PlantView",
	"sinon"
], function (PlantView, sinon) {
	describe("PlantView", function () {
		beforeEach(function () {
			var plant = {
				'name': 'test name',
				'color': 'test color',
				'fruit_bearing': true
			}
			$('body').append($("<div />").attr("id", "container"));
			this.server = sinon.fakeServer.create();
			this.server.respondWith("GET", "data/plant/test", [
				200,
				{"Content-Type": "application/json"},
				JSON.stringify(plant)
			]);
		});

		describe("Instantiation", function () {
			it("should describe a test plant", function () {
				this.view = new PlantView({ id : 'test'});
				this.view.setElement('#container');
				this.view.model.fetch({reset: true});
				this.server.respond();
				expect(this.view.$el.html()).toContain("test name");
				expect(this.view.$el.html()).toContain("test color");
				expect(this.view.$el.html()).toContain("true");
			});
		});

		afterEach(function () {
			$('#container').remove();
			this.server.restore();
		});
	});
});