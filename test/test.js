var wordcount = require('../lib/index.js');

console.log("Counting the following sentence:\n\"Hello I'm Jim. This  sentence contains a double space, but it's ok, it won't cause any problems.\"");
console.log(wordcount("Hello I'm Jim. This  sentence contains a double space, but it's ok, it won't cause any problems."));

var strings = ["Hello, World", "Hi I'm Bob", "npm is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code."]
console.log("Counting the following array of strings\n", strings);
console.log(wordcount.countMultiple(strings));