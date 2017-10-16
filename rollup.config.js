import json from 'rollup-plugin-json';

export default {
	input: 'src/pi.js',
	output: {
	  file: 'js/pi.js',
	  format: 'iife',
	  strict: false
	},
	plugins: [ json() ]
  };
