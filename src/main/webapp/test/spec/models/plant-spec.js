define(["models/PlantModel", "sinon"], function (Plant, sinon) {
	describe("Plant", function () {
		describe("creating Plant", function () {

			it("should be Backbone model", function () {
				expect(Plant).not.toBe(null);
			});

			it("should accept accept two strings and a boolean", function () {
				var pType = {
					'name': 'test name',
					'color': 'test color',
					'fruit_bearing': false
				}
				var exp = new Plant(pType);
				expect(exp).not.toBe(null);
				expect(exp.get('name')).toBe(pType.name);
				expect(exp.get('color')).toBe(pType.color);
				expect(exp.get('fruit_bearing')).toBe(pType.fruit_bearing);
			});

			it("should not validate with incorrect arguments", function () {
				var pType = {
					'name': 'test name',
					'color': 'test color',
					'fruit_bearing': 'not a boolean'
				}
;
				var exp = new Plant(pType);
				expect(exp.isValid()).toBeFalsy();
				expect(exp.validationError).toBe("attribute 'fruit_bearing' must be a boolean");
			});

			it("should trigger change events when properties change", function () {
				var pType = {
					'name': 'test name',
					'color': 'test color',
					'fruit_bearing': false
				};
				var spy = sinon.spy();
				var exp = new Plant(pType);
				exp.bind('change', spy);
				
				exp.set('name', 'different name');
				expect(spy.called).toBeTruthy();
			});
		});
	});
});