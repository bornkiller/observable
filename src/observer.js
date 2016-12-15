/**
 * @description - observer client implement
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

import { isFunction, isObject } from './util';

const identity = Symbol.for('@@bk/Observable');

export class Observer {
  /**
   * @description - create observer instance
   *
   * @param {function|{next: function}} client
   *
   * @return {Observer}
   *
   * @throws - observer client should match definition
   */
  static create(client) {
    if (isFunction(client)) {
      return { identity, next: client };
    }

    if (isObject(client) && isFunction(client.next)) {
      return Object.assign({}, client, { identity });
    }

    throw new Error('@@bk/observable: Observer client should match @type {function} or @type {{next: function}}');
  }
}