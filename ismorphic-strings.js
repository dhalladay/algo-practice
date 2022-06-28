// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// ideas

// using a hash map or object loop through assign numerical value to letters in order they appear, compare the resulting maps to see if the are equal
// using a map, compare s to t by splitting up into individual bits. If the length is not equal you know it's false already. next you begin the map.
// assign s[0]:t[0] to the hash map. on the next loop check the map, if the letter in s exists (key) compare the value of t(value). if they are the same move to the next
// if it's not there add it.

// var isIsomorphic = function (s, t) {
//   const mapST = new Map();

//   for (var i = 0; i <= s.length - 1; i++) {

//     if (mapST.has(s[i]) && mapST.get(s[i]) != t[i] || mapST.values(t[i])) {
//       return false
//     }
//     mapST.set(s[i], t[i])
//   }
//   return true
// };

// isIsomorphic("badc", "baba")

// the above failed on badc baba because it does not force unique values of key indicators(s). I believe I need to add Set somehow.

// var isIsomorphic = function(s, t) {
//   const mapST = new Map();
//   const setST = new Set();

//   for (var i = 0; i <= s.length - 1; i++) {

//     if (mapST.has(s[i])) {
//       if (mapST.get(s[i]) != t[i]) {
//         return false
//       } else if (setST.has(t[i])) {
//         return false
//       }
//       mapST.set(s[i], t[i]);
//       setST.add(t[i]);
//     }
//   }
//   return true
// };

// isIsomorphic("foo", "bar")

// failed again, something in the if else logic isn't working right. 

var isIsomorphic = function (s, t) {
  const mapST = new Map();
  const setST = new Set();

  for (var i = 0; i <= s.length - 1; i++) {

    if (mapST.has(s[i])) {
      if (mapST.get(s[i]) !== t[i]) return false
    } else {
      if (setST.has(t[i])) return false
      mapST.set(s[i], t[i]);
      setST.add(t[i]);
    }
  }
  return true
};

isIsomorphic("foo", "bar")