// //  JS Accept two integers and display the larger
// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }


// // JS Conditional Statement and loops
// var sum =0;
// for (let x = 0; x < 1000; x++) {
//   if (x % 3 === 0 || x % 5 === 0)
//   {
//     sum += x;
//   }
// }
// console.log(sum);


function jumlahColumn(a,b){
volumeA = a * a * a;
volumeB = b * b * b;

let total = volumeA + volumeB;

return total;
}

console.log(jumlahColumn(3,8));