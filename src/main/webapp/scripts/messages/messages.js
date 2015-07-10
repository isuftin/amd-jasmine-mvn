define(function () {
	var messages = {
		"hello" : "Hi. I am requireJS and I am glad to meet you"
	};
	
	return {
		getMessage : function (message) {
			if (messages.hasOwnProperty(message)) {
				return messages[message];
			} else {
				return "";
			}
		}
	};
});