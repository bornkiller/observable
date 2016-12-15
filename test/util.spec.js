/**
 * @description - util method test case
 * @author bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import { isFunction, isObject } from '../src/util';

describe('observable util', function () {
  it('should determine function', function () {
    expect(isFunction(isObject)).toBeTruthy();
    expect(isFunction('jasmine')).toBeFalsy();
  });

  it('should determine object literal', function () {
    expect(isObject({ framework: 'jasmine' })).toBeTruthy();
    expect(isObject([])).toBeFalsy();
  });
});