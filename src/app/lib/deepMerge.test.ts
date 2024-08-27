import { expect, test } from 'vitest';

import { deepMerge } from './deepMerge';

test('deepMerge', () => {
  const obj1 = {
    a: 1,
    b: {
      c: 2,
      d: 3
    },
    e: 4
  };
  const obj2 = {
    b: {
      c: 5
    },
    e: 6,
    f: 7
  };

  const result = deepMerge(obj1, obj2);
  expect(result).toEqual({
    a: 1,
    b: {
      c: 5,
      d: 3
    },
    e: 6,
    f: 7
  });
});
