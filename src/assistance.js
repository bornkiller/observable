/**
 * @description - some assistance implement
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

export const identity = Symbol('@@BK/OBSERVABLE');

/**
 * @description - make internal consistency about observer
 * @param {function} observer
 */
export function wrap(observer) {
  return {
    identity: identity,
    next: observer
  };
}
