// for printing elements of an array

// let heroes=["ironman","thor","antman","loki","captain"];
// for(let i=0;i<5;i++){
//     console.log(heroes[i]);
// }
// ****************************************************************************
// Practise question 1

// let marks=[34,56,78,89,90];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }

// BY FOR OF LOOP
// for(let val of marks){
//     sum+=val;
// }

// let avg=sum/marks.length;
// console.log(`avgerage of marks is: ${avg}`);



// Practise question 2

// let iniprice=[250,645,300,900,50];
// let disprice=[];
// for(let i=0;i<iniprice.length;i++){
//     disprice[i] =iniprice[i]-(0.1*iniprice[i]);
//     console.log(disprice[i]);
//     iniprice[i]=disprice[i];
// }
// console.log(iniprice);


// Using for of loop
// let iniprice=[250,645,300,900,50];
// let i=0;

// for(let val of iniprice){
//     console.log(`THe value of initial index ${i} price= ${iniprice[i]}`);
//     let offer = val/10;
//     iniprice[i]=iniprice[i]-offer;
//     console.log(`Final price is ${iniprice[i]}`);
//     i++;
// }


// Practise questions 3
// let comp=["ama","flip","meta","google","netflix"];
// comp.shift();
// console.log(comp);
// comp.unshift("amazon");
// console.log(comp);
// comp.splice(3);
// console.log(comp);
// **************************************************************************************888

// PUSH, POP

// let iniprice=[23,34,45,56];
// iniprice.push(69,"piyush");
// console.log(iniprice);
// iniprice.pop();
// console.log(iniprice);

// console.log(iniprice.toString());
// console.log(iniprice);
