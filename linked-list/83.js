/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
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
var deleteDuplicates = function (head) {

  if (head === null) return head

  let current = head

  while (current.next !== null) {

    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }

  }
  return head
};

// 快慢指针
var deleteDuplicates = function (head) {

  if (head === null) return head

  let slow = fast = head

  while (fast !== null) {

    if (fast.val !== slow.val) {
      slow.next = fast
      slow = slow.next
    } 
    fast = fast.next
  }

  // 断开与重复元素的连接
  slow.next = null
  return head
};