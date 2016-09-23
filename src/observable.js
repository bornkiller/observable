/**
 * @description - lite observable implement
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
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
    this._observers.forEach(({observer}) => {
      observer.call(null, info);
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
    let identity = Symbol('@@BK_OBSERVABLE');
    
    this._observers.push({identity, observer});
    
    return {
      unsubscribe: () => {
        this._observers = this._observers.filter((item) => {
          return item.identity !== identity;
        });
      }
    };
  }
}