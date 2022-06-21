// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// first attempt - nested loops - result = time limit exceeded. 

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



let nums = [2,7,11,15], target = 9;

twoSum(nums, target);