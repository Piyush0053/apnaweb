// FUnction 2 numbers sum

// function sum(x,y){
//     //  local variables-> scope
//     s=x+y;
//     return s;
// }   
 
// let val= sum(3,4);
// console.log(val);


// Arrow Function 

// sum function
// const sum = (a,b) => {
//     return a+b;
// }

// let val =sum(3,4);
// console.log(val);

// const mul=(a,b)=>{
//    console.log(a*b); 
// };

// *************************************
// practise ques 1

// Create a function using the "function keyword that takes a string as an arguememnt & returns the number of vowels in the string."
// function countVowels(str){
//     let count=0;
//     for(let char of str){
// if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//     count++;
//         }   
//     }
//     console.log(`count= ${count}`);
// } 

// practiseques 2 using Arrow function
// const countVowels=(str)=>{
//     let count=0;
//          for(let char of str){
//      if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//          count++;
//              }   
//          }
//          console.log(`count= ${count}`);   
// }

// *******************************************************************************

//  for each loop

// let arr=[1,2,34,5];

// arr.forEach(function printVal(val)
// // val mai for each loop value dega.
// {
//     console.log(val);
// }
// )

// let arr=["pune","west","chest","piyu"];

// arr.forEach((val)=>{
//     console.log(val);
// })

// ***************************

// Practise question 4
// let arr=[1,2,3,4,5,6];

// arr.forEach((val)=>{
//     console.log(val*val);
// });

//  ******************************

// Map array

// let arr=[1,2,3,4,55];

// let newArr=arr.map((val)=>{
//     return val;
// });
// console.log(newArr);

// Reduce array
// let arr=[1,2,3,4,5];

// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// });

// console.log(output);


// ********************************
// practise ques 5

// let arr=[12,45,67,89,90,91,99]

// let filtrmark=arr.filter((val)=>{
//     return val>90;
// });

// console.log(filtrmark);

// pracctise ques 6

let n = prompt("Enter the no:");
let arr =[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}

console.log(arr);

 let sum=arr.reduce((res,curr)=>{
    return res*curr;
 });
 console.log(sum);