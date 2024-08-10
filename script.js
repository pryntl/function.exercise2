//the function base code.
function lastCharacter(word) {
  //made a variable to show the final result.
  let output = 0;
  //if our word is string, we can simply use this method to show the last letter of the word.(we minus one cause the actual lenght starts from 0 instead of 1. 
  if (typeof word == "string") {
    output = word[word.length - 1];
  } 
  //if the word isn't a string, then it doesn't have any last letter for us to show.
  else {
    output = "the string has zero length";
  }
  //at the end returning the main var.
  return output;
}
//testing.
console.log(lastCharacter("hehehe"));
console.log(lastCharacter("hahaha"));
