/**
 * 单词拆分
 * 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * 说明：
 *  拆分时可以重复使用字典中的单词。
 *  你可以假设字典中没有重复的单词。
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // dp[i] 表示前i个元素 是否可以被空格拆分为一个或多个在字典中出现的单词
  let dp = [true];

  let n = s.length;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      let word = wordDict[j];

      if (i >= word.length && s.substring(i - word.length, i) == word) {

        // if (dp[i - word.length]) {
        //   console.log(i, i - word.length)
        // }
        
        dp[i] = dp[i] || dp[i - word.length];
      }
    }
  }

  return dp[n] || false;
};

// console.log(wordBreak("leetcode", ["leet","code"]))
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))


