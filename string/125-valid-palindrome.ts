/**
 * 验证回文串
 */

{
  function isPalindrome(s: string): boolean {
    const str = s
      .toLowerCase()
      .split('')
      .filter((item) => /[a-z\d]/.test(item))
      .join('');
    let l = 0,
      r = str.length - 1;

    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }

    return true;
  }
}

function isPalindrome(s: string): boolean {
  const str = s.toLowerCase();
  let l = 0,
    r = s.length - 1;

  function isValid(s: string) {
    return /[a-z\d]/.test(s);
  }

  while (l < r) {
    if (!isValid(str[l])) {
      l++;
      continue;
    }

    if (!isValid(str[r])) {
      r--;
      continue;
    }

    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }

  return true;
}
