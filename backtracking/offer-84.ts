/**
 * 含有重复元素集合的全排列
 * 给定一个可包含重复数字的整数集合 nums ，按任意顺序 返回它所有不重复的全排列。
 */

function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const visited = new Array(nums.length).fill(false);
  const n = nums.length;

  function backtrack(track: number[]) {
    if (track.length === n) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

      track.push(nums[i]);
      visited[i] = true;
      backtrack(track);
      track.pop();
      visited[i] = false;
    }
  }
  nums.sort((a, b) => a - b);
  backtrack([]);
  return res;
}
