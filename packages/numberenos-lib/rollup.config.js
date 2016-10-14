import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import flow from 'rollup-plugin-flow';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';

const lodash = {
  "node_modules/lodash/lodash.js": [
    "countBy", 
    "invertBy",
    "isNaN",
    "isSafeInteger",
    "map",
    "reduce",
    "sortBy",
    "sumBy",
    "toSafeInteger"
  ]
};

export default {
  entry: 'lib/index.js',
  dest: './dist/numberenos.js',
  format: 'cjs',
  globals: {
    process: {
      env: {}
    }
  },
  plugins: [
    eslint(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: Object.assign({}, lodash)
    }),
    babel({
      "exclude": "node_modules/**",
      "presets": ["es2015-rollup"],
      "runtimeHelpers": true
    }),
    flow(),
    uglify()
  ]
};