/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  var charSet = new Array(26).fill(0);
  for (var ch of s) charSet[ch.charCodeAt(0) - 97]++;
  for (var ch of t) charSet[ch.charCodeAt(0) - 97]--;
  for (var chCount of charSet) if (chCount !== 0) return false;
  return true;
};