/**
 * 相交链表
 * 编写一个程序，找到两个单链表相交的起始节点。
 */
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) return null;
  let hA: ListNode | null = headA,
    hB: ListNode | null = headB;
  while (hA !== hB) {
    if (hA === null) {
      hA = headB;
    } else {
      hA = hA.next;
    }

    if (hB === null) {
      hB = headA;
    } else {
      hB = hB.next;
    }
  }
  return hA;
}
