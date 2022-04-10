/**
 * 拼车
 *
 * 车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）
 * 给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，接他们和放他们的位置分别是 fromi 和 toi 。
 * 这些位置是从汽车的初始位置向东的公里数。
 * 当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。
 *
 */

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const maxLen = 1001;
  const diff = new Array(maxLen).fill(0);
  trips.forEach((item) => {
    const [num, form, to] = item;
    diff[form] += num;
    if (to < maxLen) {
      diff[to - 1 + 1] -= num;
    }
  });

  const res = new Array(diff.length).fill(0);
  res[0] = diff[0];
  for (let i = 1; i < res.length; i++) {
    res[i] = res[i - 1] + diff[i];
  }

  for (let i = 0; i < res.length; i++) {
    if (res[i] > capacity) {
      return false;
    }
  }

  return res.filter((num) => num > capacity).length <= 0;
};
