const wordcut = require("wordcut");
wordcut.init();

const split_words = words
  .map(w => wordcut.cut(w).split("|"))
  .filter(a => a.length == 2);

function changeWord() {
  let found = false;
  while(!found) {
    let word = split_words[Math.floor(Math.random()*split_words.length)];
    console.log(word[0] + ": " + nouns.indexOf(word[0]) + " & " + verbs.indexOf(word[0]));
    console.log(word[1] + ": " + nouns.indexOf(word[1]) + " & " + verbs.indexOf(word[1]));
    if (nouns.indexOf(word[0]) > -1 && verbs.indexOf(word[1]) > -1) {
      let noun = document.getElementById("noun");
      let verb = document.getElementById("verb");
      noun.innerHTML = word[0];
      verb.innerHTML = word[1];
      found = true;
    }
  }
}
