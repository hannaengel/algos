// SORTING ALGORITHM PRACTICE

// Selection Sort (in place)
// sort array of numbers from lowest to highest

// let a = [1,9,6,0,2,5,1,9]

// function sortArrayAsc(a){
//     for(let j=0; j < a.length -1; j++){
//       for(let i =j+1; i<a.length; i++){
//         if (a[j] > a[i]){
//           let placeholder = a[j]
//           a[j] = a[i]
//           a[i] = placeholder
//         }
//       }
//     }
//     console.log(a)
//   return a
//  }

// sortArrayAsc(a)

// console.log('-------------------------------')

// function verifyPrime(num){
//     let divisor = 2
//     while(divisor < num){
//         if(num % divisor == 0){
//             return false
//         }else{
//             divisor++;
//         }
//     }
//     return true
// }

// // verifyPrime(3)
// console.log('-------------------------------')

// function findPrimeFactors(num){
//     let factors = []
//     let divisor = 2
//     while(num > divisor){
//         if(num % divisor == 0){
//             if (verifyPrime(divisor)){
//                 factors.push(divisor)
//             }
//         }
//      divisor ++
//     }
//     console.log(factors)
//     return factors
// }
// findPrimeFactors(99)
// console.log('-------------------------------')

// function fibonacci(num){
//     let answer;
//     let fib = [0, 1, 1]
//     if (num <= 3){
//         return 1;
//      }else{
//       let i = 0;
//       while(i < num - 3){
//         console.log(fib)
//       let next = fib[fib.length -1] + fib[fib.length -2]
//       fib.push(next)
//       i++
//     }
//   }
//   answer = fib[-1]
//   return fib[fib.length-1];
// }

// console.log('-------------------------------')

// function recursivefib(num, array){
//   let i = 0;
//   if (num <=2){
//     return 1
//   }else if(num != 3){
//     array.push(array[array.length-1] + array[array.length-2]);
//     let n = num - 1
//     return recursivefib(n, array)
//   }
//   return array[array.length -1]
// }

// // recursivefib(6, [0, 1, 1])

// console.log('-------------------------------')

// function greatestCommonDivisor(a, b){
//     let divisor = 1;
//     let greatestDivisor = 1;
//     while (divisor <= a ||
// }

// console.log('-------------------------------')

// function greatestCommonDivisor(a, b){
//     let divisor = 1;
//     let greatestDivisor = 1;
//     while (divisor <= a || divisor <= b){
//       if (a % divisor == 0 && b % divisor ==0){
//       greatestDivisor = divisor
//       }
//       divisor++
//     }
//     return greatestDivisor
// }

// // greatestCommonDivisor(55, 50)
// console.log('-------------------------------')
// function reverseString(st){
//   let reversed = ''
//   for (i=st.length-1; i>=0; i--){
//     reversed += st[i]
//   }
//   return reversed
// }
// console.log('-------------------------------')

// function sumOfTwo(arr, sum){
//   let sumArray = []
//   for(i = 0; i<arr.length; i++){
//     for(j = i+1; j<arr.length; j++){
//       console.log(arr[i], arr[j])
//       if(arr[i] + arr[j]==sum){
//         sumArray.push([arr[i], arr[j]])
//       }
//     }
//   }
//   return sumArray
// }
// console.log('-------------------------------')

// function findPeek(ar){
//   for(i = 0; i< ar.length; i++){
//     if (ar[i+1]< ar[i]){
//       return ar[i]
//     }
//   }
//   return 'not a mountain'
// }

// console.log('-------------------------------')

// //surrounded regions

// function islands(board) {
//   let toFlip = []
//    for(row = 0; row < board.length-1; row++){
//        if(row == 0 || board.length-1){
//            // is the board always square?
//            for(column = 0; column < board[0].length; column++){
//                 if (board[row][column] == 'O'){
//                     let coordinate = [row, column]
//                exploreIsland(board, coordinate, toFlip)
//                 }
//                }
//            }else{
//                 if(board[row][0] == 'O'){
//                   let coordinate = [row, column]
//                    exploreIsland(board, coordinate, toFlip)
//                 }
//                if(board[row][board.length-1] == 'O'){
//                    let coordinate = [row, column]
//                       exploreIsland(board, coordinate, toFlip)
//                 }  
//            }
//       }
//   return toFlip
// };

// function islands(board) {
//   let toFlip = []
//    for(row = 0; row <= board.length-1; row++){
//        if(row == 0 || row == (board.length-1)){
//            for(column = 0; column < board[0].length; column++){
//                 if (board[row][column] == 'O'){
//                     let coordinate = [row, column]
//                exploreIsland(board, coordinate, toFlip)
//                }
//             }
//         }else{
//           for(column = 0; column < board[0].length; column++){
//             if(column == 0 || column == board[0].length-1){
//                 if (board[row][column] == 'O'){
//                     let coordinate = [row, column]
//                exploreIsland(board, coordinate, toFlip)
//                }
//             }
//           }
//         }
//       }
//   return flippedBoard(toFlip, board)
// };

// function flippedBoard(toFlip, board){
// for(row=0; row<board.length; row++){
//   for(column = 0; column < board[row].length; column++){
//     console.log([row, column])
//     if(toFlip.includes([row, column])){
//       board[row][column] = 'X'
//     }
//   }
// }
// console.log(toFlip.includes([ 2, 0 ]))
// return board
// }


// function exploreIsland(board, coordinate, toFlip){
//   toFlip.push(coordinate)
//   console.log(coordinate)
  
//   if(coordinate[0] > 0){
//   let up = board[coordinate[0]-1][coordinate[1]]
//   console.log('up: ', up)
//    if (up == 'O' && !toFlip.includes(up)){
//       exploreIsland(board, [coordinate[0]-1,coordinate[1]], toFlip)
//       }
//   }
//    if(coordinate[0]< board.length-1){
//       let down = board[coordinate[0]+1][coordinate[1]]
//       if (down == 'O' && !toFlip.includes(down)){
//       exploreIsland(board, [coordinate[0]+1],[coordinate[1]], toFlip)
//       }
//   }
//   if(coordinate[1] > 0){
//       let left = board[coordinate[0]][coordinate[1]-1]
//       if (left == 'O' && !toFlip.includes(left)){
//       exploreIsland(board, [coordinate[0]],[coordinate[1]-1], toFlip)
//       }
//   }
//   if(coordinate[1] > board[0].length-1){
//       let right = board[coordinate[0]][coordinate[1]+1]
//       if (right == 'O' && !toFlip.includes(right)){
//       exploreIsland(board, [coordinate[0]],[coordinate[1]+1], toFlip)
//       }
//   }
// }
// let arr = 
// [["X","X","X","X"],
// ["X","X","O","X"],
// ["O","O","X","X"],
// ["X","O","X","O"]]

// islands(arr)

console.log('-------------------------------')
function binaryIterative(array, num){
  let left = 0
  let right = array.length-1
  let mid = Math.floor((left + right)/2)
  while(left<=right){
    if(array[mid]==num){
      return true;
    }else if(num < array[mid]){
      right = mid -1
    }else if (num > array[mid]){
      left = mid + 1
    }
  }
  return false
}


let a = [1,2,5,7,9,12,13,15,16,18]
let x = 5

binaryIterative(a, x)
