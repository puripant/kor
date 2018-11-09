const wordcut = require("wordcut");
wordcut.init();

const split_words = words
  .map(w => wordcut.cut(w).split("|"))
  .filter(a => a.length == 2);

function changeWord() {
  let word = split_words[Math.floor(Math.random()*split_words.length)];
  let verb = document.getElementById("verb");
  let noun = document.getElementById("noun");
  verb.innerHTML = word[1];
  noun.innerHTML = word[0];
}
