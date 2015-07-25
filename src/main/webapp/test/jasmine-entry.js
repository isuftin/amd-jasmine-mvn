require(['jasmine-boot'], function () {
	require([
		'spec/models/plant-spec.js',
		'spec/models/garden-spec.js'
	], function () {
		//trigger Jasmine
		window.onload();
	});
});