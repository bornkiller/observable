/**
 * @description - observable package rollup configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
import eslint from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  plugins: [
    eslint({
      include: ['index.js', 'src/*.js']
    }),
    babel()
  ],
  moduleId: 'bk.observable',
  moduleName: 'bk.observable',
  external: [],
  globals: {},
  targets: [
    {format: 'umd', dest: 'dist/observable.bundle.js'},
    {format: 'es', dest: 'dist/observable.bundle.esm.js'}
  ]
};