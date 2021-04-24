/**
 * 链表求和
 * 给定两个用链表表示的整数，每个节点包含一个数位。这些数位是反向存放的，也就是个位排在链表首部。
 * 编写函数对这两个整数求和，并用链表形式返回结果。
 * 示例：
 *
 * 输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
 * 输出：2 -> 1 -> 9，即912
 *
 * 进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy = (head = new ListNode(0));

  while (l1 || l2) {
    let p1 = l1 ? l1.val : 0;
    let p2 = l2 ? l2.val : 0;

    let sum = p1 + p2 + carry;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;

    carry = Math.floor(sum / 10);
    head.next = new ListNode(sum % 10);
    head = head.next;
  }

  if (carry) {
    head.next = new ListNode(carry);
  }

  return dummy.next;
};
