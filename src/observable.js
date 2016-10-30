/**
 * @description - lite observable implement
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

import { identity, wrap } from './assistance';

export class Observable {
  constructor() {
    this._observers = [];
  }
  
  /**
   * @typedef {object} Subscription
   *
   * @property {function} unsubscribe
   *
   * @description - unique record for the subscribe
   */
  
  /**
   * @description - push info into all the observers
   *
   * @param {any} info - anything pipe into next
   */
  next(info) {
    this._observers.forEach((observer) => {
      observer.next(info);
    });
  }
  
  /**
   * @description - register observer
   *
   * @param {function} observer
   *
   * @return {Subscription}
   */
  subscribe(observer) {
    this._observers.push(wrap(observer));
    
    return {
      unsubscribe: () => {
        this._observers = this._observers.filter((observer) => {
          return observer.identity !== identity;
        });
      }
    };
  }
}