/**
 * 最长回文子串
 */

function longestPalindrome(s: string): string {
  let res = '';

  function isPalindrome(s: string, l: number, r: number) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.substring(l, r + 1);
  }

  for (let i = 0; i < s.length; i++) {
    // 以i为中心
    const s1 = isPalindrome(s, i, i);
    // 以i,i+1为中心
    const s2 = isPalindrome(s, i, i + 1);

    if (s1.length > res.length) res = s1;
    if (s2.length > res.length) res = s2;
  }

  return res;
}
