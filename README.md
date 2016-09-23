# observable
Predictable info stream with lite implement.

## Usage
```javascript
'use strict';

import { Observable } from '@bornkiller/observable';

const stream = new Observable();

const subscription = stream.subscribe((info) => {
  console.log(info); // eslint-disable-line no-console
});

stream.next('hello world');
stream.next('nuclear weapon');

subscription.unsubscribe();

stream.next('dancing queen');

// output 
// 'hello world'
// 'nuclear weapon'

```

## Rollup
when choose rollup as build tool, configure package like below: 

```javascript
export default {
  external: ['@bornkiller/observable'],
  globals: {
    '@bornkiller/observable': 'bk.observable'
  }
};
```