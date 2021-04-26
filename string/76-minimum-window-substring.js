/**
 * 最小覆盖子串
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""。
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 滑动窗口
  let left = (right = 0);
  let window = {},
    need = {};
  let valid = 0;
  let min = '';

  for (let char of t) {
    need[char] = need[char] ? need[char] + 1 : 1;
  }
  let needLength = Object.keys(need).length;

  while (right < s.length) {
    // [left, right)
    let char = s[right++];

    if (need[char]) {
      // 更新窗口
      window[char] = window[char] ? window[char] + 1 : 1;
      if (window[char] === need[char]) valid++;
    }

    // console.log("window: [%d, %d)", left, right);

    // 满足条件下 收缩窗口
    while (valid === needLength) {
      let str = s.substring(left, right);

      // console.log(str)
      if (min === '' || str.length < min.length) min = str;

      let char = s[left];
      left++;

      // 更新窗口
      if (need[char]) {
        if (window[char] === need[char]) valid--;
        window[char]--;
      }
    }
  }

  return min;
};


console.log(minWindow("ADOBECODEBANC", "ABC"))
console.log(minWindow("abc", "b"))