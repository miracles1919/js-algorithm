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

console.log(lengthOfLongestSubstring('abcabcbb'));
