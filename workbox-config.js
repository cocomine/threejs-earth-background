module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{jpg,webp,png,js,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
};