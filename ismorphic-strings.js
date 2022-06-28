// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// ideas

// using a hash map or object loop through assign numerical value to letters in order they appear, compare the resulting maps to see if the are equal
// using a map, compare s to t by splitting up into individual bits. If the length is not equal you know it's false already. next you begin the map.
// assign s[0]:t[0] to the hash map. on the next loop check the map, if the letter in s exists (key) compare the value of t(value). if they are the same move to the next
// if it's not there add it.

var isIsomorphic = function(s, t) {
  // compare the length of the s and t
  // if(s.length === t.length) {
    let mapST = new Map();

    for (var i = 0; i <= s.length -1; i++) {
      if (mapST.has(s[i])) {
        console.log(mapST[i], mapST)
      }
      mapST.set(s[i], t[i])
    }
//   // }

// return false

};

isIsomorphic("foo", "bar")