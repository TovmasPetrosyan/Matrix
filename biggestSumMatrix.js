//1
 
const sumItemArr = (arr) =>  arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const biggestSumMatrix = (matrix) => {
  let max = sumItemArr(matrix[0]);
  let index = 0;
for(let i = 0; i < matrix.length; i ++){
  let sum = sumItemArr(matrix[i]);
  if(sum > max){
    max = sum;
    index = i;
  }
}
  return index;
 
}
const matrix = [
    [1, 1, 1, 4],
    [7, 10, 12, 5],
    [8, 9, 3, 4]
  ];
  console.log(biggestSumMatrix(matrix));