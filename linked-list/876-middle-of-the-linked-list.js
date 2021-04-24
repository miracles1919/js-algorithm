/**
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // 快慢指针
  let slow = (fast = head);

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

var middleNode = function (head) {
  let i = j = 0, temp = head;

  while (temp !== null) {
    i++
    temp = temp.next
  }

  while (head !== null) {
    if (j++ === i >> 1) return head
    head = head.next
  }

  return head
};

// 将节点放在数组中 取中间值 这里就不做了