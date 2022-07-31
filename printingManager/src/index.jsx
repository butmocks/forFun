

function getSpecialNumbers(from, to) {
  let specialNumbers = [];

  for (let i = 0; i <= to; i++) {
    if (i % 4 !== 0) {
      specialNumbers.push(i+1);
      // console.log(i)
    } else {
      specialNumbers.push(i+5);
    }
    

  }
  return specialNumbers;

}

const specialNumbers = getSpecialNumbers(1, 80);

console.log(specialNumbers); // 5, 2, 3, 4, 9, 6, 7, 8, 13, 10, 11, 12, 17, 14, 15, 16, 21, 18, 19, 20, 25, 22, 23, 24, 29, 26, 27, 28, 33, 30, 31, 32, 37, 34, 35, 36, 41, 38, 39, 40, 45, 42, 43, 44, 49, 46, 47, 48, 53, 50, 51, 52, 57, 54, 55, 56, 61, 58, 59, 60, 65, 62, 63, 64, 69, 66, 67, 68, 73, 70, 71, 72, 77, 74, 75, 76, 81, 78, 79, 80, 85]



// function getSpecialNumbers1(from, to) {
//   let specialNumbers1 = [];

//   for (let i = 0; i <= to; i++) {
//     if (i % 3 !== 0) {
//       specialNumbers1.push(i);
//       // console.log(i)
//     } else { return 
//       specialNumbers1.push(i+4);


//     }
    
//   }
//   return specialNumbers1;
// }

// const specialNumbers1 = getSpecialNumbers1(1, 80);

// console.log(specialNumbers1); // [4, 1, 2, 3, 8, 5, 6, 7, 12, 9, 10, 11, 16, 13, 14, 15, 20, 17, 18, 19, 24, 21, 22, 23, 28, 25, 26, 27, 32, 29, 30, 31, 36, 33, 34, 35, 40, 37, 38, 39, 44, 41, 42, 43, 48, 45, 46, 47, 52, 49, 50, 51, 56, 53, 54, 55, 60, 57, 58, 59, 64, 61, 62, 63, 68, 65, 66, 67, 72, 69, 70, 71, 76, 73, 74, 75, 80, 77, 78, 79, 84]