//3
// when matrix elements are letters
// Option 1
const isInMatrix = (matrix, word) => {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let index = 0;
  
    const found = (ind, row, col, matrix, word) => {
        if (ind === word.length) return true;
        if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) return false;
      
        let result = false;
        if (word[ind] === matrix[row][col]) {          
            matrix[row][col] = '.';
         
         result = found(ind + 1, row + 1, col, matrix, word) || 
                  found(ind + 1, row - 1, col, matrix, word) ||
                  found(ind + 1, row, col - 1, matrix, word) || 
                  found(ind + 1, row, col + 1, matrix, word);
         
            matrix[row][col] = word[index];
         
        }
        return result;
    }
    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (word[index] === matrix[row][col]) {
             if (found(index, row, col, matrix, word)) return true;
            }
        }
    }
    return false;
};
// when matrix elements are words
// Option 2
const arrString = (arr,str) => {
    const targetWord = arr.includes(str);
    return targetWord ? true: false;
  }
 const isInMatrix1 = (matrix,word) => {
   for (let i = 0; i < matrix.length; i++) {
      if(arrString(matrix[i],word)) return true;
   }
   return false;
 };
//  const matrix = [
//     ['kuku', 'mumu', 'tutu', 'hello'],
//     ['Sewe', 'ffq', 'Cqw', 'Sqa'],
//     ['Abc', 'Def', 'Efg', 'Edee']
//   ];

//const word = 'mum';
//console.log(isInMatrix1(matrix, word));

// When the searched word must be a straight line and the matrix elements are letters 
// Option 3

const rotateMatrix = (matrix) => {
  return  matrix[0].map((a,i) => matrix.map(b => b[i]));
}
const isInMatrix2 = (matrix,word) => {         
     return  matrix.some(element => element.join('').includes(word)) ||
       rotateMatrix(matrix).some(element => element.join('').includes(word));
    
   }
   const matrix = [
    ['r', 'm', 't', 'h','q','a'],
    ['a', 'a', 'p', 'p','l','e'],
    ['d', 'q', 'f', 'e','a','q']
  ];
  console.log(isInMatrix2(matrix,'rad'));
