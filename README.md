# negative-indices

[![Greenkeeper badge](https://badges.greenkeeper.io/EirikBirkeland/negative-indices.svg)](https://greenkeeper.io/)

Wraps provided array in a Proxy, giving it the power of "Python-style" negative index access.

```js
const myArr = require('negative-indices')([1,2,3])
console.log(myArr[-1]) // 3
```
