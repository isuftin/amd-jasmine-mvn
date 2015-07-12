define(["utility/extend"], function (extend) {
	describe("extend", function () {
		describe("deepExtend", function () {
			it("should properly extend one object with another", function () {
				var obj1 = {'a': 1, 'b': 2};
				var obj2 = {'c': 3};
				var objResult = extend.deepExtend(obj1, obj2);

				expect(objResult).not.toBe(null);

				expect(objResult['a']).not.toBe(null);
				expect(objResult['b']).not.toBe(null);
				expect(objResult['c']).not.toBe(null);

				expect(objResult['a']).toBe(1);
				expect(objResult['b']).toBe(2);
				expect(objResult['c']).toBe(3);
			});

			it("should not mutate incoming parameters", function () {
				var obj1 = {'a': 1, 'b': 2};
				var obj2 = {'c': 3};
				extend.deepExtend(obj1, obj2);

				expect(Object.keys(obj1).length).toBe(2);
				expect(Object.keys(obj2).length).toBe(1);

			});

			it("should throw an exception when provided a null or undefined object", function () {
				expect(extend.deepExtend).toThrowError("One or both parameters was not an object");
			});
		});
	});
});