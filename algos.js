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



console.log('-------------------------------')
//sort arrays by mean, return indices of the arrays that 
//have the same mean in ascending order by indices, otherwise if the 
//array mean is singular just return that indice sorted in the array of arrays 
//as an array with one element i.e. the indices of that array

function meanGroups(a) {
  let meanHashMap = {}
  for(let i = 0; i < a.length; i++){
      let mean = findMean(a[i])
      if (mean in meanHashMap){
          meanHashMap[mean].push(i)
      }else{
        meanHashMap[mean] = [i]
       
      }
  }
  return sortedMeanArrays(meanHashMap)
}


function findMean(subArray){
  let sum = 0;
  for(let i = 0; i < subArray.length; i++){
      sum = sum + subArray[i]
  }
  let mean = sum / subArray.length
  console.log('mean' , mean)
  return mean 
}

function sortedMeanArrays(meanHashMap){
let sortedArrays = []
  for (key in meanHashMap){
    let subArray = meanHashMap[key]
    sortedArrays.push(subArray)
  }

  for (let i = 0; i < sortedArrays.length -1; i++){
    for(let j = i + 1; j < sortedArrays.length; j++)
     {
      if(sortedArrays[i][0] > sortedArrays[i+1][0]){
        let temp = sortedArrays[i][0]
        sortedArrays[i][0] = sortedArrays[i+1][0]
        sortedArrays[i+ 1][0] = temp
      }
   }
  }
  return sortedArrays
}


//check palandrome 

function checkPalindrome(inputString) {
  let rightIndice = inputString.length -1

  for(let i = 0; i < inputString.length/2; i++){
      if (inputString[i] !== inputString[rightIndice]){
          return false
      }
      rightIndice = rightIndice - 1
  }
  return true
}

//checkPalindrome('ababc')

console.log('-------------------')

function returnOrderedString(s1, s2){
  let orderedString = ''
  let st2Index = 0
  let s1Array = s1.split('')
  let s2Array = s2.split('')

  for(let i = 0; i < s1Array.length; i++){
   
    if (st2Index == s2Array.length - 2){
      return orderedString + s2Array.splice(s2, s2Array.length).join('')
    }

    let st1Count = countOccurences(s1, i)
    let st2Count = countOccurences(s2, st2Index)
    
    if(st2Count < st1Count){
      orderedString = orderedString + s2Array[st2Index]
      st2Index = st2Index + 1
      i = i - 1
      }else{
      orderedString = orderedString + s1Array[i]
    }
  }

  if (st2Index < s2Array.length -2){
    return orderedString + s2Array.splice(st2Index, s2Array.length).join('')
    }else{
  return orderedString
  }
}

function countOccurences (string, letterIndex){
  let count = 1;
  let stringArray = string.split('')
  for(let i = letterIndex + 1; i < stringArray.length; i++){
    if (stringArray[i] == stringArray[letterIndex]){
      count = count + 1
      }else{
    return count
    }
  }
  return count 
}

//returnOrderedString(s1, s2)

function numberOfRooms(timesArray){
  
  if (timesArray.length == 0){
    return 0 
  }
  let num = 1;
  //if meeting b starts within the range of meeting a: num ++ 
  for (let i = 0; i < timesArray.length; i++){
    for (let j = i + 1; j < timesArray.length; j++){
      // console.log(timesArray[i][0], timesArray[i][1], timesArray[j][0])
       if (timesArray[j][0] >= timesArray[i][0] 
          && timesArray[j][0]<=timesArray[i][1]){
          num = num + 1 ;
          break;
      }
    }
  }
  return num
console.log('--------------------')
//implimenting LinkedList from scratch
class Node {
  constructor(data){
  this.data = data
  this.next = null
  }
}

class MyLinkedList{
  constructor(){
    this.head = null 
    this.size = 0;
  }

  add (data){
    let node = new Node (data)
    let current; 
    if (this.head == null){
      this.head = node
    }else{
      current = this.head;
      while(current.next){
        current = current.next
      }
      current.next = node
    }
    this.size++
  }

  printList(){
    console.log('in print list')
    if(this.head == null){
      return `no nodes in list`
    }
    let current = this.head
    let nodeNum = 1;
    while(current){
      console.log(`Node ${nodeNum} : ${current.data}`)
      current = current.next
      nodeNum++
    }
  }

  insert(position, data){
    let node = new Node(data)
    let current = this.head

    if(position > this.size){
      console.log('list not long enough')
      return
    }
    if(position == 1){
      node.next = current 
      this.head = node
      this.size++ 
      return 
    }
    
    while ((position - 2) > 0){
      console.log('position: ', position)
      current = current.next
      position--
    }
    let next = current.next
    current.next = node
    node.next = next
    this.size++ 
  }

  delete(data){

    let current = this.head
    let previousNode = null;
  
    while(current){
      if (current.data == data){
        if (previousNode == null){
          this.head = current.next
          this.size--
          return
        }
        previousNode.next = current.next;
        this.size--
        return 
      }
      previousNode = current
      current = current.next
    }
    return 'node not in list'
  }
}



// let myList = new MyLinkedList()
// let emptyList = new MyLinkedList()


// myList.add(2)
// myList.add(4)
// myList.add(9)
// myList.add(0)
//  myList.insert(1, 999993)
// myList.delete(0)
console.log('-------------------------')



class Node {
  constructor(key, val, next=null){
  this.key = key
  this.value = val
  this.next = null
  }
}

class HashMap{
  constructor(){
    this.size = 10
    this.array = new Array(this.size).fill(null)
  }

  add(key, val){
    let node = new Node(key, val)
    let bucket = this.hash(node.key)%this.size
    // TODO: consistent spacing
    if (this.array[bucket]== null){
      this.array[bucket] = node 
    } else if(this.array[bucket].key == node.key) {
        this.array[bucket] = node
    } 
    else 
    {
      // TODO: FIX this overwrites second node
      this.array[bucket].next = node
    }
  }
  hash(s){      
    let sum = 0;
    for (let i = 0; i < s.length; ++i) {
        sum += s.charCodeAt(i)
    }
    return sum
  }

  get(key){
    if (!this.find(key)){
      return 'bucket not in hash'
    }
    let bucket = this.hash(key)%this.size
    if(this.array[bucket].key == key){
      return this.array[bucket]
    } 
      let node = this.searchLinkedList(this.array[bucket], key)
      return node
  }

  searchLinkedList(current, key){
    while(current){
      if (current.key == key){
        return current
        }
      current = current.next
      }
      return null
  }

  find(key){
    // TODO: return whether key in buckets, not just
    // whether buckets has anything in it
    let bucket = this.hash(key)%this.size
    if(this.array[bucket]){
      return true
    }
    return false
  }
}


let myMap = new HashMap()

myMap.add('ab', 2)
myMap.add('ba', 4)
myMap.get('ab')

console.log('------------------------')

//hash map implementation
class Node {
  constructor(key, val, next=null){
  this.key = key
  this.value = val
  this.next = null
  }
}

class HashMap{
  constructor(){
    this.size = 10
    this.array = new Array(this.size).fill(null)
  }

  add(key, val){
    let node = new Node(key, val)
    let bucket = this.hash(node.key)%this.size
    if (this.array[bucket]== null){
        this.array[bucket] = node 
        return 
    } 
    
    let current = this.array[bucket]
    while (current.next){
      if (current.key == node.key){
        current = node
        return
      }
      if(current.next.key == node.key){
        current.next = node
        return
      }
      current = current.next
    }
    current.next = node
    return 
  }

  hash(s){      
    let sum = 0;
    for (let i = 0; i < s.length; ++i) {
        sum += s.charCodeAt(i)
    }
    return sum
  }

  get(key){
    if (!this.find(key)){
      return false
    }
    let current = this.array[this.hash(key)%this.size]
    while(current !== null){
      if(current.key== key){
        return current
      } 
      current = current.next
    }
      return
  }

  searchLinkedList(current, key){
    while(current){
      if (current.key == key){
        return current
        }
      current = current.next
    }
    return null
  }

  find(key){
    let bucket = this.hash(key)%this.size
    if(this.array[bucket]){
      let current = this.array[bucket]
      while(current!==null){
        if (current.key == key){
          return true
        }
        current = current.next
      }
    }
    return false
  }

}

console.log('------------------------')



// function solution(N, K) {
//     let minRoundsPlayed = 0;
    
//     while(K > 0 && N > 1){
//         minRoundsPlayed = minRoundsPlayed + 2
//         K = K - 1 
//         N = N/2
//         N = N - 1
//         console.log('N: ', N, 'K: ', K, 'min rounds played: ', minRoundsPlayed)
//     }
    
//     while (N > 1){
//         minRoundsPlayed = minRoundsPlayed + 1
//         N = N - 1
//     }
    

//     return minRoundsPlayed
// }


// solution(10, 10)






function solution(a){
  let found = false
  let squares = findSquares(a)
  // while (!found){
     checkSquares(squares, found)
  // }
  return squares
}

function findSquares(a){
  if (a.length == a[0].length){
    return [a]
  }

  let squaresArray = []

  if (a.length > a[0].length){
    let tracker = a.length - a[0].length
    let start = 0;
    let end = a[0].length
    while( tracker >= 0){
      squaresArray.push(a.slice(start, end))
      start = start + 1
      end = end + 1
      tracker = tracker - 1
    }
    console.log(squaresArray)
    return squaresArray
  }

  if (a.length < a[0].length){

   let size = a[0].length - a.length
   let start = 0
   let end = a.length
    for (let i = 0; i <= size; i++ ){
      let square = []
      for (let j = 0; j < a.length; j++){
        square.push(a[j].slice(start, end))
      }
      squaresArray.push(square)
      start = start + 1
      end = end + 1
    }
  }
  return squaresArray
}


solution(
[
[7, 2, 4, 5], 
[2, 7, 6, 5], 
])

function checkSquares(a){
  for (let t = 0; t < a.length; t++){
     checkSquare(a[t])   
    }
}

function checkSquare(a){
   let sum = a[0].reduce(
    ( accumulator, currentValue ) => accumulator + currentValue, 0);
    
    let columnSums = new Array(a.length).fill(null)

    for (let i = 0; i < a[0].length; i++){
      //check rows
      if (a[i].reduce(
    ( accumulator, currentValue ) => accumulator + currentValue, 0) !== sum){
    return false
    }
    //check columns

     for (j = 0; j < a[i].length; j++){
      columnSums[j] = (columnSums[j] + a[i][j])
     }
    console.log('column sums: ', columnSums)
  }
}



// solution(
// [
// [7, 2, 4], 
// [2, 7, 6], 
// [9, 5, 1], 
// [4, 3, 8], 
// [3, 5, 4]
// ])



