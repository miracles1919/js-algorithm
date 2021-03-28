/**
 * 鸡蛋掉落
 * 给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。
 * 已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。
 * 每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。
 * 如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。
 * 请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？
 *
 *
 * @param {number} k
 * @param {number} n
 * @return {number}
 */

// 时间复杂度 O(kn^2)
var superEggDrop = function (k, n) {
  const cache = new Map();

  // dp表示第k个鸡蛋，n层楼的最小操作次数
  function dp(k, n) {
    if (k === 1) return n;
    if (n === 0) return 0;

    if (cache.get(`${k}${n}`)) return cache.get(`${k}${n}`);

    let res = Infinity;
    for (let i = 1; i <= n; i++) {
      res = Math.min(
        res,
        // 最坏情况
        Math.max(
          dp(k - 1, i - 1), // 鸡蛋碎了
          dp(k, n - i) // 鸡蛋没碎
        ) + 1
      );
    }

    cache.set(`${k}${n}`, res);
    return res;
  }
  return dp(k, n);
};

// 二分搜索 时间复杂度 O(kn*logn)
var superEggDrop = function (k, n) {
  const cache = new Map();

  // dp表示第k个鸡蛋，n层楼的最小操作次数
  function dp(k, n) {
    if (k === 1) return n;
    if (n === 0) return 0;

    if (cache.get(`${k}${n}`)) return cache.get(`${k}${n}`);

    let res = Infinity;
    let i = 1,
      j = n;

    while (i <= j) {
      let mid = (i + j) >> 1;
      let broken = dp(k - 1, mid - 1);
      let notBroken = dp(k, n - mid);

      if (broken > notBroken) {
        j = mid - 1;
        res = Math.min(res, broken + 1);
      } else {
        i = mid + 1;
        res = Math.min(res, notBroken + 1);
      }
    }

    cache.set(`${k}${n}`, res);
    return res;
  }
  return dp(k, n);
};

// 重新定义状态转移方程 时间复杂度 O(kn)
var superEggDrop = function (k, n) {
  // dp[k][m] = n 表示 k个鸡蛋 最多尝试m次 可以测试的楼层为n
  let dp = [];
  for (let i = 0; i <= k; i++) {
    dp[i] = [];
    dp[i][0] = 0;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = 0;
  }

  let m = 0;
  while (dp[k][m] < n) {
    m++;
    for (let i = 1; i <= k; i++) {
      dp[i][m] =
        dp[i][m - 1] + //没碎
        dp[i - 1][m - 1] + //碎了
        1;
    }
  }
  return m;
};

// 状态压缩
var superEggDrop = function (k, n) {
  let dp = [];
  for (let i = 0; i <= k; i++) {
    dp[i] = 0;
  }

  let m = 0;
  while (dp[k] < n) {
    m++;
    for (let i = k; i > 0; i--) {
      dp[i] = dp[i] + dp[i - 1] + 1;
    }
  }
  return m;
};

// console.log(superEggDrop(3, 26))
console.log(superEggDrop(4, 5000));
