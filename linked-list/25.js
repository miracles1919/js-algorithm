/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
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

function reverse(head) {
  if (head.next === null) return head
  let last = reverse(head.next)
  head.next.next = head
  head.next = null
  return last
}

let successor = null // 后驱节点
function reverseN(head, n) {
  if (n === 1) {
    successor = head.next
    return head
  }

  let last = reverseN(head.next, n - 1)

  head.next.next = head
  head.next = successor
  return last
}

function reverseBetween(head, m, n) {
  if (m === 1) return reverseN(head, n)

  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {

  let temp = head

  let i = 1

  while (temp !== null) {

    temp = temp.next

    if (i % k === 0) {
      head = reverseBetween(head, i - k + 1, i)
    }

    i++
  }
  return head

};
