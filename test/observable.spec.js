/**
 * @description - observable test suits
 */
'use strict';

import { Observable } from '../src/observable';

describe('@bornkiller/observable package suits', function () {
  beforeEach(function () {
    this.instance = new Observable();
    this.observer = jasmine.createSpy('observer');
    jasmine.clock().install();
  });
  
  it('should export limited method', function () {
    expect(this.instance.next).toBeDefined();
    expect(this.instance.subscribe).toBeDefined();
  });
  
  it('should receive info from observable after subscribe', function (done) {
    this.instance.subscribe(this.observer);
    
    this.instance.next('hello world 0');
    this.instance.next('hello world 1');
    this.instance.next('hello world 2');
    
    expect(this.observer.calls.count()).toEqual(3);
    expect(this.observer.calls.argsFor(0)).toEqual(['hello world 0']);
    expect(this.observer.calls.argsFor(1)).toEqual(['hello world 1']);
    expect(this.observer.calls.argsFor(2)).toEqual(['hello world 2']);
    
    done();
  });
  
  it('should not receive info from observable after unsubscribe', function (done) {
    let subscriber = this.instance.subscribe(this.observer);
    let intervalId = setInterval(() => {
      this.instance.next('hello world');
    }, 200);
    
    setTimeout(() => {
      subscriber.unsubscribe();
    }, 300);
    
    jasmine.clock().tick(201);
    expect(this.observer.calls.count()).toEqual(1);
    
    jasmine.clock().tick(601);
    expect(this.observer.calls.count()).toEqual(1);
    
    clearInterval(intervalId);
    done();
  });
  
  afterEach(function () {
    jasmine.clock().uninstall();
  });
});