/**
 * LRU 缓存机制 (最近最少使用)
 * @param {number} capacity
 */

// 基于 map keys的有序性
 var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map()
};

LRUCache.prototype.get = function (key) {
  const map = this.map
  if (map.has(key)) {
    const val = map.get(key)
    map.delete(key)
    map.set(key, val)
    return val
  }

  return -1
}

LRUCache.prototype.put = function (key, value) {
  const map = this.map

  if (this.get(key) === -1) {
    if (map.size >= this.capacity) {
      map.delete(map.keys().next().value)
    }
  }

  map.set(key, value)
}