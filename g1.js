// map function is used to return array
// let arr=[2,5,8];
// let newArray = arr.map((element,idx,arr)=>{
//   //  console.log(element,idx,arr);
//   if(idx<2){
//     return element*element;
//   }else{
//     return element;
//   }
   
// });
// console.log(newArray);



//filter function
// let arr=[2,6,3,9,8];
// let newArray=arr.filter((element,idx,arr)=>{
//    // console.log(element,idx,arr);
//    if(element%2==0){
//      return true;
//    }else{
//     return false;
//    }
// });
// console.log(newArray);


 
// reduce function always return single value otherwise it will return undefined
// let arr=[2,6,3,9,8]; // reduce function takes call back function & initial value
// let newArray=arr.reduce((acc,curr,idx,arr)=>{//(acc,curr,idx,arr)-> call back function
//     if(idx>=2){
//          acc=acc+curr;
   
//     } 
//     console.log(acc,curr,idx,arr);
//     return acc;

// },0);// 0 is initial value(accumulator)
// console.log(newArray);




// let arr=Math.max(1,2,3,4,5);
// console.log(arr);
// let ans = Math.min(1,2,3,4,5);
// console.log(ans);




// // (==) check only data & (===) check data and type of data 
// if(2=="2"){ 
//     console.log("hello");
// }
// else{
//     console.log("bye");
// }


// pre defined methods

// let arr=[2,5,7,9];
// //arr.push(23);
// //arr.pop(); // remove last element
// //arr.shift();// remove 1st element
// //arr.unshift(100);//add 100 at first position
// console.log(arr);



// // sorting 
// let ans=[111,2,55,7,9]
// //let ans =["bd","ab","abc","a"];

// ans.sort(); // its sort in lexographic order

// ans.sort((a,b)=>{ 
//    return a+b;
// });
// console.log(ans);

let str ="chiTkara University";
console.log(str.toUpperCase());