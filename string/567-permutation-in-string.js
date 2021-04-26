/**
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // 滑动窗口
  let left = (right = 0);
  let window = {},
    need = {};
  let valid = 0;

  for (let char of s1) {
    need[char] = need[char] ? need[char] + 1 : 1;
  }
  let needLength = Object.keys(need).length;

  while (right < s2.length) {
    // [left, right)
    let char = s2[right++];

    if (need[char]) {
      // 更新窗口
      window[char] = window[char] ? window[char] + 1 : 1;
      if (window[char] === need[char]) valid++;
    }

    // console.log("window: [%d, %d)", left, right);

    // 长度满足 收缩窗口
    while (right - left >= s1.length) {
      // 满足条件
      if (valid === needLength) return true;
      let char = s2[left];
      left++;

      // 更新窗口
      if (need[char]) {
        if (window[char] === need[char]) valid--;
        window[char]--;
      }
    }
  }

  return false;
};
