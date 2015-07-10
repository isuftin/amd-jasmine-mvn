define(["messages/printer"], function (printer) {
	describe("printer", function () {
		describe("printMessage", function () {
			it("should greet us", function () {
				expect(printer.printMessage("hello")).toBe(true);
			});
		});
	});
});