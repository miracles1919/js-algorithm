/**
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 */

function partition(head: ListNode | null, x: number): ListNode | null {
  const leftDummy = new ListNode(-101);
  const rightDummy = new ListNode(-101);
  let left = leftDummy,
    right = rightDummy;
  while (head) {
    if (head.val >= x) {
      right.next = head;
      right = right.next;
    } else {
      left.next = head;
      left = left.next;
    }
    head = head.next;
  }

  right.next = null;
  left.next = rightDummy.next;
  return leftDummy.next;
}

function partition2(head: ListNode | null, x: number): ListNode | null {
  const leftDummy = new ListNode(-101, head);
  const rightDummy = new ListNode(-101);
  let left = leftDummy;
  let right = rightDummy;
  while (head) {
    if (head.val >= x) {
      left.next = head.next;
      right.next = head;
      right = right.next;
    } else {
      left = head;
    }
  }

  right.next = null;
  left.next = rightDummy.next;

  return leftDummy.next;
}

// React Fiber：>=目标值节点放入tag链表并从原链表删除。拼接原链表最后节点和tag
// var partition = function (head, x) {
//   let leftHead = left = new ListNode(0, head), tagHead = tag = new ListNode(0)

//   leftHead.next = head
//   while(head !== null) {
//     if (head.val >= x) {
//       left.next = head.next
//       tag = tag.next = head
//     } else {
//       left = head
//     }
//     head = head.next
//   }

//   tag.next = null
//   left.next = tagHead

//   return leftHead.next
// }
