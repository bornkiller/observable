/**
 * @description - lite observable implement
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

import { Observer } from './observer';

export class Observable {
  constructor() {
    this._observers = [];
  }
  
  /**
   * @description - trigger info transfer
   *
   * @param {any} info - anything pipe into observers
   */
  next(info) {
    this._observers.forEach((observer) => {
      observer.next(info);
    });
  }
  
  /**
   * @description - interface between observer and source
   *
   * @param {function} client
   *
   * @return {Subscription}
   */
  subscribe(client) {
    let observer = Observer.create(client);
    let identity = observer.identity;
    
    this._observers.push(observer);
    
    return {
      unsubscribe: () => {
        this._observers = this._observers.filter((observer) => {
          return observer.identity !== identity;
        });
      }
    };
  }
  
  /**
   * @description - helper method for instantiate
   * @return {Observable}
   */
  static create() {
    return new Observable();
  }
}