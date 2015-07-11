define(['jquery'], function ($) {

	var _deepExtend = function (original, incoming) {
		if (typeof original === 'object' && typeof incoming === 'object') {
			return $.extend(true, {}, original, incoming);
		}
		throw new TypeError("One or both parameters was not an object", "extend");
	};

	return {
		deepExtend: _deepExtend
	};
});