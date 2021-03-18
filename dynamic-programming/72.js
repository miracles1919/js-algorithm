/**
 * 编辑距离
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 你可以对一个单词进行如下三种操作：
 *  插入一个字符
 *  删除一个字符
 *  替换一个字符
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const map = new Map();

  // 返回word1[0...i] 和 word2[0...j]的最小编辑距离
  var dp = function (i, j) {
    if (map.get(`${i},${j}`)) return map.get(`${i},${j}`);

    // base case
    if (i === -1) return j + 1;
    if (j === -1) return i + 1;

    let res;
    if (word1[i] === word2[j]) res = dp(i - 1, j - 1);
    else
      res = Math.min(
        dp(i, j - 1) + 1, //插入
        dp(i - 1, j) + 1, //删除
        dp(i - 1, j - 1) + 1 // 替换
      );

    map.set(`${i},${j}`, res);

    return res;
  };

  return dp(word1.length, word2.length);
};

// DP table
var minDistance = function (word1, word2) {
  let m = word1.length,
    n = word2.length;

  // dp[i][j] 返回word1[0...i] 和 word2[0...j]的最小编辑距离
  const dp = [[0]];

  for (let i = 1; i <= m; i++) {
    dp[i] = [];
    dp[i][0] = i;
  }
  for (let i = 1; i <= n; i++) dp[0][i] = i;

  // 自底向上
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1))
        dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = Math.min(
          dp[i][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i - 1][j - 1] + 1
        );
    }
  }

  return dp[m][n];
};

// 记录具体操作
var minDistance = function (word1, word2) {
  let m = word1.length,
    n = word2.length;

  /**
   * node[][] dp
   * 
   * node {
   *  int val
   *  int choice 
   *    0 不做操作
   *    1 插入
   *    2 删除
   *    3 替换
   * }
   */
  const dp = [[{ val: 0, choice: 0 }]];

  for (let i = 1; i <= m; i++) {
    dp[i] = [];
    dp[i][0] = { val: i };
  }
  for (let i = 1; i <= n; i++) dp[0][i] = { val: i };

  // 自底向上
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = {
          val: dp[i - 1][j - 1].val,
          choice: 0
        };
      }
      else {

        let obj = {
          [dp[i][j - 1].val]: 1,
          [dp[i - 1][j].val]: 2,
          [dp[i - 1][j - 1].val]: 3,
        }

        let list = Object.keys(obj).sort((a, b) => a - b)

        list.sort((a,b) => a.val - b.val)

        // console.log('11',list[0], obj, obj[list[0]])

        dp[i][j] = {
          val: parseInt(list[0]) + 1,
          choice: obj[list[0]]
        }
      }
        
    }
  }

  return dp[m][n];
};

console.log(minDistance("horse", "ros"));
