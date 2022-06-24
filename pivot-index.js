// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.


// ideas: 
// 1. loop through numbers using i as index
// 2. Sum all values for index values less than i
// 3. sum all values for index values greater than i
// 4. do not include i
// 5. if less = right return i. If not, move on to next i. 
// 6. if sums never equal, return -1
// greater than I. 


var pivotIndex = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    leftSum = [];
    rightSum = [];
    for (var j = 0; j < i; j++) {
      leftSum.push(nums[j]);
    };
    for (var k = i + 1; k < nums.length; k++) {
      rightSum.push(nums[k]);
    }
    var left = leftSum.reduce((partialSum, a) => partialSum + a, 0);
    var right = rightSum.reduce((partialSum, a) => partialSum + a, 0);


    if (left === right) {
      return i;
    } else if (i === nums.length) {
      return -1;
    }
  }

};

var nums = [1,2,3]
pivotIndex(nums);