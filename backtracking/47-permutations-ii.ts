/**
 * 全排列 II
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 */

{
  function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = [];
    const used: boolean[] = [];
    nums.sort((a, b) => a - b);

    const dfs = (track: number[]) => {
      if (track.length === nums.length) {
        res.push([...track]);
        return;
      }

      for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
        track.push(nums[i]);
        used[i] = true;
        dfs(track);
        track.pop();
        used[i] = false;
      }
    };

    dfs([]);
    return res;
  }
}
