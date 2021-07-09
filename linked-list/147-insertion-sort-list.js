/**
 * 对链表进行插入排序
 * 对链表进行插入排序。
 * 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
 * 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
 *
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
// 时间复杂度O(n2) 空间复杂度O(1)
var insertionSortList = function (head) {
  let dummy = new ListNode(0, head);

  let lastSorted = head, curr = head.next


  while (curr !== null) {

    if (curr.val < lastSorted.val) {
      let prev = dummy

      while(prev.next.val <= curr.val) {
        prev = prev.next
      }
      lastSorted.next = curr.next
      curr.next = prev.next
      prev.next = curr
    } else {
      lastSorted = lastSorted.next
    }

    curr = lastSorted.next
  }

  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let n1 = new ListNode(1)
let n2 = new ListNode(2, n1)
let n4 = new ListNode(4, n2)


console.log(insertionSortList(n4))