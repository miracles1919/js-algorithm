function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  function backtrack(track: number[], sum: number, start: number) {
    if (target === sum) {
      res.push([...track]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      track.push(candidates[i]);
      backtrack(track, sum + candidates[i], i);
      track.pop();
    }
  }

  backtrack([], 0, 0);
  return res;
}

// function combinationSum(candidates: number[], target: number): number[][] {
//   const res: number[][] = [];

//   function backtrack(track: number[], target: number, i: number) {
//     if (target === 0) {
//       res.push([...track]);
//       return;
//     }

//     if (i === candidates.length) return;

//     backtrack(track, target, i + 1);
//     if (target - candidates[i] >= 0) {
//       backtrack([...track, candidates[i]], target - candidates[i], i);
//     }
//   }

//   backtrack([], target, 0);
//   return res;
// }
