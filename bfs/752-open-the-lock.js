/**
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
 * 每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * 字符串 target 代表可以解锁的数字，你需要给出最小的旋转次数，如果无论如何不能解锁，返回 -1。
 *
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let queue = ['0000'];
  let step = 0;

  // 记录访问过的密码
  const visited = new Set();
  visited.add('0000');

  while (queue.length) {
    let n = queue.length;

    for (let i = 0; i < n; i++) {
      let cur = queue.shift();

      // 判断是否到达终点
      if (deadends.indexOf(cur) !== -1) {
        continue;
      }

      if (cur == target) {
        return step;
      }

      // 将cur的相邻节点加入队列
      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j);
        let down = minusOne(cur, j);

        if (!visited.has(up)) {
          queue.push(up);
          visited.add(up);
        }

        if (!visited.has(down)) {
          queue.push(down);
          visited.add(down);
        }
      }
    }

    step++;
  }

  function plusOne(s, j) {
    let arr = [...s];
    if (arr[j] == '9') {
      arr[j] = '0';
    } else {
      arr[j] = `${Number(arr[j]) + 1}`;
    }
    return arr.join('');
  }

  function minusOne(s, j) {
    let arr = [...s];
    if (arr[j] == '0') {
      arr[j] = '9';
    } else {
      arr[j] = `${Number(arr[j]) - 1}`;
    }
    return arr.join('');
  }

  return -1;
};

// 双向bfs
var openLock = function (deadends, target) {
  let q1 = new Set();
  let q2 = new Set();

  q1.add('0000');
  q2.add(target);

  let step = 0;

  // 记录访问过的密码
  const visited = new Set();
  visited.add('0000');

  while (q1.size && q2.size) {
    let temp = new Set()

    for (const cur of q1) {
      // 判断是否到达终点
      if (deadends.indexOf(cur) !== -1) {
        continue;
      }

      if (q2.has(cur)) {
        return step
      }

      visited.add(cur)

      // 将cur的相邻节点加入队列
      for (let j = 0; j < 4; j++) {
        let up = plusOne(cur, j);
        let down = minusOne(cur, j);

        if (!visited.has(up)) {
          temp.add(up)
        }

        if (!visited.has(down)) {
          temp.add(down);
        }
      }
    }

    step++;

    // 交换 q1 q2, temp 相当于 q1, 下一轮 while 就是扩散 q2
    q1 = q2
    q2 = temp
  }

  function plusOne(s, j) {
    let arr = [...s];
    if (arr[j] == '9') {
      arr[j] = '0';
    } else {
      arr[j] = `${Number(arr[j]) + 1}`;
    }
    return arr.join('');
  }

  function minusOne(s, j) {
    let arr = [...s];
    if (arr[j] == '0') {
      arr[j] = '9';
    } else {
      arr[j] = `${Number(arr[j]) - 1}`;
    }
    return arr.join('');
  }

  return -1;
};

// console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202'));
console.log(openLock(['8888'], '0009'));
