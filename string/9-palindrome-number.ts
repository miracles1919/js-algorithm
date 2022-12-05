/**
 * 回文数
 */

{
  function isPalindrome(x: number): boolean {
    const s = x.toString();
    let l = 0,
      r = s.length - 1;

    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }

    return true;
  }
}
