define([
	"views/GardensView",
	"sinon"
], function (GardensView, sinon) {
	describe("GardensView", function () {
		var gardens = [{"name": "olbrich"}, {"name": "arboretum"}, {"name": "rotary"}];
		beforeEach(function () {
			$('body').append($("<div />").attr("id", "container"));
			this.server = sinon.fakeServer.create();
			this.server.respondWith("GET", "data/garden", [
				200,
				{"Content-Type": "application/json"},
				JSON.stringify(gardens)
			]);
		});

		describe("Instantiation", function () {
			it("should have a list of available gardens", function () {
				this.view = new GardensView();
				this.view.setElement('#container');
				this.view.collection.fetch({ reset : true });
				this.server.respond();
				expect(this.view.$el.html()).toContain("olbrich");
				expect(this.view.$el.html()).toContain("arboretum");
				expect(this.view.$el.html()).toContain("rotary");
			});

		});

		afterEach(function () {
			$('#container').remove();
			this.server.restore();
		});
	});
});