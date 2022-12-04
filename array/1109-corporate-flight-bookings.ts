/**
 * 航班预订统计
 */

function corpFlightBookings(bookings: number[][], n: number): number[] {
  const diffs = new Array(n).fill(0);

  for (const booking of bookings) {
    const [i, j, seats] = booking;

    diffs[i - 1] += seats;
    if (j < n) {
      diffs[j] -= seats;
    }
  }

  const res = [diffs[0]];
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] + diffs[i];
  }

  return res;
}
