// 2
const  minArr = (arr) => Math.min(...arr);
const  minItemsArr = (matrix) => {
  let newArray = [];
  for(let i = 0; i < matrix.length; i++){
    newArray.push(minArr(matrix[i]));
  }
  return newArray;
}
const matrix = [
    [1, 1, 1, 4],
    [7, 10, 12, 5],
    [8, 9, 3, 4]
  ];
  console.log(minItemsArr(matrix));