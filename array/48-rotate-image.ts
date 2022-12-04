/**
 * 旋转图像
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // 对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // 水平翻转
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
