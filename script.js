function lastCharacter(word) {
  let output = 0;
  if (typeof word == "string") {
    output = word[word.length - 1];
  } else {
    output = "the string has zero length";
  }
  return output;
}
console.log(lastCharacter("hehehe"));
console.log(lastCharacter("hahaha"));
