{
  function deleteDuplicates(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0, head);
    const map = new Map();
    while (head) {
      if (head.next && head.val === head.next.val) {
        map.set(head.val, 1);
      }
      head = head.next;
    }

    head = dummy;
    while (head.next) {
      if (map.has(head.next.val)) {
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
    const dummy = new ListNode(0, head);
    let first = dummy;
    let second = head;

    while (second && second.next) {
      if (first.next!.val === second.next.val) {
        while (second.next && first.next!.val === second.next.val) {
          second = second.next;
        }
        first.next = second.next;
        second = second.next!;
      } else {
        first = first.next!;
        second = second.next;
      }
    }
    return dummy.next;
  }
}
