/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 进阶：你能尝试使用一趟扫描实现吗？
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}



var removeNthFromEnd = function (head, n) {

  let lastI = 0;

  // 递归链表
  function recursion(head, n) {
    if (head === null) return head

    let next = recursion(head.next, n)
    lastI++

    if (lastI === n) {
      head = next
    }

    if (lastI === n + 1) {
      head.next = next
    }

    return head
  }

  return recursion(head, n)
};


// 双指针
var removeNthFromEnd = function (head, n) {

  let dummy = new ListNode(0, head) // 哑节点
  let first = head
  let second = dummy

  for (let i = 0; i < n; i++) {
    first = first.next
  }

  while(first !== null) {
    first = first.next
    second = second.next
  }

  second.next = second.next.next
  return dummy.next

};