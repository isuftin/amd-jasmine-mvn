require(['jasmine-boot'], function () {
	require([
		'spec/messages/messages-spec.js',
		'spec/messages/printer-spec.js',
		'spec/utility/extend-spec.js'
	], function () {
		//trigger Jasmine
		window.onload();
	});
});