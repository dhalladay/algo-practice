// A binary search, as opposed to a linear search, works like how you might search through a dictionary.
// rather than look at each page, you open to a random page in the middle. If the word you're looking for comes
// after the page you're looking for, you no longer have to look at the pages before. You repeat this over and 
// over again until you reach the word your looking for. Of course, for this to work in js, the array must be sorted. 
// A binary search will split a *sorted* array down the middle. It then creates two new conditions for the search. The first
// condition is from the start number to the middle number, the next is the middle number to the end. If it fits the first
// condition, then the middle number now becomes the end number and the process starts again. If it fits the second, then
// the middle number becomes the start number and the process goes again until you reach your number. 

// **recursive **

// in the recursive version, you need start and end provided.

function recursiveSearch(arr, x, start, end) {

  // if the start is greater than the end, then the list isn't sorted and binary search will fail
  if (start > end) return false;

  // you're looking at the index, so you need to fin the middle index
  let mid = Math.floor((start + end) / 2);

  // compare the value of the middle to x (what you're searching for). If it equals the midpoint, return true
  if (arr[mid] === x) return true;

  // check to see if x is greater than or less than the middle index value, 
  // then based on that call the recurvsive search again 

  if (arr[mid] > x)
    return recursiveSearch(arr, x, start, mid - 1);

  else
    return recursiveSearch(arr, x, mid + 1, end)
}

let array = [1, 3, 5, 7, 8, 9, 10, 11]
recursiveSearch(array, 6, 0, array.length - 1);


// **iterative**

// in the iterative approach, you do not need the start and end provided. 

function iterativeSearch(arr, x) {

  // Start will always be 0, end will always be length-1 to start off with
  let start = 0, end = arr.length - 1;

  // set condition so that this will loop as long as the start is less than or equal to the end 
  // (because we keep redeclaring the start and end variables it will eventually meet this criteria)
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === x) return true;

    // if x is greater than the mid point found, declare start variable to be mid +1
    else if (arr[mid] < x)
      start = mid + 1;
    else
      end = mid - 1;
  }

  return false;

}

let itArray = [1, 3, 5, 7, 8, 9, 10, 11]
iterativeSearch(itArray, 6);
