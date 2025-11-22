// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// multiply the other elements in array
// const a1 = [3, 4, 5];
// const a2 = [];
// for (const x in a1) {
//     let temp = 1;
//     for (const y in a1) {
//         if (x != y) {
//             temp *= a1[y]
//         }
//     }
//     a2.push(temp);
// }
// console.log(a2);

//merge two arrays and sort them all
// const a1 = [1, 3, 5, 7];
// const a2 = [3, 7, 8, 4];

// const mergedarr = [...a1, ...a2]
// console.log(mergedarr);

// mergedarr.sort(function (a, b) { return a - b })
// console.log(mergedarr);
// const newarr = [];

// mergedarr.forEach((curr, i, arr) => {
//     if (curr !== arr[i + 1]) {
//         newarr.push(curr);
//     }
// })

// console.log(newarr);

// Find the duplicate string and the first index occurance of it
// const str1 = 'Whale is a mammal';
// const str2 = str1.replace(/ +/g, "");
// console.log(str2);
// let dupStr, indexOfDupStr, foundSwitch;

// for (const i in str2) {
//     for (const j in str2) {
//         if (i != j) {
//             if (str2[i] == str2[j]) {
//                 console.log(str2[j]);
//                 dupStr = str2[j]
//                 foundSwitch = true;
//                 break;
//             }
//         }
//     }
//     if (foundSwitch) {
//         break;
//     }
// }
// console.log(`Duplicate string is '${dupStr}' and the index of it's first occurance is ${str1.indexOf(dupStr)}`);

//New approach:
// function findFirstDuplicateChar(str) {
//   // Create an object to store characters and their first occurrence index
//   const charMap = {};

//   // Iterate through each character in the string
//   for (let i = 0; i < str.length; i++) {
//       const char = str[i];

//       // Check if the character is already in the map
//       if (charMap.hasOwnProperty(char)) {
//           // If found, return the character and its first occurrence index
//           return { character: char, firstIndex: charMap[char] };
//       }

//       // Otherwise, add the character to the map with its index
//       charMap[char] = i;
//   }

//   // If no duplicate is found, return null
//   return null;
// }

// // Example usage:
// const inputString = "Whale is a mammal";
// const str2 = inputString.replace(/ +/g, "");

// const result = findFirstDuplicateChar(str2);

// if (result) {
//   console.log(`First duplicate character: ${result.character}, First index occurrence: ${result.firstIndex}`);
// } else {
//   console.log("No duplicate characters found.");
// }

//String reverse:
// function stringReverse(str) {
// 	return str.split('').reverse().join('')
// }

// const str1 = 'hello world';
// console.log(stringReverse(str1))


//Add array
// function reduce(arr) {
// 	return sum = arr1.reduce((acc,curr) => acc+curr, 0);	
// }

// const arr1 = [1, 2, 3, 40, 60]
// console.log(reduce(arr1))

//MERGE MULTIPLE ARRAYS:
// const arrayMerge = (...props) => {
//     console.log(props);
//     const newArr = [];
//     for (const ele of props) {
//         newArr.push(...ele)
//     }
//     return newArr
// }
// console.log(arrayMerge([1, 2, 3], [4, 5, 6], [7, 8]));

//Object looping

// const obj = [{
//     name: 'Surya',
//     details: {
//         age: 30,
//         qualification: 'B.Tech',
//         location: 'Thanjavur'
//     },
//     country: "India"
// },
// {
//     name: 'Ram',
//     details: {
//         age: 27,
//         qualification: 'B.E',
//         location: 'Chennai'
//     },
//     country: "India"
// }
// ]

// const modObjValue = Object.values(obj);
// const modObjKeys = Object.keys(obj);
// const modObjEntry = Object.entries(obj);
// console.log(modObjValue);
// console.log(modObjKeys);
// console.log(modObjEntry);

// for (const [key, { name, details, country }] of modObjEntry) {
//     console.log(name, details.age, details.qualification, details.location, country);
//     console.log(name, details, country);
// }

// for (const { name, details, country } of modObjValue) {
//     console.log(name, details.age, details.qualification, details.location, country);
// }

// finding minumum difference between two array elements
// const arr1 = [24, 59, 61, 32, 13, 83, 52];
// arr1.sort(function (a, b) { return a - b })
// console.log(arr1);
// let temp=100;
// let horse1, horse2 = 0;
// // const arr2 = []; --> I can remove this 
// // const arr3 = []; --> I can remove this
// for (const i in arr1) {
//     for (const j in arr1) {
//         if (i !== j) {
//             if ((arr1[j] - arr1[i]) > 0) {
//                 if ((arr1[j] - arr1[i]) < temp) {
//                     temp = arr1[j] - arr1[i];
//                     horse1 = arr1[i];
//                     horse2 = arr1[j];
//                 }
//                 // arr2.push(arr1[j] - arr1[i])
//             } 
//             // else {
//             //     arr3.push(arr1[j] - arr1[i])
//             // }
//         }
//     }
// }
// console.log(horse1, horse2);
// if (typeof (horse1) !== 'undefined') { console.log('Horse1:', horse1, '& Horse2:', horse2, 'can compete with each other'); }

//Fetching alphabets from number combination

// const alpha = new Map([
//     [1, 'a'],
//     [2, 'b'],
//     [3, 'c'],
//     [4, 'd'],
//     [5, 'e'],
//     [6, 'f'],
//     [7, 'g'],
//     [8, 'h'],
//     [9, 'i'],
//     [10, 'j'],
//     [11, 'k'],
//     [12, 'l'],
//     [13, 'm'],
//     [14, 'n'],
//     [15, 'o'],
//     [16, 'p'],
//     [17, 'q'],
//     [18, 'r'],
//     [19, 's'],
//     [20, 't'],
//     [21, 'u'],
//     [22, 'v'],
//     [23, 'w'],
//     [24, 'x'],
//     [25, 'y'],
//     [26, 'z'],
// ])

// const extract = ['0', '1', '2'];
// const tempArr = [];
// extract.forEach((curr, i, arr) => {
//     for (const x of arr) {
//         if (x === '0') {
//         } else {
//             if ((x + curr) <= 26) {
//                 console.log(x + curr);
//                 tempArr.push(x + curr);
//             }
//         }
//     }
// })

// const newArr = [...extract, ...tempArr];

// newArr.forEach((curr) => {
//     console.log(alpha.get(parseInt(curr)));
// })

//Splice
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let arg1 = 2;
// let arg2 = 5;
// const newArr = [];
// let count = 1
// arr1.forEach((curr, i) => {
//     if (i >= arg1 && count <= arg2) {
//         count += 1;
//     } else {
//         newArr.push(curr)
//     }
// })
// arr1 = newArr
// console.log(arr1);

//Sort Array of objects:
// const arr = [
//     {
//         id: 1,
//         name: 'Surya',
//         location: 'Tanj'
//     },
//     {
//         id: 2,
//         name: 'Ram',
//         location: 'Che'
//     },
//     {
//         id: 3,
//         name: 'Harish',
//         location: 'USA'
//     },
//     {
//         id: 2,
//         name: 'Ram',
//         location: 'Che'
//     }
// ]

// arr.sort((a, b) => {
//     let fa = a.location.toUpperCase(),
//         fb = b.location.toUpperCase();

//     if (fa < fb) {
//         return -1;
//     }
//     if (fa > fb) {
//         return 1;
//     }
//     return 0;
// });
// console.log(arr);

// for (const i in arr) {
//     let temp = arr[i].id;
//     for (const j in arr) {
//         if (i !== j) {
//             if (temp === arr[j].id) {
//                 console.log('matchFound', j, arr[i]);
//             }
//         }
//     }
// }

//INCEDO Problems
//problem 1:
const arrNumbers = [0, 1, 2, 3, 5]
// const arrNumbers = [5, 9, 1, 10]
// const output = [0, 1, 2, 3, 5,
// 0, 1, 3, 6, 11]
// 0 + 1 = 1;  // 1 + 2 = 3;  // 3 + 3 = 6; // 6 + 5 = 11

// const newArr = [];

// let temp = 0;
// arrNumbers.forEach((curr, i, arr) => {
//     // console.log(curr, i);
//     // if (i <= arr.length - 1) {
//         // temp = curr + arr[i + 1];
//         temp += curr;
//         console.log(curr, temp);
//         newArr.push(temp);
//     // }
// })

// const finalArr = [...arrNumbers, ...newArr]
// console.log(finalArr);

//note: I have taken the current and next item of every element in the main array and added them to produce the result.
//I later merged the resultant array with the main array to create the final output.

//Problem2:
// let alpha = new Map[
//     [1, 'a'],
//     [2, 'b']
// ]

// let alpha = {
//     1: 'a',
//     2: 'b',
//     3: 'c',
//     4: 'd',
//     5: 'e',
//     6: 'f',
//     7: 'g',
//     8: 'h',
//     9: 'i',
//     10: 'j',
//     11: 'k',
//     12: 'l',
//     13: 'm',
//     14: 'n',
//     15: 'o',
//     16: 'p',
//     17: 'q',
//     18: 'r',
//     19: 's',
//     20: 't',
//     21: 'u',
//     22: 'v',
//     23: 'w',
//     24: 'x',
//     25: 'y',
//     26: 'z',
// }
// let str = '';
// console.log(alpha);
// for (let i = 1; i <= 26; i++) {
//     str += alpha[i]
//     console.log(str);
// }

// VAR hoisting:

// console.log(variable);
// console.log(typeof variable);
// var variable = 1;
// console.log(variable);
// console.log(typeof variable);

// function currencyCheck(strAmount) {
//   let numcheck = false;

//   for (const x in strAmount) {
//     if(((x === 0) || (x === 1)) && (strAmount[x] === '-' )||(strAmount[x] ===  '$') ||( strAmount[x] === '€' )|| (strAmount[x] === '¥')) {
//         // testcase1 = true;
//         console.log(strAmount)
//         return strAmount;
//         break;
//     }
//   }
// }

// currencyCheck("$22");

// function solution(A) {
//     A.sort((a,b) => {return a-b})
//     // console.log(Array.isArray(A))
//     let temp;
//     let difference;
//     let resultNum;
//     let numSwitch = false;

//     for(const i in A) {
//       temp = A[i];
//       for(const j in A) {
//         if (j > i) {
//           console.log(temp, A[j]);
//           if(temp === A[j]) {
//             // console.log('eq', A[j]);
//             break;
//           } else {
//             if(A[j] - temp === 1) {
//               // console.log('eq1',A[j]);
//               break
//             } else {
//               difference = A[j] - temp;   
//               console.log(difference)
//               console.log(A[j]);
//               resultNum = temp +1;
//               numSwitch = true;
//               return resultNum;
//             }
//           }
//         }
//       }
//       // A.forEach((curr,i,arr) => {
//       //   temp = curr;
//       // });
//     }
//     // return A
//     if(!numSwitch) {
//       let arrayLen = A.length;
//       let newNum ;
//       console.log(A[arrayLen-1]);
//       newNum = A[arrayLen-1] + 1
//       console.log('here', newNum)
//       return newNum
//     }
// }

// const result = solution([1,3,6,4,1,2]);
// console.log(result);

// const result1 = solution([1,2,3]);
// console.log(result1);


// function solution(S) {
//   let str1 = S.replace(/minus/g,'-');
//   let str2 = str1.replace(/plus/g,'+');
//   return str2;
// }

// const result = solution('minusplusminus')
// console.log(result);

//d1g1t code challange:
// function findIdInTreeByValue(items,value) {
//     // console.log(items,value)
//     items.forEach((curr) => {
//         if(curr.values.includes(value)){
//             console.log(curr.id)
//         };
//         if(curr.children) {
//             curr.children.forEach((i)=> {
//                 if(i.values.includes(value)){
//                     console.log(i.id)
//                 };
//                 if(i.children) {
//                     i.children.forEach((j) => {
//                         if(j.values.includes(value)){
//                             console.log(j.id)
//                         };

//                     })
//                 }
//             })
//         }
//     })
// }
// const items = [
//   {id: 1, values: [100, 101]},
//   {id: 2, values: [200, 201]},
//   {id: 3, values: [300, 301], children: [
//     {id: 10, values: [1000, 1001]},
//     {id: 9, values: [900, 901]},
//     {id: 8, values: [800, 801], children: [
//       {id: 7, values: [700, 701]},
//       {id: 6, values: [600, 601]}
//     ]}
//   ]}
// ]

// findIdInTreeByValue(items,601)

// function findIdInTreeByValue(items, value) {
//     let x;
//     items.forEach((curr) => {
//       if (curr.values.includes(value)) {
//           x = curr.id
//       }
//       else if (curr.children) {
//         curr.children.forEach((i) => {
//           if (i.values.includes(value)) {
//             x = i.id;
//           }
//           else if (i.children) {
//             i.children.forEach((j) => {
//               if (j.values.includes(value)) {
//                 x = j.id;
//               }
//             });
//           }
//         });
//       }
//     });
//     return x;
//   }
  
//   const items = [
//     { id: 1, values: [100, 101] },
//     { id: 2, values: [200, 201] },
//     {
//       id: 3,
//       values: [300, 301],
//       children: [
//         { id: 10, values: [1000, 1001] },
//         { id: 9, values: [900, 901] },
//         {
//           id: 8,
//           values: [800, 801],
//           children: [
//             { id: 7, values: [700, 701] },
//             { id: 6, values: [600, 601] }
//           ]
//         }
//       ]
//     }
//   ];
  
//   let findId = findIdInTreeByValue(items, 7001);
//   console.log(findId);
// //    findId = findIdInTreeByValue(items, undefined);
// //   console.log(findId);
// //    findId = findIdInTreeByValue(items, 1001);
// //   console.log(findId);
// //Problem 2:

// function consecutiveNumbersLength(arr) {
//     arr.sort((a,b) => {return a-b});
//     let temp;
//     let consecNum = 0;
//     const tempArr = [];
//     arr.forEach((curr,i) => {
//         if (i===0) {
//             temp = curr;
//             consecNum = 1;
//             tempArr.push(consecNum);
//         }
//         if (i!==0) {
//             if(curr == (temp + 1)) {
//                 consecNum += 1;
//                 tempArr.push(consecNum);
//             } else {
//                 consecNum = 1;
//             }
//             temp = curr;
//         } 
//         // console.log(consecNum)
//     }
//     )
//     // console.log(tempArr)
//     if(tempArr.length > 0) {
//         return Math.max(...tempArr);
//     } else {
//         return 0;
//     }
// } 

// let consecutive = consecutiveNumbersLength([8, 4, 2, 1, 6, 5]) // => 3 (4,5,6)
// console.log(consecutive);
// consecutiveNumbersLength([5, 5, 3, 1]) // => 1
// // console.log(consecutive);
// consecutiveNumbersLength([]) // => 0
// // console.log(consecutive);

// // 
// // import "./styles.css";
// // import React from "react";

// // export default function App() {
// //   let reactNode, stringFound, modifiedText, seperatedText1, seperatedText2;

// //   function highlightMatch(text, highlight) {
// //     stringFound = false;
// //     let strPos = text.toLowerCase().search(highlight.toLowerCase());
// //     console.log(strPos);
// //     if (strPos >= 0) {
// //       stringFound = true;
// //     }
// //     let strLen = highlight.length;
// //     let strAftr = strPos + strLen;
// //     seperatedText1 = text.slice(0, strPos);
// //     seperatedText2 = text.slice(strAftr);
// //     modifiedText = text.slice(strPos, strAftr);
// //     reactNode = React.createElement("strong", { id: null }, modifiedText);
// //   }
// //   highlightMatch("Hello CodeSandbox", "ll");

// //   return (
// //     <div className="App">
// //       {stringFound && (
// //         <p>
// //           {seperatedText1}
// //           {reactNode}
// //           {seperatedText2}
// //         </p>
// //       )}
// //       <h2>Start editing to see some magic happen!</h2>
// //     </div>
// //   );
// // }

// const test1 = [
//   {name: 'Mutharkanal',
// price: 200,},
// {
//   name: 'Mazhaipadal',
//   price: 300
// },
// {
//   name: "Neelam",
//   price: 150
// }
// ]

// console.log(test1[0])
// const names = test1.find(t=> t.name === "Mazhaipadal");
// console.log(names.price);
// names.price += 50;
// console.log(names);
// console.log(test1);


//CLosures
// let f;
// const g = () => {
//   let a =10; 
//   f = function() {
//     console.log(a*2)
//   }
// }

// g()
// console.log(typeof(f));

// let ar = [1,2 ,3 ,4 ,5 ,6 ,10, 7, 15, 13, 16, 19, 21, 40, 45, 87, 37];
// ar.sort((a,b) => a-b)
// let midIndex = (ar.length-1)/2
// let section1 = ar.slice(0,midIndex)
// let section2 = ar.slice(midIndex).sort((a,b) => b-a)

// const newArr = [...section1, ...section2];
// console.log(newArr);

// const str1 = 'Whale is a mammal';
// let newStr = str1.toLowerCase().replaceAll(' ', '').split('');
// for(let i of newStr) {
//   if(newStr.indexOf(i) !== newStr.lastIndexOf(i)) {
//     console.log(i, newStr.indexOf(i));
//     break
//   }
// }

//

let n = 7, p=4;
const totalFlips = Math.floor(n/2);
const myP = Math.floor(p/2);
return Math.min(myP, totalFlips - myP);

// Ouput [[0, 12], [1, 11], [2, 10], [3, 9], [4, 8], [5, 7], [6, 6]]
let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12];
const num = 12
function changeContent (arr, num) {
    let pairs = [];
    let finalArr = [];
    arr.forEach((curr) => {
        let temp = num - curr
        if(arr.includes(temp)) {
            pairs.push(curr, temp)
            finalArr.push(pairs)
            pairs = []
            arr = arr.filter(x => x !== curr)
        }
    })
    console.log(finalArr);
}


//Recursive 
function sum(x) {
  function inner(y) {
    if (y === undefined) return x;   // when final () is called
    x += y;
    return inner;                   // return the same function for chaining
  }
  return inner;
}

console.log(sum(9)(8)(9)()); // 26
console.log(sum(1)(2)(3)(4)()); // 10
console.log(sum(5)()); // 5
changeContent(arr, num);
