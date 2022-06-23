// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// @param {number[]} nums
// @param {number} target
// @return {number[]}

// first attempt - nested loops - result = provided correct results, but time limit exceeded. 

// var twoSum = function (nums, target) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length; j++) {
//       while (i != j) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//   }
// }

// hash-mapping

// for the has mapping method, you will create an empty object and store the key value pairs from the nums array in your obj
// the first time you reach a correct index for a value that adds up to the target, it's corresponding value/index pair
// will not be in the map so instead that value/index key value pair will be added to the map for later use. Then, when your
// function reaches the second key value pair, it will find the first value and will be able to determine that the two
// values add up to the target number and both will be included in the output. 

var twoSumMap = function(nums, target) {
  // create empty object, requires key value pair of value : index
  let map = {};

  for(let i = 0; i < nums.length; i++) {
    // n is the value of nums at index i
    const n = nums[i];

    // this will check the map object. Because we add the value as the key and the index as the value in the map object,
    // this is looking up to see if the value of target-n exists in the map. This will only be the case when we reach
    // the second value that adds up to the target.
    if(map[target - n] !== undefined) {
      // once we find both values, return the index value from map object as the first index and i as the second.
      return [map[target-n], i];
    }
    // if the combined values are both not present, add the key value pair (n is value, i is index) to the map object
    map[n]=i
  }

}


let nums = [2,7,11,15], target = 9;

twoSum(nums, target);