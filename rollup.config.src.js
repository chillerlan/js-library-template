import json from '@rollup/plugin-json';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	input  : 'src/index.js',
	output : [
		{
			file     : 'dist/dist-es6-src.js',
			format   : 'es',
			sourcemap: true,
		},
		{
			file     : 'dist/dist-node-src.cjs',
			format   : 'cjs',
			sourcemap: true,
		},
	],
	plugins: [
		json(),
	],
};
