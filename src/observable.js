/**
 * @description - lite observable implement
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
export class Observable {
  constructor() {
    this._observers = [];
  }
  
  /**
   * @description - push info into all the observers
   * @param info
   */
  next(info) {
    this._observers.forEach(({observer}) => {
      observer.call(null, info);
    });
  }
  
  /**
   * @description - register observer
   * @param {function} observer
   * @return {{unsubscribe: function}}
   */
  subscribe(observer) {
    let identity = Symbol('BORNKILLER_OBSERVABLE');
    
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