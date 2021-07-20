# next-concat
> Creates a new array joining a wrapped array with any additional arrays and/or values.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-concat
```

## usage
```js
import '@jswork/next-concat';

const arr1 = [1,2];
const arr2 = ['a'];
const result = nx.concat(arr1,arr2);

//[1,2,'a'];
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-concat/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-concat
[version-url]: https://npmjs.org/package/@jswork/next-concat

[license-image]: https://img.shields.io/npm/l/@jswork/next-concat
[license-url]: https://github.com/afeiship/next-concat/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-concat
[size-url]: https://github.com/afeiship/next-concat/blob/master/dist/next-concat.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-concat
[download-url]: https://www.npmjs.com/package/@jswork/next-concat
