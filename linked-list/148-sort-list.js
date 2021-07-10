/**
 * 排序链表
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 进阶：
 *  你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 归并 时间复杂度O（nlogn） 空间复杂度（nlogn）
var sortList = function (head) {
  function mergeSort(head, tail) {
    if (head === null) return head;

    if (head.next === tail) {
      head.next = null;
      return head;
    }

    let slow = head,
      fast = head;

    while (fast !== tail && fast.next !== tail) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // if (fast !== tail) {
    //   slow = slow.next;
    // }

    const mid = slow;
    const l1 = mergeSort(head, mid);
    const l2 = mergeSort(mid, tail);
    return merge(l1, l2);
  }

  return mergeSort(head, null);
};

function merge(l1, l2) {
  const dummy = (head = new ListNode(0));

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }

    head = head.next;
  }

  head.next = l1 ? l1 : l2;

  return dummy.next;
}

// 自底向上 归并 空间复杂度 O（1）
var sortList = function (head) {
  let length = 0;
  let node = head;
  while (node !== null) {
    node = node.next;
    length++;
  }

  const dummy = new ListNode(0, head);
  for (let subLength = 1; subLength < length; subLength *= 2) {
    let prev = dummy,
      curr = dummy.next;

    while (curr !== null) {
      let l1 = curr;
      for (let i = 1; i < subLength && curr.next !== null; i++) {
        curr = curr.next;
      }
      let l2 = curr.next;
      curr.next = null;
      curr = l2;

      for (
        let i = 1;
        i < subLength && curr !== null && curr.next !== null;
        i++
      ) {
        curr = curr.next;
      }
      let next = null;
      if (curr !== null) {
        next = curr.next;
        curr.next = null;
      }

      prev.next = merge(l1, l2);

      while (prev.next != null) {
        prev = prev.next;
      }

      curr = next;
    }
  }

  return dummy.next;
};

// 归并 2
var sortList = function (head) {
  
  if (head === null || head.next === null) return head

  let slow = head, fast = head.next

  while(fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  let head2 = slow.next
  slow.next = null

  return merge(sortList(head), sortList(head2))

};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let n1 = new ListNode(1);
let n2 = new ListNode(2, n1);
let n4 = new ListNode(4, n2);

console.log(sortList(n4));
