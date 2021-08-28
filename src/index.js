
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let rez = [];
  if (matrix === undefined) return rez;
  for (let i = 0; i < matrix.length; i++) {

    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        rez.push(matrix[i][j]);
      }
    } else  {
      for (let j = 0; j < matrix[i].length; j++) {
        rez.push(matrix[i][matrix[i].length - j - 1]);
      }
    }
    
  }
  return rez;
}
