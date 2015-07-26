define([
	"views/DefaultView"
], function (DefaultView) {
	describe("DefaultView", function () {
		beforeEach(function () {
			$('body').append($("<div />").attr("id", "container"));
			this.view = new DefaultView();
			this.view.setElement('#container');
		});

		describe("Instantiation", function () {
			it("should yield a welcome notification", function () {
				this.view.render();
				expect(this.view.$el.html()).toContain("Welcome!");
			});

		});
		
		afterEach(function () {
			$('#container').remove();
		});
	});
});