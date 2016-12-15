/**
 * @description - observer method test case
 * @author bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import { Observer } from '../src/observer';

describe('observable -- observer', function () {
  beforeAll(function () {
    this.shortcut = () => {
    };
  });

  it('should decorate function', function () {
    let client = this.shortcut;
    let instance = Observer.create(client);

    expect(instance.identity).toEqual(Symbol.for('@@bk/Observable'));
    expect(instance.next).toEqual(client);
  });

  it('should decorate object literal', function () {
    let client = { next: this.shortcut };
    let instance = Observer.create(client);

    expect(instance.identity).toEqual(Symbol.for('@@bk/Observable'));
    expect(instance.next).toEqual(client.next);
  });
});