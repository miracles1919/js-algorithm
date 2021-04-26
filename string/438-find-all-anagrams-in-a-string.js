/**
 * 找到字符串中所有字母异位词
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 *
 * 说明：
 *  字母异位词指字母相同，但排列不同的字符串。
 *  不考虑答案输出的顺序。
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 滑动窗口
  let left = (right = 0);
  let window = {},
    need = {};
  let valid = 0;
  let res = [];

  for (let char of p) {
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
    while (right - left >= p.length) {
      if (valid === needLength) {
        res.push(left);
      }

      let char = s[left];
      left++;

      // 更新窗口
      if (need[char]) {
        if (window[char] === need[char]) valid--;
        window[char]--;
      }
    }
  }

  return res;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
