define(["messages/messages"], function (messages) {
	describe("messages", function () {
		describe("getMessage", function () {
			it("should greet us with a specific message", function () {
				expect(messages.getMessage("hello")).toBe("Hi. I am requireJS and I am glad to meet you");
			});
		});
	});
});