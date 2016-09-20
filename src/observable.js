/**
 * @description - lite observable implement
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
export class Observable {
  constructor() {
    this.observers = [];
  }
  
  /**
   * @description - push info into all the observers
   * @param info
   */
  next(info) {
    this.observers.forEach((item) => {
      item.observer.call(this, info);
    });
  }
  
  /**
   * @description - register observer
   * @param {function} observer
   * @return {{unsubscribe: function}}
   */
  subscribe(observer) {
    let identity = Symbol('BORNKILLER_OBSERVABLE');
    
    this.observers.push({identity, observer});
    
    return {
      unsubscribe: () => {
        this.observers = this.observers.filter((item) => {
          return item.identity !== identity;
        });
      }
    };
  }
}