/**
 * 黑名单中的随机数
 *
 * 给定一个包含 [0，n ) 中独特的整数的黑名单 B，写一个函数从 [ 0，n ) 中返回一个不在 B 中的随机整数。
 * 对它进行优化使其尽量少调用系统方法 Math.random() 。
 *
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  this.len = 0;
  this.map = {};

  this.len = n - blacklist.length;

  // 黑名单映射
  for (let b of blacklist) {
    this.map[b] = true
  }

  let last = n - 1;
  for (let b of blacklist) {
    if (b >= this.len) continue;

    // 跳过黑名单中的数字
    while (this.map[last] === true) {
      last--;
    }
    this.map[b] = last;
    last--;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  let randomIndex = Math.floor(Math.random() * this.len);

  if (this.map[randomIndex] !== undefined) {
    return this.map[randomIndex];
  }

  return randomIndex;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

var obj = new Solution(1000000000, [640145908]);
console.log(obj.pick());
// console.log(obj.pick());
// console.log(obj.pick());
