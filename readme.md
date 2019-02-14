# randomjs-lib

[![Build Status](https://travis-ci.org/rubenandre/randomjs-lib.svg?branch=master)](https://travis-ci.org/rubenandre/randomjs-lib)

A lib to get random numbers, booleans and elements from an array.

## How to install

```
    yarn add randomjs-lib

    npm install --save randomjs-lib
```

## Features:

- Randomize an integer:
```js
    const random = require('randomjs-lib')

    random.randInt(begin, end); 
    // eg: random.randInt(1, 10)
    // eg result: 8
```

- Randomize a float:

```js
    const random = require('randomjs-lib')

    random.randFloat(begin, end, decimal_places); 
    // eg: random.randFloat(1.5, 2, 2)
    // eg result: 1.67
```

- Randomize a boolean:

```js
    const random = require('randomjs-lib')

    random.randBoolean(); 
    // eg result: true
```

- Randomize an even number
```js
    const random = require('randomjs-lib')

    random.randEven(begin, end); 
    // eg: random.randEven(1, 10)
    // eg result: 2
```

- Randomize an odd number
```js
    const random = require('randomjs-lib')

    random.randOdd(begin, end); 
    // eg: random.randEven(1, 10)
    // eg result: 7
```

- Randomize an element from an array
```js
    const random = require('randomjs-lib')

    random.randElement(Array); 
    // eg: random.randEven([1, 10, 28, 34])
    // eg result: 28
```

