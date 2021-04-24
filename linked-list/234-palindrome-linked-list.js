/**
 * 回文链表
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let left = head;

  let traverse = (right) => {
    if (right === null) return true;
    let res = traverse(right.next);
    res = res && left.val === right.val;
    left = left.next;
    return res;
  };

  return traverse(head);
};

// 快慢指针
var isPalindrome = function (head) {
  let slow = (fast = head);

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // fast == null 偶数
  // fast != null 奇数
  if (fast != null) {
    slow = slow.next;
  }

  var reverse = function (head) {
    let pre = null,
      curr = head;
    while (curr !== null) {
      let next = curr.next;
      curr.next = pre;
      pre = curr;
      curr = next;
    }
    return pre;
  };

  let left = head,
    right = reverse(slow);

  while (right !== null) {
    if (left.val !== right.val) return false;

    left = left.next;
    right = right.next;
  }

  return true;
};
