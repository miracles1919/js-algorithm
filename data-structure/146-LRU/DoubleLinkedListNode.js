function ListNode(key, val, next, prev) {
  this.key = key === undefined ? null : key;
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.prev = prev === undefined ? null : prev;
}

class DoubleLinkedListNode {
  constructor(head) {
    this.head = head;
    this.tail = head;
    this.length = 0;
  }

  add(node) {
    node.next = this.head;
    // 是否添加第一个节点
    if (this.head !== null) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.length++;
    return this.head;
  }

  remove(node) {
    if (node.prev === null) {
      // 第一个节点，更新头部
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (node.next == null) {
      // 最后一个节点，更新尾部
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }

    node.prev = null;
    node.next = null;
    this.length--;
    return node;
  }

  removeLast() {
    return this.remove(this.tail);
  }
}

module.exports = {
  DoubleLinkedListNode,
  ListNode,
};
