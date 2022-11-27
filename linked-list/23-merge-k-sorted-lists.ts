/**
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  let head = lists[0];
  for (let i = 1; i < lists.length; i++) {
    head = mergeTwoLists(head, lists[i]);
  }
  return head;
}

// 分治归并
function mergeKLists2(lists: Array<ListNode | null>): ListNode | null {
  function merge(
    lists: Array<ListNode | null>,
    l: number,
    r: number
  ): ListNode | null {
    if (l === r) return lists[l];
    if (l > r) return null;

    const mid = (l + r) >> 1;
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
  }

  return merge(lists, 0, lists.length - 1);
}
