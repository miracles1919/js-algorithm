/**
 * 相交链表
 * 编写一个程序，找到两个单链表相交的起始节点。
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  while (headA) {
    headA.flag = true;
    headA = headA.next;
  }

  while (headB) {
    if (headB.flag) return headB;
    headB = headB.next;
  }
  return null;
};

// 双指针
// 当pA到达尾部时，重新指向B的头结点；当pB到达尾部时，重新指向A的头结点；
// 当pA = pB时，为相交结点
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;

  let pA = headA,
    pB = headB;

  while (pA !== pB) {
    if (pA === null) {
      pA = headB;
    } else {
      pA = pA.next;
    }

    if (pB === null) {
      pB = headA;
    } else {
      pB = pB.next;
    }
  }

  return pA;
};
