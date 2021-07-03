/**
 * 复原 IP 地址
 * 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
 *
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  const n = s.length;

  const dfs = (track, i, needLen) => {
    // 满足条件
    if (track.length == 4) {
      res.push(track.join('.'));
      return;
    }

    for (let k = 1; k <= 3; k++) {
      let str = s.substr(i, k);
      // console.log(track.join('.'), '.', str);

      // 剪枝
      if (str > 255) return;

      // 个数超出
      if (i + k > n) return;

      // '0x' '0xx'
      if (k > 1 && str[0] == '0') return 

      // 剩余个数不足
      if (needLen - str.length > (3 - track.length) * 3) {
        continue;
      }

      track.push(str);
      dfs(track, i + k, needLen - str.length);
      track.pop();
    }
  };

  dfs([], 0, s.length);
  return res;
};

// console.log(restoreIpAddresses('25525511135'));
// console.log(restoreIpAddresses('0000'));
// console.log(restoreIpAddresses('1111'));
// console.log(restoreIpAddresses('010010'));
console.log(restoreIpAddresses('101023'));
