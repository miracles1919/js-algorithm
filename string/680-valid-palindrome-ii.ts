/**
 * 验证回文串 II
 */

{
  function validPalindrome(s: string): boolean {
    let l = 0,
      r = s.length - 1;

    while (l < r) {
      if (s[l] !== s[r])
        return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
      else {
        l++;
        r--;
      }
    }
    return true;
  }

  function isPalindrome(s: string, l: number, r: number) {
    while (l < r) {
      if (s[l] !== s[r]) return false;

      l++;
      r--;
    }
    return true;
  }
}
