let wordcut = require("wordcut");
wordcut.init();
let split_words = words
  .map(w => wordcut.cut(w).split("|"))
  .filter(a => a.length == 2);
console.log(split_words);
