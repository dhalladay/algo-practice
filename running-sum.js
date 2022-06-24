// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
//  var runningSum = function(nums) {
//   let arr = [];
// for(var i = 0; i < nums.length-1; i++ {
//   if (!arr) {
//     arr.push(nums[i]);
//   }
//   arr.reduce(
//     (previousValue, currentValue) => prev + cur);
//   )
//   }
// })
    
// };

// reduce a=accumulator (the initial value), c=current value, i-index, arr-array

const runningSum = nums => {
  nums.reduce((a,c,i,arr) => arr[i] += a)
  return nums
}