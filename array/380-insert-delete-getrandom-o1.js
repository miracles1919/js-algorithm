/**
 * 常数时间插入、删除和获取随机元素
 * 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。
 *  1.insert(val)：当元素 val 不存在时，向集合中插入该项。
 *  2.remove(val)：元素 val 存在时，从集合中移除该项。
 *  3.getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。
 *
 *
 * 数组常见操作时间复杂度
 *  随机访问 -> O(1)
 *  插入数值到数组 -> O(N)
 *  插入数值到数组最后 -> O(1)
 *  从数组删除数值 -> O(N)
 *  插入数值到数组最后 -> O(1)
 *
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.values = [];
  this.map = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map[val] !== undefined) return false;

  this.map[val] = this.values.length;
  this.values.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map[val] === undefined) return false;

  let index = this.map[val];
  let lastIndex = this.values.length - 1;

  // 交换最后一个元素和要删除的元素的位置
  let temp = this.values[lastIndex];
  this.values[lastIndex] = this.values[index];
  this.values[index] = temp;
  this.map[temp] = index

  delete this.map[val];
  this.values.pop();
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.values.length);
  return this.values[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
obj.insert(0);
obj.insert(1);
obj.remove(0);
obj.insert(2);
obj.remove(1);

console.log(obj.getRandom())
