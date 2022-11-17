function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  function backtrack(track: number[], sum: number, start: number) {
    if (target === sum) {
      res.push([...track]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      track.push(candidates[i]);
      backtrack(track, sum + candidates[i], i + 1);
      track.pop();
    }
  }

  candidates.sort((a, b) => a - b);
  backtrack([], 0, 0);
  return res;
}
