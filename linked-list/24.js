/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 递归
var swapPairs = function(head) {
  if (head === null || head.next === null) return head

  let next = swapPairs(head.next.next)

  let newHead = head.next
  head.next.next = head
  head.next = next

  return newHead

};

// 迭代
var swapPairs = function(head) {
  let temp = dummy = new ListNode(0)
  dummy.next = head

  // temp -> node1 -> node2 
  // temp -> node2 -> node1
  while(temp.next !== null && temp.next.next !== null) {
    let node1 = temp.next
    let node2 = node1.next

    temp.next = node2
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }

  return dummy.next
  

};
