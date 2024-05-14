//1---
// let numbers = [3, 4, 5, 6, 7];
// let reversed = numbers.reverse();
// console.log(reversed);


//2---
// let x = 10; 
// let y = '10'; 

// if (x == y) {
//     console.log("x va y teng");
// } else {
//     console.log("x va y teng emas");
// }

// if (x === y) {
//     console.log("x va y teng");
// } else {
//     console.log("x va y teng emas");
// }
// == bu malumotni ichidagi qiymatiga qaraydi bunda ichidagi qiymat teng bolsa true qaytaradi
// === bu malumotni turiga qaraydi agar bitasi number ikkinchisi string bolsa false qaytaradi


//3---
// function number(str) {
//     if (str === 1) {
//         return [1];
//     } else {
//         let res = number(str - 1);
//         res.push(str);
//         return res;
//     }
// }
// let sum = 5;
// let arr = number(sum);
// console.log(arr); 


//4---
// function func(str) {
//     let odd = str.filter(res => res % 2 !== 0);
//     let even = str.filter(res => res % 2 === 0);
//     let oddAll = odd.reduce((sum, ol) => sum + ol, 0);
//     let evenAll = even.reduce((sum, ol) => sum + ol, 0);
//     return [oddAll, evenAll];
// }
// let str = [12, 3, 23, 35, 46, 67];
// let natija = func(str);
// console.log(natija);  


//5---
// function func(str) {
//     let newstr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== "!") {
//             newstr += str[i];
//         }
//     }
//     return newstr;
// }
// let oldstr = "salom!";
// let newstr = func(oldstr);
// console.log(newstr);


//6---
// function func(array1, array2) {
//     let res = 0;
//     for (let i = 0; i < array1.length; i++) {
//         res += array1[i];
//     }
//     for (let i = 0; i < array2.length; i++) {
//         res += array2[i];
//     }
//     return res;
// }
// let first = [1, 2, 3];
// let third = [4, 5, 6];
// let res = func(first, third);
// console.log(res);  


//9---
// function deleteFunc(string) {
//     let newstr = string.replace(0, '');
//     return newstr;
// }
// let oldstr = "123450";
// let newstr = deleteFunc(oldstr);
// console.log(newstr);  