function ListNode(key, val, next) {
  this.key = key === undefined ? null : key;
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class SingleLinkedList {
  constructor(head) {
    this.head = head;
    this.length = 0;
  }

  get(key) {
    let head = this.head;
    let prev = new ListNode(null, 0, head);
    let dummy = prev;
    while (head !== null) {
      if (head.key == key) {
        prev.next = head.next;
        head.next = dummy.next;
        this.head = head;
        return head;
      }

      prev = prev.next;
      head = head.next;
    }
    return null;
  }

  // 插入头部
  add(node) {
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.head;
  }

  // 删除node节点
  remove(node) {
    let head = this.head;
    let prev = new ListNode(null, 0, head);
    let dummy = prev;
    while (head !== null) {
      if (head.key == node.key) {
        prev.next = head.next;
        this.length--;
        break;
      }

      prev = prev.next;
      head = head.next;
    }
    this.head = dummy.next;
  }

  removeLast() {
    let head = this.head;
    let prev = new ListNode(null, 0, head);
    let dummy = prev;
    while (head.next !== null) {
      head = head.next;
      prev = prev.next;
    }
    // 删除尾节点，插入新数据
    prev.next = null;
    this.head = dummy.next;
    this.length--;
  }
}

module.exports = {
  SingleLinkedList,
  ListNode
};
