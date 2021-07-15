const { SingleLinkedList, ListNode } = require('./SingleLinkedList');

/**
 * LRU 缓存机制 (最近最少使用)
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.link = new SingleLinkedList(null);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.link.get(key);

  if (node) return node.val;

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const head = this.link.get(key);
  if (head) {
    // 如果数据存在，将其从原来的位置删除，再插入链表头部
    head.val = value;
    this.link.remove(head);
    this.link.add(head);
  } else {
    // 如果不存在
    // 缓存未满，插入链表头部
    // 缓存已满，删除尾节点，插入链表头部

    if (this.capacity <= this.link.length) {
      this.link.removeLast();
    }

    this.link.add(new ListNode(key, value));
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// var obj = new LRUCache(1);
// obj.put(2, 1);
// console.log(obj.get(2))
// obj.put(3, 2);
// console.log(obj.get(2))
// console.log(obj.get(3))

var obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1));
obj.put(3, 3);
console.log(obj.get(2));
obj.put(4, 4);
console.log(obj.get(1));
console.log(obj.get(3));
console.log(obj.get(4));

// var obj = new LRUCache(2);
// obj.put(2, 1)
// obj.put(2, 2)
// console.log(obj.get(2))
// obj.put(1, 1)
// obj.put(4, 1)
// console.log(obj.get(2))
