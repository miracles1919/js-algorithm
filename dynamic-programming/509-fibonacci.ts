/**
 * 509. 斐波那契数
 */
// 递归 时间复杂度 O(n)
// function fib(n: number): number {
//   const memo = new Array(n + 1).fill(0);

//   function helper(n: number): number {
//     if (n === 0 || n === 1) return n;
//     if (memo[n] !== 0) return memo[n];
//     memo[n] = helper(n - 1) + helper(n - 2);
//     return memo[n];
//   }

//   return helper(n);
// }

// function fib(n: number): number {
//   const dp = new Array(n + 1);
//   dp[0] = 0;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// }

function fib(n: number): number {
  if (n === 0 || n === 1) return n;
  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
