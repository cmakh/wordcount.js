# wordcount.js
An NPM module for counting words

## Usage
_[Full documentation](https://cmakhi.gitbook.io/wordcountjs/)_

Using wordcount.js is easy, just require it and call the function with a string.
```javascript
var wordcount = require('wordcount.js');
var sentence = "Hello World, I'm Jim";
var wordcount = wordcount(sentence);
console.log(wordcount); // 4
```
You can also pass an array of strings using `wordcount#countMultiple` as shown below.
```javascript
var wordcount = require('wordcount.js');

var strings = ["Hello, World", "Hi I'm Bob", "npm is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code."]
console.log(wordcount.countMultiple(strings)); // [ 2, 3, 27 ]
```