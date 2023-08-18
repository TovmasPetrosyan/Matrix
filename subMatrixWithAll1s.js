const subMatrixWithAll1s = (matrix) => {
    let Max = 0;
    let emptyMatrix = new Array(matrix.length);
    let outPut = [];
    for (let i = 0; i < matrix.length; i++) {
        emptyMatrix[i] = new Array(matrix.length).fill(0);
    }

   for (let i = 0; i < matrix[0].length; i++){
        for (let j = 0; j < matrix.length; j++) {           
            let currentItem = matrix[i][j];
            if (currentItem) {
                if (j) {
                   // console.log(emptyMatrix);                 

                    currentItem = 1 + Math.min(emptyMatrix[1][j - 1], Math.min(emptyMatrix[0][j - 1], emptyMatrix[1][j]));
                   //  console.log('currentItem='+currentItem);
                }
            }
            emptyMatrix[0][j] = emptyMatrix[1][j];
            emptyMatrix[1][j] = currentItem;
           // console.log(emptyMatrix);
            Max = Math.max(Max, currentItem);
           // console.log('Max=' + Max);
          
        }}
    for (let i = 0; i < Max; i++) {
        for (let j = 0; j < Max; j++) {
            outPut[i] = new Array(Max).fill(1);
        }
    }
    return outPut;
}
const matrix = [[0, 1, 1, 0, 1],
[1, 1, 1, 1, 0],
[1, 1, 1, 1, 0],
[1, 1, 1, 1, 0],
[1, 1, 1, 1, 1],
]

console.log(subMatrixWithAll1s(matrix));