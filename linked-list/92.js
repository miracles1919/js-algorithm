/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 说明: 1 ≤ m ≤ n ≤ 链表长度。
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var node;
var reverseList = function (head, right) {
  if (right === 1) {
    node = head.next;
    return head;
  }

  let last = reverseList(head.next, right - 1);
  head.next.next = head;
  head.next = node;

  return last;
};

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === 1) return reverseList(head, right);

  head.next = reverseBetween(head.next, left - 1, right - 1);

  return head;
};

//穿针引线
var reverseBetween = function (head, left, right) {
  let pre = (dummy = new ListNode(-1, head));
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  let curr = pre.next;
  let next;

  for (let i = left; i < right; i++) {
    next = curr.next;
    curr.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }

  return dummy.next;
};
