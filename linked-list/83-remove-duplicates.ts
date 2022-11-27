{
  function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head);
    while (head) {
      if (head.next && head.val === head.next.val) {
        head.next = head.next.next;
      } else {
        head = head.next;
      }
    }

    return dummy.next;
  }
}

{
  function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return head;

    let slow: ListNode | null = head,
      fast: ListNode | null = head;
    while (fast) {
      if (fast.val !== slow.val) {
        slow.next = fast;
        slow = slow?.next;
      }
      fast = fast.next;
    }

    slow.next = null;
    return head;
  }
}
