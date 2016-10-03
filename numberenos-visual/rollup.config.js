import babel from 'rollup-plugin-babel';
import jsx from 'rollup-plugin-jsx';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import flow from 'rollup-plugin-flow';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import eslint from 'rollup-plugin-eslint';

const react = {
  "node_modules/react/react.js": [
    "Children",
    "Component",
    "createElement",
    "cloneElement",
    "isValidElement",
    "PropTypes",
    "createClass",
    "createFactory",
    "createMixin",
    "DOM",
    "version",
    "__spread",
  ]
};

const reactDom = {
  "node_modules/react-dom/index.js": [
    "findDOMNode",
    "render",
    "unmountComponentAtNode",
    "version",
    "unstable_batchedUpdates",
    "unstable_renderSubtreeIntoContainer",
  ]
};

const redux = {
  "node_modules/redux/index.js": [
    "createStore"
  ]
};

const reactRedux = {
  "node_modules/react-redux/index.js": [
    "Provider"
  ]
};

const lodash = {
  "node_modules/lodash/lodash.js": [
    "times"
  ]
};

export default {
  entry: 'src/index.js',
  dest: './dist/app.js',
  globals: {
    process: {
      env: {}
    }
  },
  plugins: [
    eslint(),
    replace({
      "process.env.NODE_ENV": JSON.stringify('development')
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: Object.assign({}, react, reactDom, redux, reactRedux, lodash)
    }),
    babel({
      "exclude": "node_modules/**",
      "presets": ["es2015-rollup", "react"]
    }),
    jsx({ factory: 'React.createElement' }),
    flow(),
    livereload({
        watch: 'dist/app.js'
    }),
    serve({
        contentBase: 'dist',
        host: 'localhost',
        port: 8080
    })
  ]
};