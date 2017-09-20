# Future Jobs

Generates funny future jobs like:

```
💻 virtual reality implementer
💗 expansion operator
🏄 paradigm surfer
🚀 rocketship magnate
👷 consensus salesman
```

Backend code that produced this — total of 5 lines, so it's very simple:

```javascript
const areas = require('./data/areas');
const operators = require('./data/operators');

const area = areas[Math.floor(areas.length * Math.random())];
const operator = operators[Math.floor(operators.length * Math.random())];

console.log(`${area} ${operator}`);
```


## Prerequisites

**Summary:** `node.js` and `git`. You can skip to the next section if you already have these.

- [node.js](https://nodejs.org/en/download/) spectacular platform. LTS (Long-term support) is the right choice for most.

- [git](https://git-scm.com/downloads) incredible version control (needed in the background to install some dependencies on first install).

**Optional:** if you want easy switching between different `node.js` versions in the future and you are using **unix based systems** (macOS, Linux), you can install `node.js` via fantastic [n](https://github.com/tj/n) (don't download it from *nodejs.org* in this
case).

You can also install both `node.js` and `git` via [Homebrew](https://brew.sh) friendly package manager for macOS. [n](https://github.com/tj/n) is still recommended for `node.js` though.

[npm](https://www.npmjs.com) (Node Package Manager) is installed automatically with `node.js` install (just FYI).

## Install future-jobs just for use

In **Terminal** (Linux, macOS) or **Command Prompt** (Windows) type:

``npm install -g future-jobs``

Then just run:

``future-jobs``

to get one future job.

## Install future-jobs for playing

    git clone git@github.com:uniqpath/future-jobs.git
    cd future-jobs

Now run:

    node index.js

to get one future job.

Add more funny words to `data/areas.json` and `data/operators.json`.
