# an-incompatible-package

## Introduction

a package that includes some ES6 syntaxes.


## Installation 
* install as a dependency

```sh
npm install an-incompatible-package --save
```

* or use UMD version

```html
<script src="https://unpkg.com/an-incompatible-package@latest/dist/bundle.umd.js"></script>
```

## Usage

For NPM usage
```js
import { runAll } from 'an-incompatible-package'

runAll()
```

For UMD usage
```js
window.__COMPAT_TEST__.runAll()
```

or you can use individual functions

* arrSpread
* objSpread



## What's included?

* Array Spread Operator
* Object Spread Operator


## Changelog
see [CHANEGLOG.md](https://github.com/citrus327/an-incompatible-package/blob/main/CHANGELOG.md)

To generate a CHANGELOG.md

```bash
git cliff
```

