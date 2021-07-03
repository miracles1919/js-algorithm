/**
 * 翻转字符串里的单词
 * 给你一个字符串 s ，逐个翻转字符串中的所有 单词 。
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 * 请你返回一个翻转 s 中单词顺序并用单个空格相连的字符串。
 * 
 * 进阶： 请尝试使用 O(1) 额外空间复杂度的原地解法。
 * 
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ')
};


var reverseWords = function(s) {
  let left = 0, right = s.length - 1

  while(s[left] == ' ' && left < right) {
    left ++
  }

  while(s[right] == ' ' && left < right) {
    right --
  }

  let res = [], word = ''
  while(left <= right) {
    let c = s[left]

    if (word.length && c === ' ') {
      res.unshift(word)
      word = ''
    } else if(c !== ' ') {
      word += c
    }

    left ++
  }

  res.unshift(word)

  return res.join(' ')
}

console.log(reverseWords('the sky is blue'))