function isPalindrome(word) {
  // Write your algorithm here
  //in here we will convert a string to an array
  
 
 
 const arrayWord = word.split(' ');

 const reverseArrayWords = arrayWord.reverse();
  const reverseWord = reverseArrayWords.join(' ');

  return reverseWord === word;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
//if (require.main === module) {
  // add your own custom tests in here
 // console.log("Expecting: true");
  //console.log("=>", isPalindrome("racecar"));

 // console.log("");

 // console.log("Expecting: false");
 // console.log("=>", isPalindrome("robot"));

 
//}

module.exports = isPalindrome;
