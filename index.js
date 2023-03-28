function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    const endChar = word[j];
    const startChar = word[i];

    if (startChar !== endChar) {
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here
*/

/*
  For this 2nd example solution, can compare each respective beginning and ending letter until reaching the middle of the passed in word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
