
// function getRow(rowIndex: number): number[] {
//     let parArr: number[][] = [[1]];

//     for (let i = 1; i <= rowIndex; i++) {
//         let childArr: number[] = [1];
//         for (let j = 1; j < i; j++) {
//             childArr.push(parArr[i - 1][j - 1] + parArr[i - 1][j]);
//         }
//         childArr.push(1);
//         parArr.push(childArr);
//     }

//     return parArr[rowIndex];
// }
