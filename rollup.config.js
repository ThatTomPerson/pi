import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';
import buble from 'rollup-plugin-buble';

export default {
	input: 'src/pi.js',
	output: {
		file: 'js/pi.js',
		format: 'iife',
		strict: false
	},
	plugins: [
		json(),
		buble(),
		(process.env.NODE_ENV === 'production' && uglify()),
	]
};
