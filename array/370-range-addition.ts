/**
 * 区间加法
 */

function getModifiedArray(length: number, updates: number[][]): number[] {
  const diffs = new Array(length).fill(0);
  for (const update of updates) {
    const [i, j, val] = update;

    diffs[i] += val;
    if (j + 1 < length) {
      diffs[j + 1] -= val;
    }
  }

  const res = [diffs[0]];
  for (let i = 1; i < length; i++) {
    res[i] = res[i - 1] + diffs[i];
  }

  return res;
}
