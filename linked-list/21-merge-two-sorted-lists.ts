/**
 * 合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。
 * 新链表是通过拼接给定的两个链表的所有节点组成的。
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let head = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }

  head.next = list1 ? list1 : list2;
  return dummy.next;
}

function mergeTwoLists2(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val < list2.val) {
    list1.next = mergeTwoLists2(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists2(list1, list2.next);
    return list2;
  }
}
