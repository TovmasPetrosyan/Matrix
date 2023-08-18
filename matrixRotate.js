//4
// Option 1
const matrixRotate = (matrix) => {
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let currentArray = [];
    for (let j = 0; j < matrix.length; j++) {
      currentArray.push(matrix[j][i]);
    }
    newArray.push(currentArray);
  }
  return newArray;
};

// Option 2

const matrixRotate1 = (matrix) => {
    return matrix[0].map((elem,i) => matrix.map( b => b[i]));
}

const matrix = [
    [1, 1, 1, 4],
    [7, 10, 12, 5],
    [8, 9, 3, 4]
  ];
const res = matrixRotate1(matrix);
console.log(res)