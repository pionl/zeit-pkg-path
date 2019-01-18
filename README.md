# zeit-pkg-path

> **Node 8+**

Helps to resolve paths when using [pkg](https://github.com/zeit/pkg) (detects if using packaged app or testing via node cli.js) related to current working dir of running app (where the app is installed or where node was executed).



## Example

```bash
# Running in /root/
node test/cli.js
# Path returned via path.resolve('test.png')
# > /root/test.png

# Running in /root/
node cli.js
# Path returned via path.resolve('test.png')
# > /root/test.png

# Running in /root/test
./cli 
# Path returned via path.resolve('test.png')
# /root/test/test.png
```

## Install

```
npm install zeit-pkg-path
```

## Usage

```javascript
// in context /root/test
const path = require('zeit-pkg-path')

// Resolves path based on current base path
console.log(path.resolve('../index.js'))
// /root/index.js

console.log(path.join('index'))
// /root/test/index

console.log(path.isLocal)
// True if running via node index.js, false if running in packaged executable

// Replaces base path from given string with dot to make it relative
console.log(path.toRelative('/root/test/index.js'))
// ./index.js

// Returns the base path
console.log(path.paths.base)
// /root/test
```


