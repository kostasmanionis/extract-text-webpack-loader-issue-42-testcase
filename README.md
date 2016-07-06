Minimal testcase to reproduce https://github.com/webpack/extract-text-webpack-plugin/issues/42
==============================================================================================

To reproduce the bug:

```
git clone https://github.com/siebertm/extract-text-webpack-loader-issue-42-testcase.git
cd extract-text-webpack-loader-issue-42-testcase
npm install
webpack -w
```

Now, trigger a change (in a different terminal, leave webpack running):

```
echo "\\n" >> common.js
```

This triggers the bug for me (every 2nd time):

```
Hash: 267255a784c0d72dc142
Version: webpack 1.13.1
Time: 24ms
 Asset     Size   Chunks             Chunk Names
1.1.js  1.07 kB     1, 3  [emitted]
  b.js  1.17 kB  2, 1, 3  [emitted]  b
   [2] ./common.js 36 bytes {1} {2} [built]
    + 7 hidden modules

ERROR in $HOME/code/extract-text-bug/node_modules/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"remove":true}!$HOME/code/extract-text-bug/node_modules/style-loader/index.js!$HOME/code/extract-text-bug/node_modules/css-loader/index.js!$HOME/code/extract-text-bug/common.css doesn't export content

ERROR in $HOME/code/extract-text-bug/node_modules/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"remove":true}!$HOME/code/extract-text-bug/node_modules/style-loader/index.js!$HOME/code/extract-text-bug/node_modules/css-loader/index.js!$HOME/code/extract-text-bug/common.css doesn't export content
```
