/**
 * 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
 * 返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。
 *
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  // 二分法
  let sum = weights.reduce((a, b) => a + b, 0);
  let max = Math.max(...weights);
  let left = max,
    right = sum + 1;

  let canFinish = (weights, D, cap) => {
    let i = 0;
    for (let d = 0; d < D; d++) {
      let dayCap = 0;

      while ((dayCap += weights[i]) <= cap) {
        i++;
        if (i === weights.length) return true;
      }
    }
    return false;
  };

   while(left < right) {
    let mid = left + ((right - left) >> 1);
    if (canFinish(weights, D, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
   }
  return left;
};
