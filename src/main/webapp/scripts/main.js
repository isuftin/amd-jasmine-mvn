requirejs(["messages/printer", "jquery"], function (printer, $) {
	return printer.printMessage("hello");
});