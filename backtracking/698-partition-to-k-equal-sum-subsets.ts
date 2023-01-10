/**
 * 划分为k个相等的子集
 * 给定一个整数数组 nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。
 */

{
  // 数字视角
  function canPartitionKSubsets(nums: number[], k: number): boolean {
    const n = nums.length;
    if (k > n) return false;
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % k !== 0) return false;

    const target = sum / k;
    const dfs = (index: number, track: number[]): boolean => {
      if (index === n) {
        for (let i = 0; i < k; i++) {
          if (track[i] !== target) return false;
        }
        return true;
      }

      for (let i = 0; i < k; i++) {
        if (track[i] + nums[index] > target) continue;
        track[i] += nums[index];
        if (dfs(index + 1, track)) {
          return true;
        }
        track[i] -= nums[index];
      }
      return false;
    };

    nums.sort((a, b) => b - a);
    return dfs(0, new Array(k).fill(0));
  }
}

{
  // 桶视角
  function canPartitionKSubsets(nums: number[], k: number): boolean {
    const n = nums.length;
    if (k > n) return false;
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % k !== 0) return false;

    const target = sum / k;
    const used = new Array(n).fill(false);
    const map = new Map<string, boolean>();

    const dfs = (index: number, start: number, sum: number): boolean => {
      if (index === k) return true;

      const key = used.toString();
      if (sum === target) {
        const res = dfs(index + 1, 0, 0);
        map.set(key, res);
        return res;
      }

      if (map.has(key)) return map.get(key)!;

      for (let i = start; i < n; i++) {
        if (used[i]) continue;
        if (sum + nums[i] > target) continue;

        used[i] = true;
        sum += nums[i];
        if (dfs(index, i + 1, sum)) {
          return true;
        }

        sum -= nums[i];
        used[i] = false;
      }

      return false;
    };

    return dfs(0, 0, 0);
  }
}

{
  // 位运算 (used >> i) & 1 表示 used[i]
  function canPartitionKSubsets(nums: number[], k: number): boolean {
    const n = nums.length;
    if (k > n) return false;
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % k !== 0) return false;

    const target = sum / k;
    let used = 0;
    const map = new Map<number, boolean>();

    const dfs = (index: number, start: number, sum: number): boolean => {
      if (index === k) return true;

      if (sum === target) {
        const res = dfs(index + 1, 0, 0);
        map.set(used, res);
        return res;
      }

      if (map.has(used)) return map.get(used)!;

      for (let i = start; i < n; i++) {
        if (((used >> i) & 1) === 1) continue;
        if (sum + nums[i] > target) continue;

        used |= 1 << i;
        sum += nums[i];
        if (dfs(index, i + 1, sum)) {
          return true;
        }

        sum -= nums[i];
        used ^= 1 << i;
      }

      return false;
    };

    return dfs(0, 0, 0);
  }
}
