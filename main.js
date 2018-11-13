const wordcut = require("wordcut");
wordcut.init();

const split_words = words
  .map(w => wordcut.cut(w).split("|"))
  .filter(a => a.length == 2);
// console.log(split_words.length);

const funny_words = split_words
  .filter(w => nouns.indexOf(w[0]) > -1 && verbs.indexOf(w[1]) > -1);
// console.log(funny_words);

const noun = document.getElementById("noun");
const verb = document.getElementById("verb");
function changeWord() {
  let word = funny_words[Math.floor(Math.random()*funny_words.length)];
  noun.innerHTML = word[0];
  verb.innerHTML = word[1];
}
