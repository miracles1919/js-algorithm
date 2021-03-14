/**
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

  if (head === null) return head

  let n = 0
  let temp = head

  while (temp.next !== null) {
    temp = temp.next
    n++
  }
  n++

  k = k % n

  temp.next = head

  for (let i = 0; i < n - k; i++) {

    temp = temp.next
    if (i === n - k - 1) {
      head = temp.next
      temp.next = null
    }
  }

  return head
};


// 快慢指针
var rotateRight = function (head, k) {
  if (head === null) return head
  let dummy = new ListNode(0, head)
  let fast = temp = head
  let slow = dummy
  let n = 0

  while (temp.next !== null) {
    temp = temp.next
    n++
  }
  n++

  k = k % n

  for (let i = 0; i < k; i++) {
    fast = fast.next
  }

  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }

  fast.next = head
  head = slow.next
  slow.next = null

  return head
}
