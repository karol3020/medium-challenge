// // function filterOutFalsy(value1, value2){
// //     return !value1 ? value1 : value2
// // }

// // console.log(filterOutFalsy(true,'Dog'))

// // // function arrLength(arr){
// // //     return arr.length;
// // // }

// // // console.log(arrLength([1,2,3]));

// // // function arrLength(arr){
// // //     return arr[arr.length - 1];
// // // }

// // // console.log(arrLength([3,2,0,6,2]));

// // // function arrSum(arr) {
// // //     let sum = 0;
// // //     for (let i = 0; i < arr.length; ++i){
// // //         //this is how to loop through every element in array
// // //         sum = sum + arr[i]
// // //     }
// // //     return sum;
// // // }

// // // console.log(arrSum([100,200,500]))

// // function progressiveSum(num){
// //     let sum2 = 0
// //     for (let i = 1; i <= num; ++i ) {
// //         sum2 = sum2 + i;
// //     }
// //         return sum2;
// //     }

// // console.log(progressiveSum(3));

// function calcTime(seconds){
//  let timerMinutes = Math.floor(seconds / 60);
//  let timerSeconds = seconds % 60; 

//  if (timerMinutes.toString().length === 1){
//     timerMinutes = '0' + timerMinutes
//  }
//  return timerMinutes + ':' + timerSeconds;
// }

// console.log(calcTime(300))

function getMax(arr){
   let max = arr[0];
   for (let i = 1; i < arr.lenght; ++i){
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}
console.log(getMax([1000,3,500]))

//Incrementing loop

// function reverseString(str){
// let reversedString = '';
// for (let i = 0; i < str.length; ++i){
//    reversedString = str[i] + reversedString;
// }
// return reversedString;
// }

// console.log(reverseString("abc"));

//Decrementing

// function reverseString(str){
//    let reversedString = '';
//    for (let i = str.length - 1; i >= 0; --i){
//       reversedString = reversedString + str[i]
//    }
//    return reversedString;
// }

// console.log(reverseString('abc'));

//Array reverse property

function reverseString(str){
   return str.split('').reverse().join(''); 
}

console.log(reverseString('abc'));

//solution 1 FOR LOOP

// function convertToZeros(array){
//    let newArray = [];
// for (let i = 0; i < array.length; ++i){
//    newArray[i] = 0
// }
// return newArray;
// }

// console.log(convertToZeros([1, 2, 3, 4, 5, 6]))

//SOLUTION 2 ARRAY FILL

// function convertToZeros(array){
//    return new Array(array.length).fill(0);
// }

// console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

//SOLUTION 3 ARRAY MAP

// function convertToZeros(array){
//    return array.map(elem => 0)
// }

// console.log(convertToZeros([1, 2, 3, 4, 5, 6]));


//FILTER SOLUTION 1 

// function removeApples(arr){
//    let newArr = []
//    for(let i = 0; i < arr.length; ++i){
//     if (arr[i] !== 'Apple'){
//       newArr.push(arr[i]);
//     }  
//    }
// return newArr;
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))

//Array Filter solution

function removeApples(arr){
return arr.filter(elem => elem !== 'Apple')
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))

//filter sol 1 falsy 

function filterOutFalsy(arrayy){
let newArrayy = []
for(let i = 0; i < arrayy.length; ++i){
   if (!!arrayy[i] === true){
      newArrayy.push(arrayy[i]);
   }
}
return newArrayy;
}

console.log(filterOutFalsy(["",[],0,null,undefined,"0"]))

//filter 2 sol filter

// function filterOutFalsy(arrayy){
//  return arrayy.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(["",[],0,null,undefined,"0"]))


//TRUTHY TO TRUE ETC.

function convertToBoolean(aar){
   return aar.map(elem => !!elem)
}

console.log(convertToBoolean([500,0,"Karol","",[]]))