# Atto ID

> Secure URL-friendly unique string ID generator in ~10 LOC.

[![Build Status](https://github.com/xxczaki/attoid/workflows/CI/badge.svg)](https://github.com/xxczaki/attoid/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/xxczaki/attoid/badge.svg?branch=master)](https://coveralls.io/github/xxczaki/attoid?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

This module generates secure, URL-friendly and truly random IDs. It was inspired mainly by [Nano ID](https://github.com/ai/nanoid). It uses the new [`crypto.randomInt`](https://nodejs.org/api/crypto.html#crypto_crypto_randomint_min_max_callback) method introduced in Node.js v14.10.0. Besides limited compatibility, the performance is also relatively low in comparison with similar libraries (about 20k ops/sec).

---

## Highlights

- Tiny size
- Same default ID length as in Nano ID
- Bigger default dictionary (includes 2 additional characters - `~` and `.`)
- Uses the truly random Crypto API
- URL-friendly
- Ability to customize dictionary
- Well tested
- Written in TypeScript

## Install

```
$ npm install attoid
```

## Usage

```js
import {attoid} from 'attoid';

attoid(); // => V_SiU1mrfle.wZD9YbBQ
```

## API

### attoid(length?, dictionary?)

Returns a random string.

##### length

Type: `number`\
Default: `21`

Length of the generated string.

##### dictionary

Type: `string`\
Default: `aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890-._~`

Custom dictionary, from which the string should be generated.

## License

MIT © [Antoni Kepinski](https://kepinski.me)
