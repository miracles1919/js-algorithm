/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口
  let left = (right = 0);
  let window = {};
  let max = 0;

  while (right < s.length) {
    // [left, right)
    let char = s[right++];

    // 更新窗口
    window[char] = window[char] ? window[char] + 1 : 1;

    // 满足条件下 收缩窗口
    while (window[char] > 1) {
      let char = s[left++];

      // 更新窗口
      window[char]--;
    }

    max = Math.max(max, right - left);
  }

  return max;
};

/**
 * 思路：
 *  map 存在字符:
 *   1. 当前字符包含在有效子串中，例如：abca，遍历到第二个a，更新 left = map('a') + 1，有效子串更新为bca
 *   2. 当前字符不包含在有效子串中，例如 abba，
 *     遍历到第二个b，更新 left =  map('b') + 1，有效子串更新为b
 *     遍历到第二个a，更新 left =  max(left, map('a') + 1)，有效子串更新为ba
 *
 *  map 不存在字符， 此时不重复子串长度 i - left + 1
 */
var lengthOfLongestSubstring = function (s) {
  const n = s.length;
  const map = {};
  let left = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (map.hasOwnProperty(c)) {
      left = Math.max(left, map[c] + 1);
    }

    map[c] = i;
    max = Math.max(max, i - left + 1);
  }

  return max;
};

var lengthOfLongestSubstring = function (s) {
  const n = s.length;
  // 因为本题中字符串只含有英文字母，符号和数字，所以可以使用数组来代替哈希表，提高效率
  const arr = [];
  let left = (right = 0);
  let max = 0;

  while (right < n) {
    let a = s.charCodeAt(right);

    if (arr[a] === undefined) {
      arr[a] = 0;
    }
    arr[a]++;

    while (arr[a] > 1) {
      arr[s.charCodeAt(left++)]--;
    }

    max = Math.max(max, right - left + 1);
    right++
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
