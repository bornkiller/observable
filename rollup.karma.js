/**
 * @description - observable package rollup configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
import babel from 'rollup-plugin-babel';

export default {
  entry: 'test/observable.spec.js',
  dest: 'test/observable.spec.bundle.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [babel()]
};