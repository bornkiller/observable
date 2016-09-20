/**
 * @description - observable package rollup configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
import babel from 'rollup-plugin-babel';

export default {
  entry: 'index.js',
  plugins: [babel()],
  moduleId: 'bk.observable',
  moduleName: 'bk.observable',
  external: [],
  globals: {},
  targets: [
    {format: 'umd', dest: 'dist/observable.bundle.js'},
    {format: 'es', dest: 'dist/observable.bundle.esm.js'}
  ]
};