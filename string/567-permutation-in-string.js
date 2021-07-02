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

// 滑动窗口 2
var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length;
  if (n > m) return false;

  const cnt1 = new Array(26).fill(0);
  const cnt2 = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    cnt1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  if (cnt1.toString() === cnt2.toString()) return true;

  for (let i = n; i < m; i++) {
    cnt2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
    cnt2[s2[i - n].charCodeAt() - 'a'.charCodeAt()]--;

    if (cnt1.toString() === cnt2.toString()) return true;
  }

  return false;
};

// 滑动窗口 2 （优化版）
// 每次窗口滑动时，只变化了两个字符，却比较了 cnt1 和 cnt2 整个数组
// 可以用一个变量 diff 记录 cnt1 cnt2 不同值的个数
// 通过 diff 是否为0，判断cnt1 和 cnt2 是否相等
// 时间复杂度 O(字符集 + n + m) O(26 + n + m)
var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length;
  if (n > m) return false;

  const cnt = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    cnt[s1[i].charCodeAt() - 'a'.charCodeAt()]--;
    cnt[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  let diff = 0;

  for (let c of cnt) {
    if (c !== 0) diff++;
  }

  if (diff === 0) return true;

  for (let i = n; i < m; i++) {
    let x = s2[i].charCodeAt() - 'a'.charCodeAt(); // 进入的字符
    let y = s2[i - n].charCodeAt() - 'a'.charCodeAt(); // 移出的字符

    if (x === y) continue;

    // cnt[i]为0，表示没有差异
    // x进入前为0，进入后 diff + 1
    if (cnt[x] === 0) diff++;
    cnt[x]++;
    // x进入后为0，diff - 1
    if (cnt[x] === 0) diff--;

    // y移出前为0，移出后 diff + 1
    if (cnt[y] === 0) diff++;
    cnt[y]--;
    // y移出后为0，diff - 1
    if (cnt[y] === 0) diff--;

    if (diff === 0) return true;
  }

  return false;
};

// 双指针
// 时间复杂度 O(字符集 + n + m)
var checkInclusion = function (s1, s2) {
  const n = s1.length,
    m = s2.length;
  if (n > m) return false;

  const cnt = new Array(26).fill(0);
  const a = 'a'.charCodeAt();

  for (let i = 0; i < n; i++) {
    cnt[s1[i].charCodeAt() - a]--;
  }

  let left = 0;
  for (let right = 0; right < m; right++) {
    let x = s2[right].charCodeAt() - a;
    cnt[x]++;

    while (cnt[x] > 0) {
      cnt[s2[left].charCodeAt() - a]--;
      left++;
    }

    if (right - left + 1 === n) return true
  }

  return false;
};

console.log(checkInclusion('ab', 'eidbaoooo'));
