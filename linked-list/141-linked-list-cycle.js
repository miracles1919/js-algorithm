/**
 * 给定一个链表，判断链表中是否有环。
 *
 * 进阶：
 *  你能用 O(1)（即，常量）内存解决此问题吗？
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let res = [];
  while (head) {
    if (res.indexOf(head) === -1) {
      res.push(head);
      head = head.next;
    } else {
      return true;
    }
  }
  return false;
};

// 快慢指针
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) return false;

    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

// 天秀解法
var hasCycle = function (head) {
  try {
    JSON.stringify(head);
  } catch {
    // 循环引用会报错
    return true;
  }
  return false;
};

// 标记法
const hasCycle = function (head) {
  while (head) {
    if (head.flag) {
      return true;
    }
    head.flag = true;
    head = head.next;
  }
  return false;
};
