/**
 * 反转一个单链表。
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
var reverseList = function(head) {

  if (head.next === null) return head

  let last = reverseList(head.next)

  head.next.next = head
  head.next = null

  return last
};


var reverseList = function(head) {

  let curr = head, prev = null

  while(curr) {

    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next

  }

  return prev
};
