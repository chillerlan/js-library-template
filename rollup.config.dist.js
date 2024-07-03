import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	input  : 'src/index.js',
	output : [
		{
			file     : 'dist/dist-es6.js',
			format   : 'es',
			sourcemap: false,
		},
		{
			file     : 'dist/dist-node.cjs',
			format   : 'cjs',
			sourcemap: false,
		},
	],
	plugins: [
		babel({
			babelHelpers: 'bundled',
			configFile  : './babel.config.json',
		}),
		json(),
		terser({
			format: {
				comments         : false,
				keep_quoted_props: true,
//				max_line_len: 130,
				quote_style: 1,
				preamble   :
					  '/*\n'
					+ ' * @copyright  2024 smiley\n'
					+ ' * @license    MIT\n'
					+ ' * @link       https://github.com/chillerlan/js-library-template\n'
					+ ' */',
			},
		}),
	],
};
