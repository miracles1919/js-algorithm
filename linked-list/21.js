/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 迭代
var mergeTwoLists = function (l1, l2) {
  let dummy = head = new ListNode(0)

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      head.next = l1
      l1 = l1.next
    } else {
      head.next = l2
      l2 = l2.next
    }

    head = head.next
  }

  //合并后 l1 和 l2 最多只有一个还未被合并完
  head.next = l1 === null ? l2 : l1

  return dummy.next

};

// 递归
var mergeTwoLists = function (l1, l2) {

  if (l1 === null) return l2
  else if (l2 === null) return l1
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }

};