define(["collections/GardenPlantsCollection", "models/PlantsModel", "sinon"], function (GardenPlants, Plants, sinon) {
	describe("GardenPlants Collection", function () {
		var gardenPlants = [
			{
				"name": "olbrich",
				"plants" : new Plants([{name : 'plant1'},{name : 'plant2'},{name : 'plant3'}])
			}, 
			{
				"name": "arboretum",
				"plants" : new Plants([{name : 'plant4'},{name : 'plant5'},{name : 'plant6'}])
			}, 
			{
				"name": "rotary",
				"plants" : new Plants([{name : 'plant7'},{name : 'plant8'},{name : 'plant9'}])
			}];
		beforeEach(function () {
			this.server = sinon.fakeServer.create();
			this.server.respondWith("GET", "data/garden", [
				200,
				{"Content-Type": "application/json"},
				JSON.stringify(gardenPlants)
			]);
			this.server.respondWith("GET", "data/garden/olbrich", [
				200,
				{"Content-Type": "application/json"},
				JSON.stringify(gardenPlants[0])
			]);
			this.server.respondWith("GET", "data/garden/arboretum", [
				200,
				{"Content-Type": "application/json"},
				JSON.stringify(gardenPlants[1])
			]);
			this.server.respondWith("GET", "data/garden/rotary", [
				200,
				{"Content-Type": "application/json"},
				JSON.stringify(gardenPlants[2])
			]);
		});

		describe("creating GardenPlants Collection", function () {
			it("should be Backbone collection", function () {
				expect(GardenPlants).not.toBe(null);
			});

			it("should accept a Garden/Plants object", function () {
				var exp = new GardenPlants(gardenPlants);
				expect(exp).not.toBe(null);
				expect(exp.length).toBe(3);
				expect(exp.get('olbrich')).not.toBe(undefined);
				expect(exp.get('olbrich').get('plants')).not.toBe(undefined);
				expect(exp.get('olbrich').get('plants').keys().length).toBe(3);
				expect(exp.get('olbrich').get('plants').attributes[0].name).toBe('plant1');
			})
		});

		describe("creating a Garden that fetches", function () {
			it("should make a call out to the server", function () {
				var exp = new GardenPlants({ id: 'olbrich' });
				exp.fetch();
				this.server.respond();
				expect(this.server.requests.length).toEqual(1);
				expect(this.server.requests[0].method).toEqual("GET");
				expect(this.server.requests[0].url).toEqual("data/garden/olbrich");
				expect(exp.get('olbrich')).not.toBe(undefined);
				expect(exp.get('olbrich').get('plants')[0]).not.toBe(undefined);
				expect(exp.get('olbrich').get('plants')[0].name).toBe("plant1");
				expect(exp.get('olbrich').get('plants')[1]).not.toBe(undefined);
				expect(exp.get('olbrich').get('plants')[1].name).toBe("plant2");
				expect(exp.get('olbrich').get('plants')[2]).not.toBe(undefined);
				expect(exp.get('olbrich').get('plants')[2].name).toBe("plant3");
			});
		});

		afterEach(function () {
			this.server.restore();
		});
	});
});