/**
 * 简化路径
 * 给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。
 * /home/ => /home
 * /../ => /
 * /home//foo/ => /home/foo
 * /a/./b/../../c/ => /c
 *
 * @param {string} path
 * @return {string}
 */

// 栈
var simplifyPath = function (path) {
  const arr = path.split('/').filter((item) => item); // 过滤 ''
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    let c = arr[i]
    if (c !== '.' && c !== '..') {
      stack.push(c)
    } else if (c === '..') {
      stack.pop()
    }
  }

  return '/' + stack.join('/')
};

console.log(simplifyPath('/a/./b/../../c/'))
console.log(simplifyPath('/home//foo/'))
