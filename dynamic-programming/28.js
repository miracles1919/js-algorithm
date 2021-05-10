/**
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  return haystack.indexOf(needle);
};

// KMP
// https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484731&idx=2&sn=d9d6b24c7f94d5e43e08666e82251984&chksm=9bd7fb33aca0722548580dd27eb49880dc126ef87aeefedc33aa0f754f54691af6b09b41f45f&scene=21#wechat_redirect
class KMP {
  dp = [];

  constructor(pat) {
    this.pat = pat;
    this.init();
  }

  init() {
    const m = this.pat.length;
    const dp = [];
    for (let i = 0; i < m; i++) {
      dp[i] = [];
      for (let c = 0; c < 128; c++) {
        dp[i][c] = 0;
      }
    }

    dp[0][this.pat.charCodeAt(0)] = 1;

    let x = 0;
    for (let j = 1; j < m; j++) {
      for (let c = 0; c < 128; c++) {
        dp[j][c] = dp[x][c];
      }

      let char = this.pat.charCodeAt(j)
      dp[j][char] = j + 1;
      x = dp[x][char];
    }

    this.dp = dp;
  }

  search(txt) {
    const m = this.pat.length;
    const n = txt.length;

    let j = 0;
    for (let i = 0; i < n; i++) {
      j = this.dp[j][txt.charCodeAt(i)];
      if (j === m) {
        return i - m + 1;
      }
    }

    return -1;
  }
}

let kmp = new KMP("issipi");
console.log(kmp.search("mississippi"));

let kmp2 = new KMP("ll");
console.log(kmp2.search("hello"));

// "mississippi"
// "issipi"
