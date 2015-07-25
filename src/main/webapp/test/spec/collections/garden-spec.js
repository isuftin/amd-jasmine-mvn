define(["models/PlantModel", "collections/GardenCollection", "sinon"], function (Plant, Garden, sinon) {
	describe("Garden", function () {
		var gardens = [{"name": "olbrich"}, {"name": "arboretum"}, {"name": "rotary"}];
		beforeEach(function () {
			this.server = sinon.fakeServer.create();
			this.server.respondWith("GET", "data/garden", [
				200,
				{"Content-Type": "application/json"},
				JSON.stringify(gardens)
			])
		});

		describe("creating Garden", function () {

			it("should be Backbone collection", function () {
				expect(Garden).not.toBe(null);
			});
			
			it("should accept a Garden array", function () {
				var exp = new Garden(gardens);
				expect(exp).not.toBe(null);
				expect(exp.length).toBe(3);
				expect(exp.get('olbrich')).not.toBe(undefined);
			})
		});

		describe("creating a Garden that fetches", function () {
			it("should make a call out to the server", function () {
				var exp = new Garden();
				exp.fetch();
				this.server.respond();
				expect(this.server.requests.length).toEqual(1);
				expect(this.server.requests[0].method).toEqual("GET");
				expect(this.server.requests[0].url).toEqual("data/garden");
				expect(exp.get('olbrich')).not.toBe(undefined);
			});
		});

		afterEach(function () {
			this.server.restore();
		});
	});
});