define(["messages/printer"], function (printer) {
	describe("printer", function () {
		describe("printMessage", function () {
			it("should return true", function () {
				expect(printer.printMessage("hello")).toBe(true);
			});
		});
	});
});