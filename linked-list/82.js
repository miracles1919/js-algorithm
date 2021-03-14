/**
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
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

  let current = head, data = {}, dummy = new ListNode(0, head)

  while (current !== null) {
    data[current.val] = data[current.val] ? data[current.val] + 1 : 1
    current = current.next
  }

  current = dummy
  while (current.next !== null) {
    if (data[current.next.val] === 1) {
      current = current.next
    } else {
      current.next = current.next.next
    }
  }

  return dummy.next
};

//双指针
var deleteDuplicates = function (head) {
  if (head === null) return head

  let dummy = new ListNode(0, head)
  let first = dummy
  let second = head

  while (second.next !== null) {
    if (first.next.val !== second.next.val) {
      first = first.next
      second = second.next
    } else {

      while (second.next !== null && first.next.val === second.next.val) {
        second = second.next
      }
      first.next = second.next
      second = second.next

    }
  }

  return dummy.next

}

// 递归
var deleteDuplicates = function (head) {

  if (head === null || head.next === null) return head

  if (head.val === head.next.val) {
    while (head !== null && head.next !== null && head.val === head.next.val) {
      head = head.next
    }
    return deleteDuplicates(head.next)
  } else {
    head.next = deleteDuplicates(head.next)
  }

  return head
}