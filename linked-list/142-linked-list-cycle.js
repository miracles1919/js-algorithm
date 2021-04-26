/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
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
var detectCycle = function (head) {
  // 快慢指针
  if (head === null || head.next === null) return null;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) return null;

    slow = slow.next;
    fast = fast.next.next;
  }

  // 相遇时，假设slow走了k步，那么fast走了2k步，fast - slow + 1 = k + 1 (环的长度) (fast 从head.next 开始)
  // 设相遇点和入环起点的距离为m，那么环的起点和头head的距离为 k-m，而从相遇点到环起点是 k+1-m
  // 所以只要将slow移到head 当slow = fast.next时 即为环起点
  slow = head;
  while (slow !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

var detectCycle = function (head) {
  // 更容易理解
  let slow = fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
