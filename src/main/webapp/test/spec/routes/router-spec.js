define([
	"backbone",
	"sinon",
	"router"
], function (Backbone, sinon, Router) {
	describe("Router", function () {
		beforeEach(function () {
			this.router = new Router();
			this.routeSpy = sinon.spy();
			this.router.bind("route:showDefault", this.routeSpy);
			this.router.bind("route:showGardens", this.routeSpy);
			this.router.bind("route:showGarden", this.routeSpy);
			this.router.bind("route:showPlants", this.routeSpy);
			this.router.bind("route:showPlant", this.routeSpy);

			try {
				Backbone.history.start({silent: true});
			} catch (e) {
			}
			this.router.navigate("elsewhere");
		});

		it("does not fire for unknown paths", function () {
			this.router.navigate("unknown", true);
			expect(this.routeSpy.notCalled).toBeTruthy();
		});

		it("fires the default root with a blank hash", function () {
			this.router.navigate("", true);
			expect(this.routeSpy.calledOnce).toBeTruthy();
			expect(this.routeSpy.calledWith(null)).toBeTruthy();
		});

		it("fires the gardens path", function () {
			this.router.navigate("gardens", true);
			expect(this.routeSpy.calledOnce).toBeTruthy();
			expect(this.routeSpy.calledWith(null)).toBeTruthy();
		});

		it("fires the plant path with a test plant", function () {
			this.router.navigate("plant/testPlant", true);
			expect(this.routeSpy.calledOnce).toBeTruthy();
			expect(this.routeSpy.calledWith("testPlant")).toBeTruthy();
		});

		it("fires the garden path with a test garden", function () {
			this.router.navigate("garden/testGarden", true);
			expect(this.routeSpy.calledWith("testGarden")).toBeTruthy();
		});
	});
});