/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var hashMap = new Map();
  var result = [];
  for (var str of strs) {
      var hashKey = hashFn(str);
      var group = hashMap.get(hashKey);
      if (!group) {
          group = [];
          result.push(group);
      }
      group.push(str);
      hashMap.set(hashKey, group);
  }
  return result;
};

function hashFn(str) {
  var charSet = new Array(26).fill(0);
  for (var ch of str) charSet[ch.charCodeAt(0) - 97]++;
  return charSet.join('');
}