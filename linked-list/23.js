/**
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

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

// 顺序合并
var mergeKLists = function (lists) {

  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]

  if (lists.length > 1) {
    let head = lists[0]
    for (let i = 1; i < lists.length; i++) {
      head = mergeTwoLists(head, lists[i])
    }
    return head
  }
};

// 分治归并
var mergeKLists = function (lists) {

  let merge = function (lists, l, r) {
    if (l === r) return lists[l]
    if (l > r) return null

    let mid = (l + r) >> 1 // = Math.floor((l+r) / 2)
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r))
  }

  return merge(lists, 0, lists.length - 1)
};