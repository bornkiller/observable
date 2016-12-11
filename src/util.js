/**
 * @description - util method
 * @author bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

/**
 * @description - determine if input is function
 *
 * @param {any} input
 * @return {boolean}
 */
export function isFunction(input) {
  return Object.prototype.toString.call(input) === '[object Function]';
}

/**
 * @description - determine if input is literal object
 *
 * @param {any} input
 * @return {boolean}
 */
export function isObject(input) {
  return Object.prototype.toString.call(input) === '[object Object]';
}
