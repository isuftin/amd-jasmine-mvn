define(["./messages"], function (messages) {
	
	/**
	 * Given a message, will print to console if console is available
	 * @param {type} message
	 * @returns {Boolean} whether message was printed to console
	 */
	var log = function (message) {
		if (console) {
			console.log(message);
			return true;
		}
		return false;
	};
	
	return {
		printMessage : function (message) {
			var _message = messages.getMessage(message);
			return log(_message);
		}
	};
});