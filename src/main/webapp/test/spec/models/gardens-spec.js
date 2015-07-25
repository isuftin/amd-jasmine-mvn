define(["models/GardensModel", "sinon"], function (Gardens, sinon) {
	describe("Gardens", function () {
		describe("creating Gardens", function () {
			it("should be Backbone model", function () {
				expect(Gardens).not.toBe(null);
			});
			
			it("should accept accept a name", function () {
				var gType = {
					'name': 'test name'
				};
				var exp = new Gardens(gType);
				expect(exp).not.toBe(null);
				expect(exp.get('name')).toBe(gType.name);
			});

			it("should not validate with incorrect arguments", function () {
				var gType = {
					'namez': 'test name'
				};

				var exp = new Gardens(gType);
				expect(exp.isValid()).toBeFalsy();
				expect(exp.validationError).toBe("name is required");
			});
			
			it("should trigger change events when properties change", function () {
				var gType = {
					'name': 'test name'
				};
				var spy = sinon.spy();
				var exp = new Gardens(gType);
				exp.bind('change', spy);
				
				exp.set('name', 'different name');
				expect(spy.called).toBeTruthy();
			});

		});
	});
});