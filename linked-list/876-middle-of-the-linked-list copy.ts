/**
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 */

function middleNode(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next!.next;
  }

  return slow;
}
