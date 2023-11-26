// FOR loop

// print 1 to 5
// for(let i=1;i<=5;i++){
//     console.log("Piyush Mittal");
// }


// calculate sum of 1 to n
// let n= prompt("enter the value of n");
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);

// WHILE loop

// let i=1;
// while(i<=5){
//     console.log("Sunny Leone");
//     i++;
// }
// console.log("Code has ended");

// for of loop

// let name="Piyushmittal";
// let size=0;
// for(let i of name){
//     console.log("i =" ,i);
//     size++;    
// }
// console.log("size is=", size);  

// for in loop

// let student={
//     name : "Sunny Leone",
//     age:20,
//     cgpa: 7.5,
// }
// for( let i in student ){
//     console.log("i=", i , "value=", student[i]);
// }

// *****************************************************************
// practise question 1
// Print all enev no from 1 to 100

// size=0;
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log("i=" ,i);
//         size++;
//     }
// }
// console.log("size=", size);

// ***********************************************************************


// Number guessing game
// practise question 2

// let num=34;
//  let guess=prompt("Guess the Number");
//  while(num != guess){
//     guess=prompt("you entered a wrong number");
//  }

//  console.log("Congratulations ");

// ***************************************************************

// TEMPLATE LITERALS
// let obj={
//    item:"pen",
//    price:20,
// };

// let output=`the cost of the ${obj.item} is ${obj.price} rupees`;

// console.log(output);

// *****************************************************************
// Escape character

// console.log("Piyush \nMittal");

//  let str = "ApnaPiyush";
// console.log(str.toUpperCase());

        // let str ="Piyusuh";
    // console.log(str.replaceAll("u","A"));


    // Practise 4

    let num= prompt("Enter theFull user name");
    let username="@"+num +num.length;
    console.log(username);
    
    