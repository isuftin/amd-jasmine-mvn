define(["models/PlantsModel", "sinon"], function (Plants, sinon) {
	describe("Plants", function () {
		describe("creating Plants", function () {
			it("should be Backbone model", function () {
				expect(Plants).not.toBe(null);
			});
			
			it("should accept accept a name", function () {
				var pType = {
					'name': 'test name'
				};
				var exp = new Plants(pType);
				expect(exp).not.toBe(null);
				expect(exp.get('name')).toBe(pType.name);
			});

			it("should not validate with incorrect arguments", function () {
				var pType = {
					'namez': 'test name'
				};

				var exp = new Plants(pType);
				expect(exp.isValid()).toBeFalsy();
				expect(exp.validationError).toBe("name is required");
			});
			
			it("should trigger change events when properties change", function () {
				var pType = {
					'name': 'test name'
				};
				var spy = sinon.spy();
				var exp = new Plants(pType);
				exp.bind('change', spy);
				
				exp.set('name', 'different name');
				expect(spy.called).toBeTruthy();
			});

		});
	});
});