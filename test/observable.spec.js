/**
 * @description - observable method test case
 * @author bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import { Observable } from '../src/observable';

describe('Observable -- core', function () {
  beforeEach(function () {
    this.record = '';
    this.observable$ = Observable.create();
  });

  it('should publish information', function () {
    this.observable$.subscribe((record) => {
      this.record = record;
    });

    this.observable$.next('hello world');
    expect(this.record).toEqual('hello world');
  });

  it('should accept unsubscribe', function () {
    let subscription = this.observable$.subscribe((record) => {
      this.record = record;
    });

    this.observable$.next('hello world');
    expect(this.record).toEqual('hello world');

    subscription.unsubscribe();

    this.observable$.next('hello world!!!');
    expect(this.record).toEqual('hello world');
  });
});