
// // q-1
// var number = prompt("Enter a number:"); // input the number
// console.log("You entered:", number); // Print the number to the console


// // q-2
// var number =0;  //declration
//  number = Number(prompt("Enter a number:"));
// if (number % 3 === 0 && number % 4 === 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }



// // q-3
// var num_1=0 , num_2=0;
//  num_1 = Number(prompt("Enter a num_1 "));
//  num_2 = Number(prompt("Enter a num_2 "));
//  if(num_1 > num_2 )     console.log("the max number is num_1 : ",num_1);
//  else     console.log("the max number is num_2 : ",num_2);


// // q-4
// var num=0;
//  num = Number(prompt("Enter a number "));
//  if(num >=0 )     console.log("the number is positive ");
//  else console.log("the max number is negative ");





// //q-5
// var num1 = Number(prompt("Enter Num-1"));
// var num2 = Number(prompt("Enter Num-2"));
// var num3 = Number(prompt("Enter Num-3"));
// var max, min;

// max = num1;
// min = num1;

// if (num2 > max) max = num2;// check  maximum
// if (num3 > max) max = num3;

// if (num2 < min) min = num2; // check  minimum
// if (num3 < min) min = num3;

// console.log("max number = " + max);
// console.log("min number = " + min);









// //q-6

// var num = 0;
// num = Number(prompt("Enter number"));
// if (!isNaN(num))  // chek value is number
// {
// if (num % 2 == 0 ) console.log(" even ");
// else console.log(" odd ");
// }












// // q-8
// var char = 0;
//char= prompt("Enter a character:");
// char = char.toLowerCase(); // Convert the character to lowercase to comparison
// if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//     console.log("vowel");
// } else {
//     console.log("consonant");
// }


// //q-9
// var i = 0;
// var x = prompt("Enter a number:");
// while (i < x )
//     {
//     i++; //  post increment
//     console.log(i);
//     }

//q-10

// var input_number = prompt("Enter an integer:");
// var input_number = parseInt(input_number);

// if (!isNaN(input_number)) // chek value is number
//      {
//     var result = "";
//     for (var i = 1; i <= 12; i++) {
//         result += (input_number * i); // save number in straing

//         if (i !== 12)
//         {
//             result += " ";  //for space in number
//         }
//     }
//     console.log(result);
// } else
// {
//     console.log("Please enter a valid integer Number");
// }



//q-11
// var input = prompt("Enter a number");
// var num = Number(input);
// // Check if its a valid number
// if (!isNaN(num))
//     {
//     var result = "";
//     for (var i = 1; i <= num; i++)
//         {
//         if (i % 2 == 0)     // check if the number is even

//         {
//             result += i + " ";
//         }
//     }
//     console.log(result);
// }
// else console.log("Please enter a valid number");


// //q-12
// var number = 0, power = 0, result = 1;
// number = prompt("Enter a number:");
// number = Number(number);

// power = prompt("Enter a power:");
// power = Number(power);

// if (!isNaN(number) && !isNaN(power)) {
//     for (var i = 1; i <= power; i++) {
//         result *= number;
//     }
//     console.log("Result:", result);
// }


// //q-12
// const Subjects= 5;
// const full_Mark= 500;
// var Microprocessors  = 0, Digital_Electronics = 0, Analog_Electronics = 0 ,Programming=0 ,Control_Systems=0 , total=0 , Average=0 , Percentage=0;
// Microprocessors = Number(prompt("Enter marks of Microprocessors:"));
// Digital_Electronics = Number(prompt("Enter marks of Digital Electronics:"));
// Analog_Electronics = Number(prompt("Enter marks of Analog Electronics:"));
// Programming = Number(prompt("Enter marks of Programming:"));
// Control_Systems = Number(prompt("Enter marks of Control Systems:"));
// total = Microprocessors + Digital_Electronics + Analog_Electronics + Programming + Control_Systems;
// Average = total / Subjects;
// Percentage = (total / full_Mark) * 100;
// console.log("Total Marks: " + total);
// console.log("Average Marks: " + Average);
// console.log("Percentage: " + Percentage + "%");


// //q-13

// var month, days ,mask=false;
// month = Number(prompt("Enter month number (1-12):"));
// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) days = 31;
// else if (month == 4 || month == 6 || month == 9 || month == 11) days = 30;
// else if (month == 2) days = 28;
// else
// {
//     mask=true;
//     console.log( "Invalid month number");
// }
// if (mask==false) console.log("Days in Month: " + days);


// //q-14
// const Subjects = 5;
// const full_Mark = 500;
// var Microprocessors = 0, Digital_Electronics = 0, Analog_Electronics = 0, Programming = 0, Control_Systems = 0, total = 0, Percentage = 0, grade = "";
// Microprocessors = Number(prompt("Enter marks of Microprocessors:"));
// Digital_Electronics = Number(prompt("Enter marks of Digital Electronics:"));
// Analog_Electronics = Number(prompt("Enter marks of Analog Electronics:"));
// Programming = Number(prompt("Enter marks of Programming:"));
// Control_Systems = Number(prompt("Enter marks of Control Systems:"));
// total = Microprocessors + Digital_Electronics + Analog_Electronics + Programming + Control_Systems;
// Percentage = (total / full_Mark) * 100;
// console.log(" ");
// if (Percentage >= 90) console.log("Percentage: " + Percentage + "%" + " Grade A");
// else if (Percentage >= 80) console.log("Percentage: " + Percentage + "%" + " Grade B");
// else if (Percentage >= 70) console.log("Percentage: " + Percentage + "%" + " Grade C");
// else if (Percentage >= 60) console.log("Percentage: " + Percentage + "%" + " Grade D");
// else if (Percentage >= 40) console.log("Percentage: " + Percentage + "%" + " Grade E");
// else console.log("Percentage: " + Percentage + "%" + " Grade F");



//------------------------------------------------------------------------------------------------//
// ----------------------------------------switch Case -------------------------------------------//
//------------------------------------------------------------------------------------------------//


// //q-15
// var month, days, mask = false;
// month = Number(prompt("Enter month number (1-12)"));
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         days = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         days = 30;
//         break;
//     case 2:
//         days = 28; // ignoring leap year
//         break;

//     default:
//         mask = true;
//         console.log("Invalid month number");
// }
// if (!mask) console.log("Days in Month: " + days);








// //q-16
// var char = 0;
// char = prompt("Enter a character ");
// char = char.toLowerCase(); // Convert the character to lowercase to comparison
// switch (char) {
//     case 'a':
//         console.log("vowel");
//         break;
//     case 'e':
//         console.log("vowel");
//         break;
//     case 'i':
//         console.log("vowel");
//         break;
//     case 'o':
//         console.log("vowel");
//         break;
//     case 'u':
//         console.log("vowel");
//         break;
//     default: console.log("consonant");
// }









// //q-17
// var num1 = Number(prompt("Enter first number"));
// var num2 = Number(prompt("Enter second number"));
// switch (true) {
//     case (num1 > num2):
//         console.log(num1 + " is maximum");
//         break;
//     case (num2 > num1):
//         console.log(num2 + " is maximum");
//         break;
//     default:
//         console.log("Both numbers are equal");
// }











// //q-18
// var num = Number(prompt("Enter a number"));
// switch (num % 2) {
//     case 0:
//         console.log("Even");
//         break;
//     case 1:
//     case -1:
//         console.log("Odd");
//         break;
//     default:
//         console.log("Invalid input");
// }





// //q=19
// var num = Number(prompt("Enter a number"));
// switch (true)// I used ------true----- in the switch so I can check condition like (num > 0)
// // This way  the switch work like if-condition
// {
//     case (num > 0):
//         console.log("The number is Positive");
//         break;

//     case (num < 0):
//         console.log("The number is Negative");
//         break;

//     case (num == 0):
//         console.log("The number is Zero");
//         break;
//     default:
//         console.log("Invalid input");
// }






// //q-20
// const Logical = 1;
// const arithmetic = 2;
// var num1, num2, operator, result, operation;
// operation = Number(prompt("Select from the type of operation \nfor Logical press 1 \n for  arithmetic press 2 "));

// num1 = Number(prompt("Enter first number"));
// if (operation == Logical) operator = prompt("Enter operator ( & , | , ^ , ~ ");
// else if (operation == arithmetic) operator = prompt("Enter operator (+ , - , * , / ");

// if (operator != '~') {
//     num2 = Number(prompt("Enter second number"));
// }
// switch (operator) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         if (num2 == 0) result = "Error: Division by zero is not allowed";
//         else result = num1 / num2;
//         break;
//     case '&':
//         result = num1 & num2;
//         break;
//     case '|':
//         result = num1 | num2;
//         break;
//     case '^':
//         result = num1 ^ num2;
//         break;
//     case '~':
//         result = ~num1; //two's complement
//         break;

//     default:
//         result = "Invalid operator!";
//         console.log("Invalid operator!");
// }
// if (result != "Invalid operator!") console.log("Result: " + result);



