// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//multiply the other elements in array
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

//Find the duplicate string and the first index occurance of it
// const str1 = 'Indzb is a coutryz';
// const str1 = 'India is a coutry';
// const str2 = str1.replace(/ +/g, "");
// console.log(str2);
// const str3 = [];
// let foundSwitch;
// for (const i in str2) {
//     for (const j in str2) {
//         if (i != j) {
//             if (str2[i] == str2[j]) {
//                 console.log(str2[j]);
//                 str3.push(str2[j]);
//                 foundSwitch = true;
//                 break;
//             }
//         }
//     }
//     if (foundSwitch) {
//         break;
//     }
// }
// console.log(str1.indexOf(str3[0]));

//String reverse:
// const str1 = 'hello world';
// const arr = [];
// let reverseChar = '';
// for (let i = str1.length - 1; i >= 0; i--) {
//     arr.push(str1[i]);
//     reverseChar += str1[i];
// }
// console.log(arr.join(''));
// console.log(reverseChar);

//Add array 
// const arraySum = props => {
//     let temp = 0;
//     for (const i of arr1) {
//         temp += i;
//     }
//     return temp;
// }
// const arr1 = [1, 2, 3, 40, 60];
// console.log(arraySum(arr1));

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
// const arr1 = [4, 9, 1, 32, 13, 3, 2];
// arr1.sort(function (a, b) { return a - b })
// console.log(arr1);
// let temp = 1000000000;
// let horse1, horse2 = 0;
// const arr2 = [];
// const arr3 = [];
// for (const i in arr1) {
//     for (const j in arr1) {
//         if (i !== j) {
//             if ((arr1[j] - arr1[i]) > 0) {
//                 if ((arr1[j] - arr1[i]) < temp) {
//                     temp = arr1[j] - arr1[i];
//                     horse1 = arr1[i];
//                     horse2 = arr1[j];
//                 }
//                 arr2.push(arr1[j] - arr1[i])
//             } else {
//                 arr3.push(arr1[j] - arr1[i])
//             }
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
const arr = [
    {
        id: 1,
        name: 'Surya',
        location: 'Tanj'
    },
    {
        id: 2,
        name: 'Ram',
        location: 'Che'
    },
    {
        id: 3,
        name: 'Harish',
        location: 'USA'
    },
    {
        id: 2,
        name: 'Ram',
        location: 'Che'
    }
]

arr.sort((a, b) => {
    let fa = a.location.toUpperCase(),
        fb = b.location.toUpperCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.log(arr);

for (const i in arr) {
    let temp = arr[i].id;
    for (const j in arr) {
        if (i !== j) {
            if (temp === arr[j].id) {
                console.log('matchFound', j, arr[i]);
            }
        }
    }
}

//INCEDO Problems
//problem 1:
// const arrNumbers = [0, 1, 2, 3, 5]
const arrNumbers = [5, 9, 1, 10]
const output = [0, 1, 2, 3, 5,
    0, 1, 3, 6, 11]
// 0 + 1 = 1;  // 1 + 2 = 3;  // 3 + 3 = 6; // 6 + 5 = 11

const newArr = [];

let temp = 0;
arrNumbers.forEach((curr, i, arr) => {
    // console.log(curr, i);
    if (i + 1 <= arr.length) {
        // temp = curr + arr[i + 1];
        temp += curr;
        console.log(curr, temp);
        newArr.push(temp);
    }
})

const finalArr = [...arrNumbers, ...newArr]
console.log(finalArr);

//note: I have taken the current and next item of every element in the main array and added them to produce the result.
//I later merged the resultant array with the main array to create the final output.


//Problem2:
// let alpha = new Map[
//     [1, 'a'],
//     [2, 'b']
// ]

let alpha = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j',
    11: 'k',
    12: 'l',
    13: 'm',
    14: 'n',
    15: 'o',
    16: 'p',
    17: 'q',
    18: 'r',
    19: 's',
    20: 't',
    21: 'u',
    22: 'v',
    23: 'w',
    24: 'x',
    25: 'y',
    26: 'z',
}
let str = '';
console.log(alpha);
for (let i = 1; i <= 26; i++) {
    str += alpha[i]
    console.log(str);
}