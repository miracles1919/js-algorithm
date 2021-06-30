/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""
 * 
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

   if (!strs.length) return ''

   if (strs.length == 1) return strs[0]

   if (strs.length == 2) {
     let s1 = strs[0]
     let s2 = strs[1]
     const len = Math.max(s1.length, s2.length)
     let i = 0

     while(i < len && s1[i] === s2[i]) {
       i++
     }
     return s1.substring(0, i)
   }

   let prefix = strs[0]
   for (let i = 1; i < strs.length; i++) {
     prefix = longestCommonPrefix([prefix, strs[i]])
   }

   return prefix
};

// 逐位比较
var longestCommonPrefix = function(strs) {

  if (!strs.length) return ''

  if (strs.length == 1) return strs[0]

  let len = strs.reduce((a, b) => Math.min(a, b.length) , Infinity)
  let i = 0

  let prefix = strs[0]
  while(i <= len && strs.filter(s => s.substring(0, i) === prefix.substring(0, i)).length === strs.length) {
    i++
  }

  return prefix.substring(0, i - 1)
}

// 逐位比较 2
var longestCommonPrefix = function(strs) {

  if (!strs.length) return ''
  let prefix = ''

  // 位数
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== strs[0][j]) return prefix
    }
    prefix += strs[0][j]
  }

  return prefix
}

// 分治、归并
var longestCommonPrefix = function(strs) {

  if (!strs.length) return ''

  function mergeLcp(strs) {
    const m = strs.length
    if (m === 1) {
      return strs[0]
    }

    let mid = m >> 1
    return lcp(mergeLcp(strs.slice(0, mid)), mergeLcp(strs.slice(mid, m)))
  }

  function lcp(s1, s2) {
    const len = Math.max(s1.length, s2.length)
     let i = 0

     while(i < len && s1[i] === s2[i]) {
       i++
     }
     return s1.substring(0, i)
  }

  return mergeLcp(strs)

}

// TODO trie树
// https://leetcode-cn.com/problems/longest-common-prefix/solution/tu-jie-leetcodezui-chang-gong-gong-qian-zhui-lcp-b/

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["ab", "a"]))