/**
 * 字符串相乘
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 时间复杂度 O(mn + m2)
var multiply = function (num1, num2) {
  if (num1 == '0' || num2 == '0') return '0';

  const n = num1.length,
    m = num2.length;
  let res = '0';
  let carry = 0;

  for (let i = n - 1; i >= 0; i--) {
    let sum = '';
    for (let j = m - 1; j >= 0; j--) {
      let num = num1[i] * num2[j] + carry;
      carry = Math.floor(num / 10);
      sum = (num % 10) + sum;
    }

    if (carry > 0) {
      sum = carry + sum;
      carry = 0;
    }

    // 补0
    let zero = n - i - 1;
    while (zero-- > 0) {
      sum += '0';
    }

    res = addString(res, sum);
  }

  return res;
};

function addString(str1, str2) {
  let i = str1.length - 1,
    j = str2.length - 1;
  let res = '';
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    let x = i >= 0 ? str1[i] - '0' : 0;
    let y = j >= 0 ? str2[j] - '0' : 0;
    let num = x + y + carry;
    carry = Math.floor(num / 10);
    res = (num % 10) + res;
    i--;
    j--;
  }

  return res;
}

var multiply = function (num1, num2) {
  const n = num1.length,
    m = num2.length;
  const nums = new Array(m + n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      nums[i + j + 1] += num1[i] * num2[j]
    }
  }

  for (let i = m + n - 1; i > 0; i--) {
    nums[i - 1] += Math.floor(nums[i] / 10)
    nums[i] %= 10
  }

  let i = 0
  while(nums[i] == 0) {
    i++
  }

  if(i === nums.length) return '0'

  return nums.slice(i).join('')
};

// console.log(multiply('123', '456'));
// console.log(multiply('123456789', '987654321'));
console.log(multiply('123', '0'));
// console.log(multiply('0', '52'));
