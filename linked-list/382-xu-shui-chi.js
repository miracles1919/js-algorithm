/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head;
};

/**
 * 举例说明： [1, n]
 * 遇到1，概率为1，保留第一个数。
 * 遇到2，概率为1/2，这个时候，1和2各1/2的概率被保留
 * 遇到3，3被保留的概率为1/3，(之前剩下的数假设1被保留)，2/3的概率 1 被保留，(此时1被保留的总概率为 2/3 * 1/2 = 1/3)
 * 遇到4，4被保留的概率为1/4，(之前剩下的数假设1被保留)，3/4的概率 1 被保留，(此时1被保留的总概率为 3/4 * 2/3 * 1/2 = 1/4)
 * 所以，每次只保留一个数，当遇到第 i 个数时，以 1/i的概率保留它，(i-1)/i的概率保留原来的数。
 *
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let count = 0;
  let curr = this.head;
  let val = 0;

  while (curr !== null) {
    count++;

    // 以1/n的概率保留
    if (Math.random() < 1 / count) {
      val = curr.val;
    }

    curr = curr.next;
  }

  return val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
