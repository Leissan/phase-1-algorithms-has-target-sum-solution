function hasTargetSum(array, target){
//Iterate through each number in the array
for (let i = 0; i < array.length; i++) {
  //n steps  for the array
  //for the current numebr, identify complement that adds to the target (comp=target - current numebr)
  const complement = target - array[i]
  //iterate through the rest of the array
  for (let j = i + 1; j < array.length; j++){
    // loop inside the loop, so n * n steps
   //check if any numebr is a compliment
   //if so, return true
    if (array[j] === complement) return true
  }
}
//if i reach the end of the array, and no 2 numebrs addup to the target sum, return false
return false
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
