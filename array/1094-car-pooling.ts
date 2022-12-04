/**
 * 拼车
 */

function carPooling(trips: number[][], capacity: number): boolean {
  const n = 1001;
  const diffs = new Array(n).fill(0);

  for (const trip of trips) {
    const [val, i, j] = trip;
    diffs[i] += val;
    if (j + 1 - 1 < n) {
      diffs[j + 1 - 1] -= val;
    }
  }

  if (diffs[0] > capacity) return false;

  const res = [diffs[0]];
  for (let i = 1; i < diffs.length; i++) {
    res[i] = res[i - 1] + diffs[i];
    if (res[i] > capacity) return false;
  }

  return true;
}
