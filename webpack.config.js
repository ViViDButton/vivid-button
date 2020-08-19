const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
	// Other webpack config...
	plugins: [
		// Other plugins...
		new GenerateSW({
			runtimeCaching: 'CacheOnly',
		})
	]
};