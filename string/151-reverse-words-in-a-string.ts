/**
 * 反转字符串中的单词
 */

{
  function reverseWords(s: string): string {
    function reverseString(s: string): string {
      return s.split('').reverse().join('');
    }

    const r = reverseString(s.trim());
    return r
      .split(' ')
      .filter((item) => item)
      .map((item) => reverseString(item))
      .join(' ');
  }
}

{
  function reverseWords(s: string): string {
    const str = s.trim();
    let left = 0,
      right = s.length - 1;
    const stack: string[] = [];

    let word = '';
    while (left < right) {
      if (word && str[left] === ' ') {
        stack.unshift(word);
        word = '';
      } else if (str[left] !== ' ') {
        word += str[left];
      }
      left++;
    }
    stack.unshift(word);

    return stack.join(' ');
  }
}
